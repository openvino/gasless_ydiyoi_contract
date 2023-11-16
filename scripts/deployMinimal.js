const { ethers } = require("hardhat");
const { writeFileSync } = require("fs");

async function deployMinimalForwarder() {
  const Contract = await ethers.getContractFactory("MinimalForwarder");
  const minimalForwarder = await Contract.deploy({
    gasLimit: 5000000,
    nonce: 42,
  });
  await minimalForwarder.deployed();

  writeFileSync(
    "deploy-minimal-forwarder.json",
    JSON.stringify(
      {
        MinimalForwarder: minimalForwarder.address,
      },
      null,
      2
    )
  );

  console.log(`MinimalForwarder deployed at: ${minimalForwarder.address}`);
}

if (require.main === module) {
  deployMinimalForwarder()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
