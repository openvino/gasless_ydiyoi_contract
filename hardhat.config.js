/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");
const dotenv = require("dotenv");

dotenv.config();
const { PRIVATE_KEY } = process.env;
dotenv.config();
module.exports = {
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "ZQS6Z5DYYI9GBH5HTWMMZ3UEQZKU1X273I",
  },

  defaultNetwork: "PolygonMumbai",
  networks: {
    OptimismTestnet: {
      url: "https://goerli.optimism.io",
      accounts: [PRIVATE_KEY],
      gasPrice: 5000000000,
    },

    Optimism: {
      url: "https://mainnet.optimism.io",
      accounts: [PRIVATE_KEY],
      gasPrice: 5000000000,
    },

    hardhat: {},
    PolygonMumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
    },
    ganache: {
      url: "http://172.31.240.1:7545",
      accounts: [
        `0xeac2f62c85e64a62546d8067ada59e1ce712e44ef86389d14c60f6e7e9609cf1`,
      ],
    },
  },
  deploy: {
    // ...
    // Asegúrate de que esta opción esté habilitada
    metadata: true,
  },

  solidity: {
    compilers: [
      {
        version: "0.6.4",
      },
      {
        version: "0.8.4",
        settings: {},
      },
    ],
  },
};
