const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
// const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants/index");

async function main() {
    const CampaignFactory = await ethers.getContractFactory("CampaignFactory")
    const campaignFactory = await CampaignFactory.deploy();

    await campaignFactory.deployed();

    console.log("Factory deployed to:", campaignFactory.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });