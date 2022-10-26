require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli : {
      url: 'https://eth-goerli.g.alchemy.com/v2/LS9hYn1XaS40YmcZRsOYOGn-zqnJJ2dc',
      accounts: [ 'd34f5525f3fe505d3e6220a1d1ff8d53458c80c0dcac557c217ae048f0eea389' ]
    },
  },
};