import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Ayl whitelisting unit test", () => {
  let aylWhitelist: Contract;
  let accounts: SignerWithAddress[];

  before(async () => {
    const AYLWhiteList = await ethers.getContractFactory("AYLWhiteList");
    aylWhitelist = await AYLWhiteList.deploy();
    await aylWhitelist.deployed();
  });

  beforeEach(async () => {
    accounts = await ethers.getSigners();
  });

  describe("Whitelist contract", () => {
    it("should add address to withlist", async () => {
      await aylWhitelist.connect(accounts[0]).addToWhiteList();
      await aylWhitelist.connect(accounts[1]).addToWhiteList();
      await aylWhitelist.connect(accounts[2]).addToWhiteList();
      await aylWhitelist.connect(accounts[3]).addToWhiteList();
      await aylWhitelist.connect(accounts[4]).addToWhiteList();
      let whitelistedAddress = await aylWhitelist
        .connect(accounts[0])
        .getWhitelistedAddresses();
      expect(whitelistedAddress.length).to.equal(5);
    });

    it("Should not add address to whitelist more than once", async () => {
      await expect(
        aylWhitelist.connect(accounts[1]).addToWhiteList()
      ).to.revertedWith("This address has already been whitelisted");
    });

    //Change the maxWhiteListedAddresses in the contract from 100 to 5
    it("Should not add address to whitelist when max is reached", async () => {
      await expect(
        aylWhitelist.connect(accounts[6]).addToWhiteList()
      ).to.revertedWith("Maximum number of whitelisted addresses reached");
    });

    it("Should get whitelisted addresses", async () => {
      let whitelistedAddress = await aylWhitelist
        .connect(accounts[0])
        .getWhitelistedAddresses();
      expect(whitelistedAddress.length).to.equal(5);
    });

    it("Should not get whitelisted addresses", async () => {
      await expect(
        aylWhitelist.connect(accounts[1]).getWhitelistedAddresses()
      ).to.revertedWith("Only the owner can do this action");
    });
  });
});
