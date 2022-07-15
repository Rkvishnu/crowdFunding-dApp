const hre = require('hardhat');

async function main() {
// getcontractfactory is provide by ethers js from that we can access our contracts from artifacts
    const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory")
    const campaignFactory = await CampaignFactory.deploy();

    await campaignFactory.deployed();

    console.log("Factory deployed to:", campaignFactory.address);
}   

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });