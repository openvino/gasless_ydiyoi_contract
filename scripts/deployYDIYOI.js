const { ethers } = require("hardhat");
const { writeFileSync } = require("fs");

async function deploy(name, ...params) {
  const Contract = await ethers.getContractFactory(name);
  return await Contract.deploy(...params).then((f) => f.deployed());
}

async function main() {
  const registry = await deploy(
    "YDIYOI",
    "0x9631336e1ec31B71F619C1EC0EC5145BeF46088E", //PRIMERO  este es el contrato del minimalforwarder
    { gasLimit: 5000000} // agregar nonce: n si es necesario
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
