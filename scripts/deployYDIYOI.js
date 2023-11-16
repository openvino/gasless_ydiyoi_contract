const { ethers } = require("hardhat");
const { writeFileSync } = require("fs");

async function deploy(name, ...params) {
  const Contract = await ethers.getContractFactory(name);
  return await Contract.deploy(...params).then((f) => f.deployed());
}

async function main() {
  const registry = await deploy(
    "YDIYOI",
    "0x0746396e913b04029f36f2F5d81b767a380575A0", //PRIMERO 
    { gasLimit: 5000000, nonce: 43 }
  );

  writeFileSync(
    "deploy.json",
    JSON.stringify(
      {
        Registry: registry.address,
      },
      null,
      2
    )
  );

  console.log(`Registry: ${registry.address}`);
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
