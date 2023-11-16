const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('https://optimism-goerli.infura.io/v3/55af80a1870143afa413ae8a7847d540');

let YOUR_ACCOUNT_ADDRESS= '0x9CfFaE608F0C0F12973489f786591A56cd3a77aF'

async function getNonce() {
  const nonce = await provider.getTransactionCount(YOUR_ACCOUNT_ADDRESS);
  console.log(`The nonce for your account is: ${nonce}`);
}

async function getBalance() {
    const balance = await provider.getBalance(YOUR_ACCOUNT_ADDRESS);
    console.log(`The balance for your account is: ${balance.toString()} wei`);
}
  
getNonce();
getBalance();
