import Link from "next/link";
import Image from "next/image";

export default function HeaderCard() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] gap-4 content-center">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="">
          <Image
            className="invert-0 dark:invert"
            src="/memora-logo.png"
            width={111}
            height={111}
            alt="Memora Logo"
            priority
          />
        </div>
        <div className="text-sm sm:text-left">
          <h1 className="mb-2 text-foreground dark:text-background text-center text-lg font-[family-name:var(--font-geist-sans)] font-semibold">
            MEMORA NFT
          </h1>
          <h2 className="mb-2 text-foreground dark:text-background text-center text-lg font-semibold">
            <code className="bg-foreground dark:bg-background text-background dark:text-foreground px-1 py-0.5 rounded text-base font-[family-name:var(--font-geist-mono)] font-semibold">
              (DEMO)
            </code>
          </h2>
          <h3 className="text-foreground dark:text-background text-center text-lg font-semibold">
            This DEMO is intended to offer the creation of a product that is
            expected to consistently run well and as well as possible, according
            to the income generated and the value formed by its users.
          </h3>
        </div>
        <div className="flex gap-4 items-center flex-col">
          <h4 className="text-foreground dark:text-background text-center text-lg font-semibold">
            MEMORA NFT (DEMO) proud enough to be offered to you by us, The
            VOYAGE.
          </h4>
          <button
            type="button"
            className="flex rounded border-2 border-solid border-transparent bg-foreground dark:bg-background hover:border-foreground hover:dark:border-background hover:bg-background hover:dark:bg-foreground text-background dark:text-foreground hover:text-foreground dark:hover:text-background transition-colors duration-300 ease-in-out items-center">
            <Link
              href="/viaticum"
              target="_blank"
              rel="noopener noreferrer"
              title="Bon voyage! 🚀">
              <h5 className="text-center text-lg px-1 py-0.5 font-[family-name:var(--font-geist-mono)] font-semibold">
                The VOYAGE
              </h5>
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}
