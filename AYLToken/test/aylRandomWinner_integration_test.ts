import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("AYL Random Winner Intergration Test", () => {
  let aylRandomWinner: Contract;
  let aylToken: Contract;
  let accounts: SignerWithAddress[];

  before(async () => {
    const AYLToken = await ethers.getContractFactory("AYLToken");
    aylToken = await AYLToken.deploy(ethers.utils.parseEther("40000000.0"));
    await aylToken.deployed();

    const AYLRandomWinner = await ethers.getContractFactory("AYLRandomWinner");
    aylRandomWinner = await AYLRandomWinner.deploy(aylToken.address, 3321);
    await aylRandomWinner.deployed();
  });

  beforeEach(async () => {
    accounts = await ethers.getSigners();
  });

  describe("AYLRandomWinner", () => {
    it("Should be able to start a new game", async () => {
      await aylToken.connect(accounts[1]).receiveCoinsOnSignup();
      await aylToken
        .connect(accounts[1])
        .approve(aylRandomWinner.address, ethers.utils.parseEther("100.0"));
      await aylRandomWinner.connect(accounts[1]).startGame(3, 100);
      expect(await aylRandomWinner.gameStarted(0)).to.equal(true);
    });

    it("should join game", async () => {
      await aylToken.connect(accounts[2]).receiveCoinsOnSignup();
      await aylToken
        .connect(accounts[2])
        .approve(aylRandomWinner.address, ethers.utils.parseEther("100.0"));
      await aylRandomWinner.connect(accounts[2]).joinGame(0, 100);
      await expect(await aylRandomWinner.getPlayersCount(0)).to.equal(2);
    });

    it("should not join a game that has not start", async () => {
      await aylToken
        .connect(accounts[0])
        .approve(aylRandomWinner.address, ethers.utils.parseEther("100.0"));
      await expect(
        aylRandomWinner.connect(accounts[0]).joinGame(1, 100)
      ).to.revertedWith("A game with this id has not been started");
    });

    it("should not join a game with wrong entry fee", async () => {
      await aylToken
        .connect(accounts[0])
        .approve(aylRandomWinner.address, ethers.utils.parseEther("100.0"));
      await expect(
        aylRandomWinner.connect(accounts[0]).joinGame(0, 10)
      ).to.revertedWith("Entry fee should be the required entry fee amount");
    });

    it("Should not be able to start a game with the same params when another is live", async () => {
      await aylToken
        .connect(accounts[2])
        .approve(aylRandomWinner.address, ethers.utils.parseEther("100.0"));
      await expect(
        aylRandomWinner.connect(accounts[2]).startGame(3, 100)
      ).to.revertedWith("AYLRandomWinner__SameParamGameExist()");
    });

    // it("should not join a game and choose a winner", async () => {
    //   await aylToken
    //     .connect(accounts[0])
    //     .approve(aylRandomWinner.address, ethers.utils.parseEther("100.0"));
    //   await aylRandomWinner.connect(accounts[0]).joinGame(0, 100);
    // });
  });
});
