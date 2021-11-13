export const config = {
  tokenVestingContractAddress: process.env.VUE_APP_SOURCE_ADDRESS,
  explorerRootURL: process.env.VUE_APP_NETWORK_EXPLORER,
  tokenVestingContractAbi: require("./assets/abi/TokenVesting.json"),
  tokenVestingContractBytecode: require("./assets/bytecode/TokenVesting.json")
    .bytecode,
  erc20ContractAbi: require("./assets/abi/ERC20.json"),
};
console.log(config);

export default config;
