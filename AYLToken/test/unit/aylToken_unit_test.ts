import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber, Contract, Signer } from "ethers";
import { ethers } from "hardhat";

//We create a describe block for the aylToken unit test
describe("AYLToken", () => {
  let aylToken: Contract; //declare a global variable that will be used to hold our deployed test contract
  let accounts: SignerWithAddress[];
  //We create a before block that will run before the actual tests and delploy our contract.
  before(async () => {
    const AYLTOken = await ethers.getContractFactory("AYLToken");
    aylToken = await AYLTOken.deploy(ethers.utils.parseEther("40000000.0"));
    await aylToken.deployed();
  });

  //This will be executed everytime that a new test is run
  beforeEach(async () => {
    accounts = await ethers.getSigners();
  });

  //start a describe block, note several *it* can be in a single describe block
  describe("unit test of the ayltoken", () => {
    //Testing to make sure that 10M AYL Token was sent to the owner's address
    it("Owner should get 10m ayl", async () => {
      let balanceOfOwner = await aylToken.balanceOf(accounts[0].address);
      expect(ethers.utils.formatEther(balanceOfOwner)).to.equal("10000000.0");
    });

    it("should issue airdrop", async () => {
      await aylToken.issueAirDrop([accounts[1].address, accounts[2].address]);
      let balanceOfAccount1 = await aylToken.balanceOf(accounts[1].address);
      let balanceOfAccount2 = await aylToken.balanceOf(accounts[2].address);
      expect(ethers.utils.formatEther(balanceOfAccount1)).to.equal("200.0");
      expect(ethers.utils.formatEther(balanceOfAccount2)).to.equal("200.0");
    });

    it("Only owner can issueAirDrop", async () => {
      await expect(
        aylToken
          .connect(accounts[1])
          .issueAirDrop([accounts[1].address, accounts[2].address])
      ).to.revertedWith("Ownable: caller is not the owner");
    });

    it("Should receive ayl tokens on signup", async () => {
      await aylToken.connect(accounts[3]).receiveCoinsOnSignup();
      let balance = await aylToken.balanceOf(accounts[3].address);
      expect(ethers.utils.formatEther(balance)).to.equal("200.0");
    });

    it("Should not send ayl to the same address more than once on signup", async () => {
      await expect(
        aylToken.connect(accounts[3]).receiveCoinsOnSignup()
      ).to.revertedWith("You have already received AYL coins on signup");
    });

    //change the *maxNumberOfSignUpAddresses* to 2 in the ayl token
    it("Should not receive ayl after signup when max number is reached", async () => {
      await aylToken.connect(accounts[4]).receiveCoinsOnSignup();
      await expect(
        aylToken.connect(accounts[5]).receiveCoinsOnSignup()
      ).to.revertedWith(
        "Max number has been reach, you can no longer receive AYL coins on sign up"
      );
    });

    it("Should buy ayl coin", async () => {
      await aylToken
        .connect(accounts[6])
        .buyAYLCoins(2, { value: ethers.utils.parseEther("0.0001") });
      let balance = await aylToken.balanceOf(accounts[6].address);
      expect(ethers.utils.formatEther(balance)).to.equal("2.0");
    });

    it("Should fail to buy ayl coins", async () => {
      await expect(
        aylToken
          .connect(accounts[6])
          .buyAYLCoins(10, { value: ethers.utils.parseEther("0.0001") })
      ).to.revertedWith("Not enough ether");
    });

    it("Owner should receive ayl token without pay", async () => {
      const ownersBalance = await aylToken.balanceOf(accounts[0].address);
      await aylToken.connect(accounts[0]).buyAYLCoins(1);
      const newbalance = await aylToken.balanceOf(accounts[0].address);
      const balance = BigNumber.from(newbalance).sub(
        BigNumber.from(ownersBalance)
      );
      expect(ethers.utils.formatEther(balance)).to.equal("1.0");
    });

    it("Should update price", async () => {
      const price = await aylToken.price();
      await aylToken
        .connect(accounts[0])
        .updateAYLPrice(ethers.utils.parseEther("0.005"));
      const newPrice = await aylToken.price();
      const difference = newPrice - price;

      expect(ethers.utils.formatEther(difference)).to.equal("0.00495");
    });

    it("Should not update price", async () => {
      await expect(
        aylToken
          .connect(accounts[1])
          .updateAYLPrice(ethers.utils.parseEther("0.005"))
      ).to.revertedWith("Ownable: caller is not the owner");
    });
  });
});
