import React from 'react';

const CallToActionSection = () => {
  return (
    <div className="flex w-full items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="1"
        fill="none"
        preserveAspectRatio="none"
        className="flex-1 text-gray-50"
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
      <button type="button" className="group/button inline-flex outline-none rounded-full disabled:cursor-not-allowed">
        <span className="pointer-events-auto relative flex w-full items-center justify-center font-[540] outline-none transition whitespace-nowrap group-[:not([disabled])]/button:group-hover/button:shadow-lg dark:border shadow-sm border bg-gray-700 text-white group-[:not([disabled])]/button:group-hover/button:bg-gray-1000 border-transparent dark:border-white/20 dark:group-[:not([disabled])]/button:group-hover/button:border-white/[0.27] dark:group-[:not([disabled])]/button:group-hover/button:bg-white/[0.22] dark:bg-white/[0.14] dark:text-white dark:shadow-none h-9 gap-2 text-sm px-4 leading-none rounded-full">
          <span className="inline-flex transform items-center justify-center gap-2 transition-[transform,opacity] scale-100 opacity-100">
            Create your Portrait
          </span>
          <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 transform transition-[transform,opacity] scale-0 opacity-0">
            <span className="relative">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
      
    </div>
  );
};

export default CallToActionSection;