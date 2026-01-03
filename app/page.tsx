import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between gap-12 bg-white p-16 shadow-md dark:bg-black sm:items-start">
        
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={100}
          height={24}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight">
            Welcome to <span className="text-blue-600">Next.js</span>
          </h1>

          <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            This project is built with Next.js, TypeScript, and Tailwind CSS.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center rounded-md border border-black/10 px-6 text-sm font-medium hover:bg-zinc-100 dark:border-white/20 dark:hover:bg-zinc-900 sm:w-auto"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>

            <a
              className="flex h-12 w-full items-center justify-center rounded-md bg-black px-6 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black sm:w-auto"
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Next.js
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
