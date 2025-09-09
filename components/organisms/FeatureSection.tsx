// components/FeatureSection.tsx
import React from "react";

interface FeatureProps {
  color?: string; // e.g. "red" | "blue"
  iconFill: string;
  iconStroke: string;
  text: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ iconFill, iconStroke, text }) => (
  <div className="mx-auto flex flex-1 flex-col items-center gap-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" fill="none">
      <path
        d="M16.835 7.794A23.333 23.333 0 1 1 5.18 28.757L5.168 28l.012-.756a23.333 23.333 0 0 1 11.655-19.45Z"
        className={iconFill}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4.667"
        d="M34.152 36.328a8.165 8.165 0 0 0-11.666 0m1.166-15.867c-1.166 2.334-5.833 2.334-7 0m23.334 0c-1.167 2.334-5.834 2.334-7 0"
        className={iconStroke}
      />
    </svg>
    <p className="max-w-[10.5em] font-basier-circle text-h5-fluid font-medium text-center">
      {text}
    </p>
  </div>
);

const FeatureSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-8 md:px-12 xl:px-16 my-32 flex flex-col items-center gap-8 text-center sm:flex-row">
      {/* First feature */}
      <Feature
        iconFill="fill-brand-red-400"
        iconStroke="stroke-brand-red-900"
        text={
          <>
            With normal websites, your data is stored in{" "}
            <span className="font-junicode text-junicode-with-basier font-semibold italic text-brand-red-500">
              a single location
            </span>
            .
          </>
        }
      />

      {/* Divider (vertical on desktop, horizontal on mobile) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1"
        height="100%"
        fill="none"
        preserveAspectRatio="none"
        className="hidden text-gray-50 sm:block"
        aria-hidden="true"
      >
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="100%"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="8 8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="1"
        fill="none"
        preserveAspectRatio="none"
        className="block text-gray-50 sm:hidden"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="8 8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Second feature */}
      <Feature
        iconFill="fill-brand-blue-400"
        iconStroke="stroke-brand-blue-900"
        text={
          <>
            With Portrait, your data is{" "}
            <a
              href="#hosting"
              className="group relative transition-colors duration-200 ease-out-smooth hocus:text-brand-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="1"
                fill="none"
                preserveAspectRatio="none"
                className="absolute inset-x-0 bottom-px text-gray-200 transition-colors duration-200 ease-out-smooth group-hocus:text-brand-blue-500"
                aria-hidden="true"
              >
                <line
                  x1="0"
                  y1="0.5"
                  x2="100%"
                  y2="0.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              securely hosted
            </a>{" "}
            <span className="font-junicode text-junicode-with-basier font-semibold italic text-brand-blue-500">
              all around the world
            </span>
            .
          </>
        }
      />
    </section>
  );
};

export default FeatureSection;
