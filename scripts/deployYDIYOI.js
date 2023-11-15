const { ethers } = require("hardhat");
const { writeFileSync } = require("fs");

async function deployYDIYOI(minimalForwarderAddress) {
  const Contract = await ethers.getContractFactory("YDIYOI");
  const ydiyoi = await Contract.deploy(minimalForwarderAddress);
  await ydiyoi.deployed();

  writeFileSync(
    "deploy-ydiyoi.json",
    JSON.stringify(
      {
        YDIYOI: ydiyoi.address,
      },
      null,
      2
    )
  );

  console.log(`YDIYOI deployed at: ${ydiyoi.address}`);
}

if (require.main === module) {
  // Replace 'minimalForwarderAddress' with the actual address obtained from the MinimalForwarder deployment
  const minimalForwarderAddress = "0xf8bcB2E01b0D18fbbb82D04201512c9c67Af9755";

  deployYDIYOI(minimalForwarderAddress)
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
