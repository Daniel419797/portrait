"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";

interface HeroSectionProps {
  mobile?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ mobile }) => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // ✅ Replace with actual signup logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("User signed up:", username);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="top-0 h-[100dvh]">
      {/* Background gradient */}
      <div className="absolute inset-y-3 left-1/2 top-3 max-h-[calc(100dvh-10px)] w-[calc(100%-24px)] max-w-screen-2xl -translate-x-1/2 overflow-hidden rounded-[2rem] bg-hero-gradient sm:inset-y-5 sm:w-[calc(100%-40px)]" />

      {/* Border overlay */}
      <div className="absolute inset-y-3 left-1/2 top-3 max-h-[calc(100dvh-10px)] w-[calc(100%-24px)] max-w-screen-2xl -translate-x-1/2 rounded-[2rem] border border-blue-800/10 sm:inset-y-5 sm:w-[calc(100%-40px)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center gap-8 px-8 pb-16 pt-32 md:px-12 lg:gap-10 lg:pt-36 xl:px-16">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Link
            href="/blog/announcing-portrait-beta-on-testnet"
            aria-label="Portrait launches Public Testnet"
            className="group inline-flex items-center gap-1 rounded-full bg-gray-50 py-1 pl-4 pr-1 text-sm font-medium text-blue-900/70 ring-1 ring-black/10 transition-all duration-200 hover:gap-2.5 hover:bg-white hover:text-blue-900/90 hover:shadow-sm"
          >
            <span>Portrait launches Public Testnet</span>
            <span
              aria-hidden="true"
              className="inline-flex size-6 items-center justify-center rounded-full border border-transparent transition-colors group-hover:border-blue-900/10 group-hover:bg-blue-900/5"
            >
              →
            </span>
          </Link>

          <Link
            href="https://www.youtube.com/watch?v=zsLJ0RvpYRA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Discover Portrait in 90s"
            className="group inline-flex items-center gap-1 rounded-full bg-white/40 py-1 pl-1 pr-4 text-sm font-medium text-blue-900/70 ring-1 ring-black/10 transition-all duration-200 hover:gap-2.5 hover:bg-white hover:text-blue-900/90 hover:shadow-sm"
          >
            <span
              aria-hidden="true"
              className="inline-flex size-6 items-center justify-center rounded-full border border-transparent transition-colors group-hover:border-blue-900/10 group-hover:bg-blue-900/5"
            >
              ▶
            </span>
            <span>Discover Portrait in 90s</span>
          </Link>
        </div>

        {/* Hero text */}
        <div className="flex flex-col items-center gap-8">
          <h1 className="max-w-[10em] text-center text-4xl font-medium text-blue-900 text-pretty md:text-6xl lg:text-7xl">
            Your{" "}
            <span className="bg-btn-gradient bg-clip-text font-gabriela text-transparent font-semibold italic">
              forever
            </span>{" "}
            space for everything you are.
          </h1>
          <p className="mx-auto max-w-md text-center text-lg text-blue-900/65">
            More than a link—a decentralized canvas to share your story, your
            work, and your life—in minutes.
          </p>
        </div>

        {/* Signup */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center gap-12"
        >
          <div className="relative flex w-full flex-col min-[440px]:max-w-[25rem] sm:max-w-[30rem] md:max-w-[40rem]">
            <div className="group relative inline-flex flex-col items-center justify-center gap-y-2 sm:flex-row sm:gap-0">
              <div className="relative inline-flex w-full text-xl sm:text-2xl md:text-4xl">
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  aria-label="Enter username"
                  className="h-12 w-full rounded-full border border-gray-50 bg-white px-4 text-center text-base text-gray-900 placeholder-gray-300 outline-none transition hover:border-gray-100 focus:border-gray-100 min-[440px]:h-16 sm:h-[4.5rem] md:h-20 min-[440px]:pl-[124px] sm:pl-[147px] md:pl-[210px] lg:px-6 min-[440px]:pr-16 md:pr-[8.75rem] min-[440px]:text-left"
                />
                <span className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 pl-6 text-gray-400 min-[440px]:inline-flex sm:pl-7 md:pl-8">
                  portrait.so/
                </span>
              </div>

              <Button
                type="submit"
                size="sm"
                variant="rainbow"
                disabled={isLoading || !username}
                className={mobile ? "w-full" : "absolute right-4 h-13 p-1.5"}
              >
                {isLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </div>
            {error && (
              <span
                role="alert"
                className="mt-2 block min-h-[1em] text-sm text-red-500"
              >
                {error}
              </span>
            )}
          </div>
        </form>

        {/* Login link */}
        <Link
          href="/login"
          className="relative inline-flex font-medium text-blue-900/80 transition-colors hover:text-gray-900"
        >
          Already have a Portrait? Login
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
