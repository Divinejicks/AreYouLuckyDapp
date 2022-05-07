import { ethers } from "hardhat";
import hre from "hardhat";

const main = async () => {
  const AYLRandomWinner = await ethers.getContractFactory("AYLRandomWinner");
  const aylRandomWinner = await AYLRandomWinner.deploy(
    "0x92A9A4B0582e87DBef3DE7A88EBc838AB27AC5b4",
    3321
  );
  await aylRandomWinner.deployed();

  console.log("AYLRandomWinner is deployed on ", aylRandomWinner.address);
  console.log("Sleeping.......");
  await sleep(400000);

  await hre.run("verify:verify", {
    address: aylRandomWinner.address,
    constructorArguments: ["0xF340f93a6D841Cd835f6e05032e844e08c8a3Ee9", 3321],
  });
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
