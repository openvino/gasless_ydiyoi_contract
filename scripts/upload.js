const { AutotaskClient } = require("defender-autotask-client");

async function uploadCode(autotaskId, apiKey, apiSecret) {
  const client = new AutotaskClient({ apiKey, apiSecret });
  await client.updateCodeFromFolder(autotaskId, "./autotasks/relay");
}

async function main() {
  require("dotenv").config();

  const autotaskId = "d6236257-b1f1-4ccd-98cc-a799f19b4f88";
  const apiKey = "7xJ4pou9oFeTRVg9nmEKfdbBM2qcy5Q7";
  const apiSecret =
    "Dd2TVYfbw3AVUysRcsm8gcT8SJrTRq7UyuDxDtD9TAXXdWNLvMhGEBPELr4YMqGD";

  if (!autotaskId) throw new Error(`Missing autotask id`);
  await uploadCode(autotaskId, apiKey, apiSecret);
  console.log(`Code updated`);
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
