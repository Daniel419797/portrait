import Image from "next/image";
import HeroSection from "@/components/organisms/HomeHeroContainer";
import PotraitPreview from "@/components/organisms/PotraitPreviews";
import FeatureSection from "@/components/organisms/FeatureSection";
import HeroCTA from "@/components/organisms/HeroCTA";
import HostingSection from "@/components/organisms/new";
import SignupSection from "@/components/organisms/SignUpSection";
import Footer from "@/components/molecules/Footer";
import PortraitSection from "@/components/organisms/PortraitSection";
import AppDownloadSection from "@/components/organisms/AppDownloadSection";
import CallToActionSection from "@/components/organisms/CallToActionSection";

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <HeroSection/>
      <PotraitPreview/>
      <FeatureSection/>
      <HeroCTA/>
      <HostingSection/>
      <section className='mx-auto flex max-w-screen-xl flex-col items-center gap-14 px-8 md:px-12 xl:px-16'>
        <div className="flex w-full flex-col items-center gap-10 text-balance text-center sm:text-left lg:flex-row lg:gap-7 lg:text-center">
          <PortraitSection/>
          <AppDownloadSection/>
          <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row lg:flex-col lg:items-start">
            <div className="flex aspect-[4/3] w-full max-w-80 items-center justify-center rounded-3xl bg-gray-100 lg:max-w-none">
              <img
                alt="Portrait app in MacOS dock"
                loading="lazy"
                width="352"
                height="244"
                decoding="async"
                className="ease-out transition-opacity duration-300 py-4 pl-6 pr-4 opacity-0"
                style={{ color: 'transparent' }}
                src="/images/home/app-menubar@2x.webp"
              />
            </div>
            <div className="flex max-w-80 flex-col gap-2 lg:mx-auto">
              <h6 className="font-medium">Start hosting</h6>
              <p className="text-gray-300">
                Open the app, find a Portrait you care about, and click “Host” to help it stay alive on the network.
              </p>
            </div>
          </div>
        </div>
        <CallToActionSection/>
        <button type="button" className="group/button inline-flex outline-none rounded-full disabled:cursor-not-allowed">
          <span className="pointer-events-auto relative flex w-full items-center justify-center font-[540] outline-none transition whitespace-nowrap dark:border bg-transparent border group-[:not([disabled])]/button:group-hover/button:shadow-none border-gray-100 text-gray-400 group-[:not([disabled])]/button:group-hover/button:text-gray-900 dark:border-gray-400 dark:text-gray-50 group-[:not([disabled])]/button:group-hover/button:border-gray-300 dark:group-[:not([disabled])]/button:group-hover/button:text-white h-9 gap-2 text-sm px-4 leading-none rounded-full">
            <span className="inline-flex transform items-center justify-center gap-2 transition-[transform,opacity] scale-100 opacity-100">
              Download app
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
        
      </section>
      
      <SignupSection/>

    </div>
  );
}
