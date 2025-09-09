import React from 'react';

const AppDownloadSection = () => {
  return (
    <div className="flex w-full flex-col lg:flex gap-12">
      <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row lg:flex-col lg:items-start">
        <div className="flex aspect-[4/3] w-full max-w-80 items-center justify-center rounded-3xl bg-gray-100 lg:max-w-none">
          <img
            alt="Portrait app in MacOS dock"
            loading="lazy"
            width="286"
            height="163"
            decoding="async"
            className="ease-out transition-opacity duration-300 p-8 opacity-0"
            style={{ color: 'transparent' }}
            src="/images/home/app-dock@2x.webp"
          />
        </div>
        <div className="flex max-w-80 flex-col gap-2 lg:mx-auto">
          <h6 className="font-medium">Download the app</h6>
          <p className="text-gray-300">
            Install the hosting app to start hosting, optimized for Mac and Windows, and open-source for all to verify.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default AppDownloadSection;