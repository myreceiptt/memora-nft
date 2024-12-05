import Link from "next/link";
import Image from "next/image";

export default function FeaturedCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 content-center">
      <button
        type="button"
        className="w-full justify-items-center p-2 rounded-lg border-2 border-solid border-transparent bg-foreground dark:bg-background text-background dark:text-foreground hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-lg font-[family-name:var(--font-geist-mono)] font-semibold">
          USER LOG IN
        </h1>
        <Link href="/">
          <Image
            className="invert dark:invert-0"
            src="/memora-logo.png"
            width={111}
            height={111}
            alt="Beware of Scams!"
          />
        </Link>
      </button>
      <button
        type="button"
        className="w-full justify-items-center p-2 rounded-lg border-2 border-solid border-transparent bg-foreground dark:bg-background text-background dark:text-foreground hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-lg font-[family-name:var(--font-geist-mono)] font-semibold">
          CLAIM ASSETS
        </h1>
        <Link href="/claim">
          <Image
            className="invert dark:invert-0"
            src="/memora-logo.png"
            width={111}
            height={111}
            alt="Beware of Scams!"
          />
        </Link>
      </button>
      <button
        type="button"
        className="w-full justify-items-center p-2 rounded-lg border-2 border-solid border-transparent bg-foreground dark:bg-background text-background dark:text-foreground hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-lg font-[family-name:var(--font-geist-mono)] font-semibold">
          CHECK PROFILE
        </h1>
        <Link href="/profile">
          <Image
            className="invert dark:invert-0"
            src="/memora-logo.png"
            width={111}
            height={111}
            alt="Beware of Scams!"
          />
        </Link>
      </button>
    </div>
  );
}
