import Link from "next/link";
import Image from "next/image";
import { NFT_CONTRACTS } from "@/consts/nft_contracts";

export default function FeaturedAssets() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] gap-4 content-center">
      <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Top Collections</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-8">
          {NFT_CONTRACTS.map((item) => (
            <Link
              key={item.address}
              href={`/collection/${item.chain.id.toString()}/${item.address}`}
              className="group">
              <Image
                alt={`${item.title} Collection`}
                src={`${item.thumbnailUrl}`}
                width={474}
                height={474}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {item.chain.id.toString()}: {item.address}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
