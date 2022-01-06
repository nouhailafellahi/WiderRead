require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'ALCHEMY_API_URL',
      accounts: ['METAMASK_RINKEBY_PRIVATE_KEY'],
    },
  },
};