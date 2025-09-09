"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";

interface SignupSectionProps {
  mobile?: boolean;
}

const SignupSection: React.FC<SignupSectionProps> = ({ mobile }) => {
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
    <section className="bg-gradient-to-b from-transparent via-brand-blue-50 to-transparent py-52">
      <div className="relative mx-auto flex max-w-screen flex-col items-center gap-16 px-8 text-center md:px-12 xl:px-16">
        {/* Floating Images */}
        <Image
          alt="Painter"
          src="/images/people/painter.jpg"
          width={204}
          height={204}
          className="ease-out-smooth transition-opacity duration-300 pointer-events-none absolute -bottom-24 left-0 aspect-square w-[clamp(100px,12vw,160px)] -translate-x-1/2 -rotate-[6deg] rounded-2xl bg-white opacity-30"
        />
        <Image
          alt="Singer"
          src="/images/people/singer.jpg"
          width={204}
          height={204}
          className="ease-out-smooth transition-opacity duration-300 pointer-events-none absolute -top-16 right-[80%] aspect-square w-[clamp(100px,12vw,160px)] -rotate-[18deg] rounded-2xl bg-white"
        />
        <Image
          alt="Girl laughing"
          src="/images/people/girl-laughing-sky.jpg"
          width={204}
          height={204}
          className="ease-out-smooth transition-opacity duration-300 pointer-events-none absolute bottom-6 right-[80%] aspect-square w-[clamp(100px,12vw,160px)] rotate-[18deg] rounded-2xl bg-white opacity-65 sm:-bottom-12 sm:right-[68%]"
        />
        <Image
          alt="Photographer"
          src="/images/people/photographer.jpg"
          width={204}
          height={204}
          className="ease-out-smooth transition-opacity duration-300 pointer-events-none absolute -top-24 left-[75%] aspect-square w-[clamp(100px,12vw,160px)] rotate-[12deg] rounded-2xl bg-white opacity-35 sm:-top-16"
        />
        <Image
          alt="Guy with laptop"
          src="/images/people/guy-laptop.jpg"
          width={204}
          height={204}
          className="ease-out-smooth transition-opacity duration-300 pointer-events-none absolute left-[100%] top-1/2 aspect-square w-[clamp(100px,12vw,160px)] -translate-x-1/2 rotate-[2deg] rounded-2xl bg-white"
        />
        <Image
          alt="Creative people"
          src="/images/people/people-creative.jpg"
          width={204}
          height={204}
          className="ease-out-smooth transition-opacity duration-300 pointer-events-none absolute -bottom-36 left-[78%] aspect-square w-[clamp(100px,12vw,160px)] -rotate-[18deg] rounded-2xl bg-white opacity-85"
        />

        {/* Header */}
        <header className="flex flex-col items-center gap-8">
          <h2 className="text-h3-lg-fluid max-w-[10em] font-medium text-brand-blue-1000">
            Why settle for{" "}
            <span className="bg-rainbow-highlights -mx-[0.25em] px-[0.25em] font-junicode text-junicode-with-basier font-semibold italic [--angle:172deg] [--stop-1:25%] [--stop-2:40%] [--stop-3:46%] [--stop-4:67%] [--stop-5:77%] [--stop-6:89%]">
              yesterday&apos;s internet?
            </span>
          </h2>
          <p className="mx-auto max-w-md text-balance text-lg text-brand-blue-1000/65">
            Create a canvas that&apos;s forever yours, a place where you
            confidently share your true self.
          </p>
        </header>

        {/* Signup Form */}
        <div className="flex flex-col items-center gap-6">
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

          {/* Login Button */}
          <button
            type="button"
            className="relative inline-flex transition-colors before:absolute before:-inset-[0.5em] after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-0 after:h-0.5 after:rounded-sm after:bg-current after:opacity-[0.18] after:transition-opacity hocus:text-gray-900 hocus:after:opacity-100 dark:hocus:text-white font-medium"
          >
            <span className="inline text-brand-blue-1000/80 sm:inline">
              Already have a Portrait? Login
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default SignupSection