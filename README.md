# Gasless Contract for YDIYOI

## Overview

This repository contains the code for deploying an ERC721 contract with a gasless function. This function allows users to mint NFTs on [https://nft.openvino.org/](https://nft.openvino.org/) without having to pay for gas fees.

## Integration with openvinoapp

To deploy this contract and integrate it with [openvinoapp](https://github.com/openvino/openvinoapp), follow these steps:

### Configure Environment Variables

1. Create a `.env` file in the root of your project.
2. Add your wallet's private key to the `.env` file. It's preferable to use a wallet on the Mainnet of Optimism (OP). Example:

```shell
PRIVATE_KEY= 0xc9...
```

### Deployment

3. Execute the following commands to deploy the contract on the Optimism main network:

```shell
npm i
npx hardhat run scripts/deployGasless.js --network Optimism

```

Setting up the deploy.json File

After completing the implementation of the gasless ERC721 contract, a file named deploy.json will be generated in the root of your project.
Integration with openvinoapp

To integrate this deploy.json file with openvinoapp, follow these steps:

Copy the generated deploy.json file from the root of your project.

Paste the deploy.json file into the following location within the openvinoapp repository:

```shell

openvinoapp/src/eth

```
---------------------------------------------------------
|                    ATTENTION NOTICE                    |
|-------------------------------------------------------|
| Any modifications to the base contract will require  |
| updates to the 'YDIYOI.json' file located in the     |
| 'openvinoapp/src/contract' directory. Please ensure  |
| that this file is kept up-to-date with the latest    |
| changes in the contract to maintain proper function. |
| Thank you for your attention and cooperation.        |
---------------------------------------------------------