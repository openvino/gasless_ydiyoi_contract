const CONTRACT_ADDRESS = "0x8eac91ad910F714510cc769abA193d3573370bB0";
const RELAYER_ADDRESS = "0xAdDa86cE112D8F382464D90bDE81735d7Cb58FF3";

async function mintNFT(contractAddress, relayerAddress) {
  const ExampleNFT = await ethers.getContractFactory("YDIYOI");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).safeMint(
    relayerAddress,
    "ipfs://QmUyrjxwifaWiKPpHy9cadMu7Lcb7F8EufLwUhnD3hvsXQ"
  );
  console.log("Set Relayer address: ", RELAYER_ADDRESS);
}

mintNFT(CONTRACT_ADDRESS, RELAYER_ADDRESS)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
