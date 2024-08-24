require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      accounts: ["d1a4046f02f52a67e57852b04e7fcb953d4fd765fab16e4d27d9d66879ba7df6"],
      url : "http://localhost:7545",
    }
  }
};
