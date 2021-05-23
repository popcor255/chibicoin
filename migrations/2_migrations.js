const Dogecoin = artifacts.require("./Dogecoin.sol");

module.exports = function (deployer) {
  deployer.deploy(Dogecoin, "Dogecoin", "DOGE", 129560000000);
};
