const { ethers } = require("hardhat");
const { writeFileSync } = require("fs");

async function deploy(name, ...params) {
  const Contract = await ethers.getContractFactory(name);

  // Aumentar el límite de gas (ajusta el valor según sea necesario)
  const gasLimit = 5000000; // Puedes ajustar este valor según tus necesidades

  return await Contract.deploy(...params, { gasLimit }).then((f) =>
    f.deployed()
  );
}

async function main() {
  const forwarder = await deploy("MinimalForwarder");
  const registry = await deploy("YDIYOI", forwarder.address);

  writeFileSync(
    "deploy.json",
    JSON.stringify(
      {
        MinimalForwarder: forwarder.address,
        Registry: registry.address,
      },
      null,
      2
    )
  );

  console.log(
    `MinimalForwarder: ${forwarder.address}\nRegistry: ${registry.address}`
  );
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
