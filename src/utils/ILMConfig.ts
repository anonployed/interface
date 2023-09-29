export const IsAllowListedForILM = (asset: string) =>
  [
    //cbETH
    '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22'.toLowerCase(),
    //USDbC
    //'0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA'.toLowerCase(),
    //WETH
    '0x4200000000000000000000000000000000000006'.toLowerCase(),
    //   //Native USDC
    //   '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    //   //DAI
    //   '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
  ].includes(asset.toLowerCase());
