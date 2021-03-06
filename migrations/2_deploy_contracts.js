var MyToken = artifacts.require('MyToken');
var MyTokenSales = artifacts.require('./MyTokenSale');

module.exports = async function (deployer) {
	let addr = await web3.eth.getAccounts();
	await deployer.deploy(MyToken, 7777777);
	await deployer.deploy(MyTokenSales, 1, addr[0], MyToken.address);
	let tokenInstance = await MyToken.deployed();
	await tokenInstance.transfer(MyTokenSales.address, 7777777);
};
