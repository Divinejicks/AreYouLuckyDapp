import { ethers } from "hardhat";
import hre from "hardhat";

const main = async () => {
  const AYLRandomWinner = await ethers.getContractFactory("AYLRandomWinner");
  const aylRandomWinner = await AYLRandomWinner.deploy(
    "0x28ECc17584FB4A32D76031BdDF9cEc8c7df17cdd",
    3321
  );
  await aylRandomWinner.deployed();

  console.log("AYLRandomWinner is deployed on ", aylRandomWinner.address);
  console.log("Sleeping.......");
  await sleep(400000);

  await hre.run("verify:verify", {
    address: aylRandomWinner.address,
    constructorArguments: ["0x28ECc17584FB4A32D76031BdDF9cEc8c7df17cdd", 3321],
  });
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
