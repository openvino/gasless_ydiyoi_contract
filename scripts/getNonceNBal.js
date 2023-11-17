const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('https://optimism-goerli.infura.io/v3/55af80a1870143afa413ae8a7847d540');

let YOUR_ACCOUNT_ADDRESS= '0x75a9D13A4199a1052E09Bc8052E015A2b42d1F9F'

async function getNonce() {
  const nonce = await provider.getTransactionCount(YOUR_ACCOUNT_ADDRESS);
  console.log(`The nonce for your account is: ${nonce}`);
}

async function getBalance() {
    const balance = await provider.getBalance(YOUR_ACCOUNT_ADDRESS);
    console.log(`The balance for your account is: ${balance.toString()} wei`);
    const balanceInEthers = ethers.utils.formatEther(balance);
    console.log(`The balance for your account is: ${balanceInEthers} ethers`);
}
  
getNonce();
getBalance();
