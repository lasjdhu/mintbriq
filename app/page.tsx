import GlassSurface from "./_components/GlassSurface";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full min-w-0 flex-1 px-4 text-center">
      <header className="absolute inset-x-0 top-8 z-10 flex justify-center">
        <Image
          src="/icon.svg"
          alt="MintBriq"
          width={88}
          height={88}
          priority
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
      </header>

      <section className="grid h-full grid-rows-[1fr_48px_1fr] justify-items-center">
        <h1 className="self-end pb-8 text-3xl font-extrabold sm:text-4xl">
          Find your next pet project
        </h1>

        <div className="w-full max-w-md">
          <GlassSurface
            width="100%"
            height={48}
            borderRadius={100}
            className="max-w-full flex items-center justify-between pl-4"
          >
            <input
              id="user"
              type="text"
              name="user"
              placeholder="Enter your GitHub username"
              className="block min-w-0 grow py-1.5 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Find project recommendations"
              className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            >
              <ArrowUp width={16} height={16} />
            </button>
          </GlassSurface>
        </div>

        <p className="max-w-lg self-start pt-8 text-md sm:text-lg text-slate-400">
          <span className="font-bold text-teal-400">MintBriq</span> analyzes
          your GitHub repositories and recommends a pet project that&apos;s close
          enough to your current skills to be achievable, but different enough
          to challenge you.
        </p>
      </section>
    </div>
  );
}
