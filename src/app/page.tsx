import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center max-w-4xl w-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-8">
          Corporate Speak
        </h1>

        <div className="w-full max-w-2xl">
          <label
            htmlFor="corporate-input"
            className="block text-sm font-medium mb-2"
          >
            Enter your text to translate into corporate jargon
          </label>
          <div className="flex gap-2">
            <input
              id="corporate-input"
              type="text"
              className="flex-1 px-4 py-3 rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5"
              placeholder="I need this done quickly"
            />
            <button
              type="submit"
              className="px-4 py-3 rounded-md bg-foreground text-background font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
            >
              Translate
            </button>
          </div>
        </div>

        <div className="w-full max-w-2xl mt-4 p-6 rounded-md border border-black/10 dark:border-white/10 bg-white/5 dark:bg-black/5 min-h-[100px]">
          <p className="text-gray-500 dark:text-gray-400 italic">
            Your corporate jargon will appear here...
          </p>
        </div>

        <div className="flex gap-4 items-center mt-8">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#examples"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#about"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            About
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2025 Corporate Speak Generator</p>
        <a className="hover:underline hover:underline-offset-4" href="#privacy">
          Privacy Policy
        </a>
        <a className="hover:underline hover:underline-offset-4" href="#terms">
          Terms of Service
        </a>
      </footer>
    </div>
  );
}
