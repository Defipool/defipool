require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider');

const getEnv = env => {
  const value = process.env[env];
  if (typeof value === 'undefined') {
    throw new Error(`${env} has not been set.`);
  }
  return value;
};

const mnemonic = getEnv('ETH_WALLET_MNEMONIC');
const testnet = getEnv('TESTNET_URI');
const testnetId = getEnv('TESTNET_ID');
const mainnet = getEnv('MAINNET_URI');
const mainnetId = getEnv('MAINNET_ID');
const BSCSCAN_API_KEY = getEnv('BSCSCAN_API_KEY');

const Web3 = require("web3");
const web3 = new Web3();
/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */


module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
  // contracts_directory: "./contracts/logic/Exchange.sol",
  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*',  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      networkCheckTimeout: 500000
    },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websocket: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, testnet),
      network_id: testnetId,       // Testnet's id
      gas: 3000000,        // Testnet has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 250,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true    // Skip dry run before migrations? (default: false for public nets )
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, mainnet),
      network_id: mainnetId,
      gas: 4000000,
      gasPrice: 1000000000
    },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency: 'USD',
      gasPrice: 2
    }
  },

  // Configure your compilers
  compilers: {
    // solc: {
    //   version: "0.5.16",    // Fetch exact version from solc-bin (default: truffle's version)
    //   docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
    //   settings: {          // See the solidity docs for advice about optimization and evmVersion
    //    optimizer: {
    //      enabled: true,
    //      runs: 200
    //    },
    //   //  evmVersion: "default"
    //   }
    // }
    solc: {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled : true,
          runs: 200
        },
        evmVersion: "default"
      }
    }
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: BSCSCAN_API_KEY
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
