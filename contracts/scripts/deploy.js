// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
require("@nomiclabs/hardhat-etherscan");

const tokenAddress = "0x5d48060dE9bb0a258E848015E7F3aE5C46dc22Fc";

async function main() {
  const Contract = await hre.ethers.getContractFactory("ClaimRewards");

  let contract;
  contract = await Contract.deploy(tokenAddress);
  await contract.deployed();
  console.log(
    `NFT AUM Claim contract deployed to: https://testnet.snowtrace.io/address/${contract.address}`
  );

  saveFrontendFiles(contract, "ClaimRewards");
}

function saveFrontendFiles(token, contactType) {
  const fs = require("fs");
  const contractsDir = `../front-end/src/contracts-${contactType}`;

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ address: token.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync(contactType);

  fs.writeFileSync(
    contractsDir + "/contract-abi.json",
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//npx hardhat verify --network rinkeby --constructor-args arguments.js 0xBB0B8652822f4d5d9Bd1dF142fFdd6F1b035Fca4
