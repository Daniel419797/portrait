import React from "react";

const PotraitPreview = () => {
  return (
    <div className="relative mx-auto my-20 flex w-fit justify-self-center rounded-[2rem] border border-black/15 bg-black/5 p-1 lg:rounded-[1.625rem] lg:p-1.5">
      <div className="relative flex max-h-[540px] w-min flex-col gap-6 rounded-[1.75rem] bg-white p-6 overflow-hidden sm:max-h-[650px] sm:gap-12 lg:max-h-none lg:rounded-[1.25rem] lg:p-12">
        
        {/* Profile section */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex w-full flex-col items-start gap-4 text-left sm:flex-row sm:items-center sm:gap-2 rounded-[20px] md:rounded-3xl">
            <span className="relative inline-flex size-20 flex-shrink-0 basis-auto rounded-full sm:size-[5.75rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 44 44"
                className="inset-0"
              >
                <rect
                  width="44"
                  height="44"
                  fill="#D9D9D9"
                  fillOpacity="0.1"
                  rx="22"
                />
                <path
                  fill="currentColor"
                  fillOpacity="0.15"
                  d="M9 36.033a7.847 7.847 0 0 1 2.336-5.483 7.86 7.86 0 0 1 5.516-2.264h9.435a7.86 7.86 0 0 1 5.516 2.264 7.847 7.847 0 0 1 2.336 5.483 18.785 18.785 0 0 1-25.139 0Zm19.646-19.531a7.066 7.066 0 0 1-4.369 6.532 7.082 7.082 0 0 1-7.711-1.532 7.068 7.068 0 0 1 5.003-12.07 7.08 7.08 0 0 1 5.004 2.07 7.068 7.068 0 0 1 2.073 5Z"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Content grid */}
        <div className="relative grid auto-rows-[122px] grid-cols-[repeat(2,122px)] gap-4 sm:auto-rows-[156px] sm:grid-cols-[repeat(2,156px)] sm:gap-5 lg:auto-rows-[200px] lg:grid-cols-[repeat(4,200px)] lg:gap-6 xl:auto-rows-[234px] xl:grid-cols-[repeat(4,234px)]">
          <div className="col-span-1 row-span-1 rounded-[20px] bg-gray-100 md:rounded-3xl" />
          <div className="col-span-1 row-span-1 lg:col-span-2 rounded-[20px] bg-gray-100 md:rounded-3xl" />
          <div className="col-span-1 row-span-2 rounded-[20px] bg-gray-100 md:rounded-3xl" />
          <div className="col-span-1 row-span-1 rounded-[20px] bg-gray-100 md:rounded-3xl" />
          <div className="col-span-1 row-span-1 rounded-[20px] bg-gray-100 md:rounded-3xl" />
          <div className="col-span-1 row-span-1 rounded-[20px] bg-gray-100 md:rounded-3xl" />
        </div>
      </div>

      {/* Toolbar */}
      <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 lg:bottom-7">
        <div className="flex items-center gap-1 opacity-90">
          <div className="w-auto rounded-full border border-gray-300/35 bg-gray-200/37 backdrop-blur-xl py-1.5">
            <div className="px-1.5">
              <div className="flex items-center gap-1.5">
                {/* Toolbar buttons */}
                {[
                  { label: "Image", icon: "M15 8h.01 M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6z M3 16l5-5c.928-.893 2.072-.893 3 0l5 5 M14 14l1-1c.928-.893 2.072-.893 3 0l3 3" },
                  { label: "Video", icon: "M15 10l4.553-2.276a1 1 0 011.447.894v6.764a1 1 0 01-1.447.894L15 14v-4z M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" },
                  { label: "Link", icon: "M9 15l6-6 M11 6l.463-.536a5 5 0 017.071 7.072l-.534.464 M13 18l-.397.534a5.068 5.068 0 01-7.127 0 4.972 4.972 0 010-7.071l.524-.463" },
                  { label: "Text", icon: "M3 7V5h13v2 M10 5v14 M12 19h-4 M15 12h6v1 M18 12v7 M17 19h2" },
                ].map((btn, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-transparent bg-white text-gray-700 shadow-sm ring-1 ring-black/[0.08] transition hover:bg-white hover:ring-black/20"
                  >
                    <div className="pointer-events-none absolute bottom-[105%] whitespace-nowrap rounded-md border border-gray-50 bg-white px-2 py-1.5 text-xs text-gray-700 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-[-0.5rem] group-hover:opacity-100">
                      {btn.label}
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={btn.icon} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotraitPreview;
