import { ethers } from "hardhat";
import hre from "hardhat";

const main = async () => {
  const AYLToken = await ethers.getContractFactory("AYLToken");
  const aylToken = await AYLToken.deploy(ethers.utils.parseEther("40000000.0"));
  await aylToken.deployed();

  console.log("AYLTOken is deployed on ", aylToken.address);
  console.log("Sleeping.......");
  await sleep(400000);

  await hre.run("verify:verify", {
    address: aylToken.address,
    constructorArguments: [ethers.utils.parseEther("40000000.0")],
  });
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
