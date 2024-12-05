import type { Chain } from "thirdweb";
import { ethereum, polygon, base, baseSepolia } from "./chains";

export type NftLaunch = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts launched by MEMORA NFT (DEMO).
 * This is of course hard-coded for demo purpose.
 *
 * In reality, the list should be dynamically fetched from our own data source.
 */
export const NFT_LAUNCHED: NftLaunch[] = [
  {
    address: "0xd2bf59352793087151d2740f6b5e3c845797a986",
    chain: polygon,
    title: "Huskee NFT",
    thumbnailUrl: "/nfts-icons/huskee-nft.png",
    type: "ERC721",
  },
  {
    address: "0x562914ef273cddb3ddc02e68c4ce6d9b1e5e8fa7",
    chain: ethereum,
    title: "Conserve Roty Broi",
    thumbnailUrl: "/nfts-icons/conserve-roty-broi.jpeg",
    type: "ERC721",
  },
  {
    address: "0x7eb71c33b26407d2eeb179c3f5ebdeab596f07bc",
    chain: ethereum,
    title: "MY RECEIPT of ETH",
    thumbnailUrl: "/nfts-icons/my-receipt-of-eth.gif",
    type: "ERC1155",
  },
  {
    address: "0xADa8d744441388a2964e1DB3911c912135d5206c",
    chain: ethereum,
    title: "Panthera LEO",
    thumbnailUrl: "/nfts-icons/panthera-leo.png",
    type: "ERC721",
  },
  {
    address: "0x369295d21063d51b76F23A683773963e03CBE742",
    chain: ethereum,
    title: "Art Meeting",
    thumbnailUrl: "/nfts-icons/art-meeting.gif",
    type: "ERC721",
  },
  {
    address: "0x81615f79f46f3c5ae9ee60046d9078fe6b42335c",
    chain: base,
    title: "WHAT IS NFT ????",
    thumbnailUrl: "/nfts-icons/what-is-nft.png",
    type: "ERC1155",
  },
  {
    address: "0x3246a0b6fe9b84481dee18fcf9774f092aae1e57",
    chain: base,
    title: "Brand New No Box",
    thumbnailUrl: "/nfts-icons/brand-new-no-box.png",
    type: "ERC721",
  },
  {
    address: "0x1cc4d96f26847f7449acf55969cdf8c6fa869920",
    chain: base,
    title: "Be Back Never",
    thumbnailUrl: "/nfts-icons/be-back-never.jpg",
    type: "ERC721",
  },
  {
    address: "0x109bd24a1ec4582c378581286a4257825247dd03",
    chain: base,
    title: "Built Not Bought",
    thumbnailUrl: "/nfts-icons/built-not-bought.jpg",
    type: "ERC721",
  },
  {
    address: "0xfd039ac57cc8e646802dba4b7cf6bc561e13a09a",
    chain: base,
    title: "BANANOW BASED NFTs",
    thumbnailUrl: "/nfts-icons/bananow-based-nfts.png",
    type: "ERC721",
  },
  {
    address: "0xE5720162c48E2D97a9c91426A29097e1fC521a22",
    chain: base,
    title: "FOOCKANG FUTIGES",
    thumbnailUrl: "/nfts-icons/foockang-futiges.png",
    type: "ERC721",
  },
  {
    address: "0xc3046681149f96746b362a64472fD4B1cd1E33B2",
    chain: baseSepolia,
    title: "KAWASAN ZERO",
    thumbnailUrl: "/nfts-icons/kawasan-zero.png",
    type: "ERC1155",
  },
];
