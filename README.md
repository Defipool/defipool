DeFiPool Finance is a Solidity based protocol for [DeFiPool](https://defipool.finance/) webiste, gathering the best from Crypto
Web 3.0 world into one place. Features include (or will include in nearest future):

- BEP-20 tokens.
- Creating Liquidity Pools.
- Staking.
- Farming.
- Real randomness and Lotteries.
- Bridges and multi-chain.
- Loans.
- Security audits.
- Governance and voting.
- Truffle environment for developing.

More detailed information about features and DeFiPool capabilities please visit [Docs page](https://defipool.finance/docs) and
find Roadmap section.

| ℹ️ **Contributors**: Please see the [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) file before any actions. |
| --------------------------------------------------------------------------------------- |

### Install

Project requires NPM and Truffle environment for ompiling, testing and running. Start with:

```
$ npm install -g truffle
```

_Note: To avoid any strange permissions errors, we recommend using [nvm](https://github.com/nvm-sh/nvm)._

### Quick Usage

For a default set of contracts and tests, run the following within an empty project directory:

```
$ truffle init
```

From there, you can run `truffle compile`, `truffle migrate` and `truffle test` to compile your contracts, deploy those contracts to the network, and run their associated unit tests.

Truffle comes bundled with a local development blockchain server that launches automatically when you invoke the commands above. If you'd like to [configure a more advanced development environment](https://trufflesuite.com/docs/truffle/reference/configuration) we recommend you install the blockchain server separately by running `npm install -g ganache` at the command line.

- [ganache](https://github.com/trufflesuite/ganache): a command-line version of Truffle's blockchain server.
- [ganache-ui](https://github.com/trufflesuite/ganache-ui): A GUI for the server that displays your transaction history and chain state.

### Documentation

Please see the [Official Truffle Documentation](https://trufflesuite.com/docs/) for guides, tips, and examples.

### Development

We welcome pull requests. To get started, just fork this repo, clone it locally, and run:

```shell
# Install
npm install -g yarn
yarn bootstrap

# Test
yarn test

# Adding dependencies to a package
cd packages/<truffle-package>
yarn add <npm-package> [--dev] # Use yarn
```

If you'd like to update a dependency to the same version across all packages, you might find [this utility](https://www.npmjs.com/package/lerna-update-wizard) helpful.

_Notes on project branches:_

- `master`: Stable, released version (v1.1)
- `dev`: Dev branch with alpha-, beta- and non-released features (from Contributors)

Please make pull requests against `dev`.

Once again, the rules of contributing process is described in [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) file.
Please, make sure to read before any actions in this repository.

### License

[MIT](./LICENSE)