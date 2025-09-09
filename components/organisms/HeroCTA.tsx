// components/HeroCTA.tsx
import React from "react";

const HeroCTA = () => {
  return (
    <section className="flex flex-col items-center text-center">
      {/* Top badge */}
      <div className="border bg-blend-luminosity backdrop-blur-4xl border-[hsla(0,0%,85%,.35)] text-brand-blue-900/70 mb-8 text-balance rounded-full bg-white/40 px-3 py-1.5 text-sm font-medium md:mb-12">
        Not a feed. Not a social network. A Portrait.
      </div>

      {/* Heading */}
      <h2 className="text-brand-blue-1000 mb-10 max-w-[12em] text-center font-medium md:mb-20">
        Finally, a place on the internet that{" "}
        <span className="bg-rainbow-highlights font-junicode text-junicode-with-basier mx-[-0.3em] px-[0.3em] font-semibold italic [--stop-1:20%] [--stop-2:30%] [--stop-3:41%] [--stop-4:65%] [--stop-5:76%] [--stop-6:82%]">
          feels like you.
        </span>
      </h2>

      {/* Button */}
      <button
        type="button"
        className="group/button inline-flex outline-none rounded-full disabled:cursor-not-allowed"
      >
        <span className="pointer-events-auto relative flex w-full items-center justify-center font-[540] outline-none transition whitespace-nowrap group-[:not([disabled])]/button:group-hocus/button:shadow-lg shadow-sm border bg-gray-700 text-white group-[:not([disabled])]/button:group-hocus/button:bg-gray-1000 border-transparent h-11 gap-2.5 px-5 text-base rounded-full">
          {/* Button text */}
          <span className="inline-flex transform items-center justify-center gap-2 transition-[transform,opacity] scale-100 opacity-100">
            Join <span className="hidden">Aldous and</span> 3,200+ others
          </span>

          {/* Loading spinner */}
          <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 transform transition-[transform,opacity] scale-0 opacity-0">
            <span className="relative">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillOpacity=".15"
                  fillRule="evenodd"
                  d="M12 4.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM8.173 2.761a10 10 0 1 1 7.654 18.478A10 10 0 0 1 8.173 2.761Z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 4.5A7.5 7.5 0 0 0 4.5 12 1.25 1.25 0 1 1 2 12 10 10 0 0 1 12 2a1.25 1.25 0 1 1 0 2.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </span>
      </button>

      {/* Caption */}
      <span className="mt-6 text-sm font-medium text-gray-400">
        Your Portrait is your own space on the internet.
      </span>
    </section>
  );
};

export default HeroCTA;
