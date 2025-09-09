import React from 'react';

const PortraitSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row lg:flex-col lg:items-start">
      <div className="relative aspect-[4/3] w-full max-w-80 overflow-hidden rounded-3xl bg-gray-100 lg:max-w-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 381 174">
          <rect width="92" height="92" x="196" y="82" fill="#D9D9D9" rx="12" />
          <rect width="92" height="92" x="-8" y="-20" fill="#D9D9D9" rx="12" />
          <rect width="92" height="194" x="298" y="-20" fill="#D9D9D9" rx="12" />
          <rect width="194" height="92" x="94" y="-20" fill="#D9D9D9" rx="12" />
          <rect width="194" height="92" x="-8" y="82" fill="#D9D9D9" rx="12" />
        </svg>
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
          <div className="flex items-center gap-1.5">
            <button type="button" className="group/button inline-flex outline-none rounded-full disabled:cursor-not-allowed">
              <span className="pointer-events-auto relative flex items-center justify-center font-medium outline-none transition whitespace-nowrap group-[:not([disabled])]/button:group-hover/button:shadow-lg dark:border shadow-sm border bg-white text-gray-700 group-[:not([disabled])]/button:group-hover/button:bg-white border-transparent ring-1 ring-black/10 group-[:not([disabled])]/button:group-hover/button:ring-black/20 dark:border-white/20 dark:group-[:not([disabled])]/button:group-hover/button:border-white/[0.27] dark:group-[:not([disabled])]/button:group-hover/button:bg-white/[0.22] dark:bg-white/[0.14] dark:text-white dark:shadow-none h-11 gap-2.5 text-base rounded-full w-11 px-0">
                <div className="lg:group-hover/button:-translate-y-2 lg:group-hover/button:opacity-100 pointer-events-none absolute bottom-[105%] whitespace-nowrap rounded-md px-2 py-1.5 text-xs opacity-0 transition-[opacity,transform] duration-300 border-x border-t border-gray-50 bg-white text-gray-700 shadow-sm dark:border-none dark:bg-black/80 dark:text-white dark:shadow-none group-hover/button:will-change-transform">
                  Add Image
                </div>
                <span className="inline-flex transform transition-[transform,opacity] scale-100 opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-photo"
                  >
                    <path d="M15 8h.01" />
                    <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                    <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                  </svg>
                </span>
                <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 transform transition-[transform,opacity] scale-0 opacity-0">
                  <span className="relative">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            <button type="button" className="group/button inline-flex outline-none rounded-full disabled:cursor-not-allowed">
              <span className="pointer-events-auto relative flex items-center justify-center font-medium outline-none transition whitespace-nowrap group-[:not([disabled])]/button:group-hover/button:shadow-lg dark:border shadow-sm border bg-white text-gray-700 group-[:not([disabled])]/button:group-hover/button:bg-white border-transparent ring-1 ring-black/10 group-[:not([disabled])]/button:group-hover/button:ring-black/20 dark:border-white/20 dark:group-[:not([disabled])]/button:group-hover/button:border-white/[0.27] dark:group-[:not([disabled])]/button:group-hover/button:bg-white/[0.22] dark:bg-white/[0.14] dark:text-white dark:shadow-none h-11 gap-2.5 text-base rounded-full w-11 px-0">
                <div className="lg:group-hover/button:-translate-y-2 lg:group-hover/button:opacity-100 pointer-events-none absolute bottom-[105%] whitespace-nowrap rounded-md px-2 py-1.5 text-xs opacity-0 transition-[opacity,transform] duration-300 border-x border-t border-gray-50 bg-white text-gray-700 shadow-sm dark:border-none dark:bg-black/80 dark:text-white dark:shadow-none group-hover/button:will-change-transform">
                  Add Video
                </div>
                <span className="inline-flex transform transition-[transform,opacity] scale-100 opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-video"
                  >
                    <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                    <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                  </svg>
                </span>
                <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 transform transition-[transform,opacity] scale-0 opacity-0">
                  <span className="relative">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            <button type="button" className="group/button inline-flex outline-none rounded-full disabled:cursor-not-allowed">
              <span className="pointer-events-auto relative flex items-center justify-center font-medium outline-none transition whitespace-nowrap group-[:not([disabled])]/button:group-hover/button:shadow-lg dark:border shadow-sm border bg-white text-gray-700 group-[:not([disabled])]/button:group-hover/button:bg-white border-transparent ring-1 ring-black/10 group-[:not([disabled])]/button:group-hover/button:ring-black/20 dark:border-white/20 dark:group-[:not([disabled])]/button:group-hover/button:border-white/[0.27] dark:group-[:not([disabled])]/button:group-hover/button:bg-white/[0.22] dark:bg-white/[0.14] dark:text-white dark:shadow-none h-11 gap-2.5 text-base rounded-full w-11 px-0">
                <div className="lg:group-hover/button:-translate-y-2 lg:group-hover/button:opacity-100 pointer-events-none absolute bottom-[105%] whitespace-nowrap rounded-md px-2 py-1.5 text-xs opacity-0 transition-[opacity,transform] duration-300 border-x border-t border-gray-50 bg-white text-gray-700 shadow-sm dark:border-none dark:bg-black/80 dark:text-white dark:shadow-none group-hover/button:will-change-transform">
                  Add Link
                </div>
                <span className="inline-flex transform transition-[transform,opacity] scale-100 opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-link"
                  >
                    <path d="M9 15l6 -6" />
                    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                    <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                  </svg>
                </span>
                <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 transform transition-[transform,opacity] scale-0 opacity-0">
                  <span className="relative">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            <button type="button" className="group/button inline-flex outline-none rounded-full disabled:cursor-not-allowed">
              <span className="pointer-events-auto relative flex items-center justify-center font-medium outline-none transition whitespace-nowrap group-[:not([disabled])]/button:group-hover/button:shadow-lg dark:border shadow-sm border bg-white text-gray-700 group-[:not([disabled])]/button:group-hover/button:bg-white border-transparent ring-1 ring-black/10 group-[:not([disabled])]/button:group-hover/button:ring-black/20 dark:border-white/20 dark:group-[:not([disabled])]/button:group-hover/button:border-white/[0.27] dark:group-[:not([disabled])]/button:group-hover/button:bg-white/[0.22] dark:bg-white/[0.14] dark:text-white dark:shadow-none h-11 gap-2.5 text-base rounded-full w-11 px-0">
                <div className="lg:group-hover/button:-translate-y-2 lg:group-hover/button:opacity-100 pointer-events-none absolute bottom-[105%] whitespace-nowrap rounded-md px-2 py-1.5 text-xs opacity-0 transition-[opacity,transform] duration-300 border-x border-t border-gray-50 bg-white text-gray-700 shadow-sm dark:border-none dark:bg-black/80 dark:text-white dark:shadow-none group-hover/button:will-change-transform">
                  Add Text
                </div>
                <span className="inline-flex transform transition-[transform,opacity] scale-100 opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-text-size"
                  >
                    <path d="M3 7v-2h13v2" />
                    <path d="M10 5v14" />
                    <path d="M12 19h-4" />
                    <path d="M15 13v-1h6v1" />
                    <path d="M18 12v7" />
                    <path d="M17 19h2" />
                  </svg>
                </span>
                <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 transform transition-[transform,opacity] scale-0 opacity-0">
                  <span className="relative">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
        </div>
      </div>
      <div className="flex max-w-80 flex-col gap-2 lg:mx-auto">
        <h6 className="font-medium">Create your Portrait</h6>
        <p className="text-gray-300">
          Upload your work, organize your ideas and adventures, and build a personal canvas that&#x27;s as unique as you.
        </p>
      </div>
    </div>
  );
};

export default PortraitSection;
