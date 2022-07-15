const CampaignFactory = require("./artifacts/contracts/Campaign.sol/CampaignFactory.json");
const Campaign = require("./artifacts/contracts/Campaign.sol/Campaign.json");
const { ethers } = require("ethers");
require("dotenv").config({ path: "./.env.local" });

const main = async () => {
  
    // const provider = new ethers.providers.JsonRpcProvider(
    //   process.env.NEXT_PUBLIC_RPC_URL
    // );

    // const contract = new ethers.Contract(
    //   process.env.NEXT_PUBLIC_ADDRESS,
    //   CampaignFactory.abi,
    //   provider
    // );

    // const getDeployedCampaign = contract.filters.campaignCreated(null,null,null,null,null,null,'Health');
    // let events = await contract.queryFilter(getDeployedCampaign);
    // let event = events.reverse();
    // console.log(event);

  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_RPC_URL
  );

  const contract = new ethers.Contract(
    "0x9Cd0f313d9FE6556A15d6d44CE64dd1FD7318e73",
    Campaign.abi,
    provider
  );

  const Donations = contract.filters.donated('0xE9Ad3074Fe9c5fD89E30d02046d5A49a9A469421');
  const AllDonations = await contract.queryFilter(Donations);

  const DonationsData =  AllDonations.map((e) => {
    return {
      donar: e.args.donar,
      amount: parseInt(e.args.amount),
      timestamp : parseInt(e.args.timestamp)
  }});

  console.log(DonationsData);

};

main();
