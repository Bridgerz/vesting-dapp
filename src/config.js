const env = process.env.NODE_ENV;

// TODO fill parameters values
const localHostConfig = {
  tokenVestingContractAddress: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
  explorerRootURL: "https://explorer.celo.org",
  tokenVestingContractAbi: require("./assets/abi/TokenVesting.json"),
  tokenVestingContractBytecode: require("./assets/bytecode/TokenVesting.json")
    .bytecode,
  erc20ContractAbi: require("./assets/abi/ERC20.json"),
};

// TODO fill parameters values
const bscTesnetConfig = {
  tokenVestingContractAddress: "0x3A51FE2790f2Fc13e992fa582c63A88CB925154B",
  explorerRootURL: "https://explorer.celo.org",
  tokenVestingContractAbi: require("./assets/abi/TokenVesting.json"),
  tokenVestingContractBytecode: require("./assets/bytecode/TokenVesting.json")
    .bytecode,
  erc20ContractAbi: require("./assets/abi/ERC20.json"),
};

// TODO fill parameters values
const mainnetConfig = {
  tokenVestingContractAddress: "0x3A51FE2790f2Fc13e992fa582c63A88CB925154B",
  explorerRootURL: "https://explorer.celo.org",
  tokenVestingContractAbi: require("./assets/abi/TokenVesting.json"),
  tokenVestingContractBytecode: require("./assets/bytecode/TokenVesting.json")
    .bytecode,
  erc20ContractAbi: require("./assets/abi/ERC20.json"),
};
const defaultConfig = mainnetConfig;

export let globalConfig;
switch (env) {
  case "development":
    globalConfig = localHostConfig;
    break;
  case "preproduction":
    globalConfig = bscTesnetConfig;
    break;
  case "production":
    globalConfig = mainnetConfig;
    break;
  case undefined:
    globalConfig = defaultConfig;
    break;
}
