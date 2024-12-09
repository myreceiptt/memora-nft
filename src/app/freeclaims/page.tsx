"use client";

import React from "react";
import Link from "next/link";
import { balanceOf, claimTo, getNFT } from "thirdweb/extensions/erc1155";
import {
  MediaRenderer,
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import {
  // memoraZeroEditionDrop,
  // memoraOneEditionDrop,
  // memoraOneEditionDropPolygon,
  // memoraT0kenDrop,
  // memoraTokenDrop,
  // memoraTokenDropPolygon,
  bukhariVirtualCollectibles,
} from "@/consts/launched_contracts";
import { client } from "@/consts/client";
import { ThirdwebContract } from "thirdweb";
import FeaturedAssets from "@/components/home-page/FeaturedAssets";

const FreeClaims: React.FC = () => {
  const smartAccount = useActiveAccount();

  return (
    <div className="flex flex-col gap-4 content-normal px-8 md:px-20 m-4">
      <div className="grid grid-rows-[20px_1fr_20px] gap-4 content-center">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-foreground dark:text-background text-center text-xl font-[family-name:var(--font-geist-sans)] font-semibold">
              BUKHARI VIRTUAL COLLECTIBLES
            </h1>
            <h2 className="text-foreground dark:text-background text-center text-lg font-semibold">
              <code className="bg-foreground dark:bg-background text-background dark:text-foreground px-1 py-0.5 rounded text-base font-[family-name:var(--font-geist-mono)] font-semibold">
                Free to Claim
              </code>
            </h2>
            <h3 className="text-foreground dark:text-background text-center text-lg font-semibold">
              All transactions on the blockchain are gasless (no-fee)
              transactions since the MEMORA App pays for them on behalf of a
              user.
            </h3>
            <h4 className="text-foreground dark:text-background text-center text-lg font-semibold">
              <Link
                href="https://testnets.opensea.io/collection/bukhari-virtual-collectibles"
                target="_blank">
                <code className="bg-foreground dark:bg-background text-background dark:text-foreground px-1 py-0.5 rounded text-base font-[family-name:var(--font-geist-mono)] font-semibold">
                  As Seen on OpenSea.IO
                </code>
              </Link>
            </h4>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <NFTClaimer
              receiverAddress={smartAccount?.address}
              dropContract={bukhariVirtualCollectibles}
              tokenId={3n}
            />
            <NFTClaimer
              receiverAddress={smartAccount?.address}
              dropContract={bukhariVirtualCollectibles}
              tokenId={4n}
            />
            <NFTClaimer
              receiverAddress={smartAccount?.address}
              dropContract={bukhariVirtualCollectibles}
              tokenId={5n}
            />
          </div>
        </main>
      </div>
      <FeaturedAssets />
    </div>
  );
};

type NFTClaimerProps = {
  receiverAddress?: string;
  dropContract: ThirdwebContract;
  tokenId: bigint;
};

const NFTClaimer: React.FC<NFTClaimerProps> = (props: NFTClaimerProps) => {
  const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
    contract: props.dropContract,
    tokenId: props.tokenId,
  });
  const { data: ownedNfts } = useReadContract(balanceOf, {
    contract: props.dropContract,
    owner: props.receiverAddress!,
    tokenId: props.tokenId,
    queryOptions: { enabled: !!props.receiverAddress },
  });
  return (
    <>
      <div className="flex flex-col gap-2 w-full justify-items-center p-2 rounded-lg bg-foreground dark:bg-background text-background dark:text-foreground">
        {isNftLoading ? (
          <h2 className="text-center text-lg font-semibold">
            <code className="bg-background dark:bg-foreground text-foreground dark:text-background px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              Loading...
            </code>
          </h2>
        ) : (
          <>
            {nft ? (
              <MediaRenderer
                client={client}
                src={nft.metadata.image}
                className="rounded-lg bg-background dark:bg-foreground w-full max-w-xs"
              />
            ) : null}
            {props.receiverAddress ? (
              <>
                <h2 className="text-background dark:text-foreground text-center text-base font-[family-name:var(--font-geist-sans)] font-semibold uppercase">
                  {nft?.metadata.name}
                </h2>
                <h2 className="text-background dark:text-foreground text-center text-base font-[family-name:var(--font-geist-sans)] font-semibold">
                  On {props.dropContract.chain.name}
                </h2>
                <h2 className="text-background dark:text-foreground text-center text-base font-[family-name:var(--font-geist-sans)] font-semibold">
                  You Own {ownedNfts?.toString() || "0"} Edition
                </h2>
                <TransactionButton
                  unstyled
                  className="rounded-lg p-2 text-foreground dark:text-background hover:text-background hover:dark:text-foreground border-2 border-solid border-transparent bg-background dark:bg-foreground hover:border-background hover:dark:border-foreground hover:bg-foreground hover:dark:bg-background transition-colors duration-300 ease-in-out items-center justify-center text-lg leading-9 font-[family-name:var(--font-geist-mono)] font-semibold uppercase"
                  transaction={() =>
                    claimTo({
                      contract: props.dropContract,
                      tokenId: props.tokenId,
                      to: props.receiverAddress!,
                      quantity: 1n,
                    })
                  }
                  onError={(error) => {
                    alert(`Error: ${error.message}`);
                  }}
                  onTransactionConfirmed={async () => {
                    alert("Claim successful!");
                  }}>
                  CLAIM NOW!
                </TransactionButton>
              </>
            ) : (
              <>
                <h2 className="text-background dark:text-foreground text-center text-base font-[family-name:var(--font-geist-sans)] font-semibold uppercase">
                  {nft?.metadata.name}
                </h2>
                <h2 className="text-background dark:text-foreground text-center text-base font-[family-name:var(--font-geist-sans)] font-semibold">
                  On {props.dropContract.chain.name}!
                </h2>
                <h2 className="text-background dark:text-foreground text-center text-base font-[family-name:var(--font-geist-sans)] font-semibold">
                  Log in to Claim!
                </h2>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default FreeClaims;
