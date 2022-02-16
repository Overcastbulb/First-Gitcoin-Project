const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy({ value: hre.ethers.utils.parseEther("0.001") });

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();