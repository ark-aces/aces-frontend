// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  title: 'Ark Contract Execution Services (ACES)',
  isEthTestnet: true,
  ethNetworkName: 'ropsten',
  etherscanBaseUrl: 'https://ropsten.etherscan.io',
  ethArkRateFraction: '1/100',
  arkExplorerBaseUrl: 'https://explorer.ark.io',
  acesApiBaseUrl: 'http://localhost:8080'
};
