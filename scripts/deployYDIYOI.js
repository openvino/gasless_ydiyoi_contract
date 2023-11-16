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
  const minimalForwarderAddress = "0xa75106E0F8261dfFE5cE35eB96F043BA90Be7c51";

  deployYDIYOI(minimalForwarderAddress)
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
