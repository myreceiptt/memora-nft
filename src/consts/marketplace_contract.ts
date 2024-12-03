import type { Chain } from "thirdweb";
import { ethereum, polygon, base, baseSepolia } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * We need a marketplace contract on each of the chain we want to support.
 * Only list one marketplace contract address for each chain.
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  // {
  //   address: "0xC0b5e3111B8f09D3242C792C59e13857b62B0C78", // ENDHONESA DIGITAL
  //   chain: ethereum,
  // },
  {
    address: "0xC979B5AA97C513d8fCd48DDbe908C998455530d8", // ENDHONESA DIGITAL
    chain: polygon,
  },
  {
    address: "0xc12c7E270685211A2ddcaD741e9378882762CdB1", // MEMORA TRIAL
    chain: base,
  },
  {
    address: "0xC0b5e3111B8f09D3242C792C59e13857b62B0C78", // NFT MARKETPLACE TRIAL
    chain: baseSepolia,
  },
];
