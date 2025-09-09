// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="relative py-8">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10 px-8 md:px-12 xl:px-16">
        {/* Top Divider */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="1"
          fill="none"
          preserveAspectRatio="none"
          className="text-gray-50"
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
          ></line>
        </svg>

        {/* Footer Navigation */}
        <nav className="grid grid-cols-2 gap-7 text-sm sm:grid-cols-3 sm:text-base md:grid-cols-4">
          {/* Logo */}
          <div className="col-span-full mb-4 md:col-span-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 284 58"
              width="120"
              height="24.5"
              className="h-auto"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M40 8.5H18A9.5 9.5 0 0 0 8.5 18v22a9.5 9.5 0 0 0 9.5 9.5h22a9.5 9.5 0 0 0 9.5-9.5V18A9.5 9.5 0 0 0 40 8.5ZM18 0C8.059 0 0 8.059 0 18v22c0 9.941 8.059 18 18 18h22c9.941 0 18-8.059 18-18V18c0-9.941-8.059-18-18-18H18Z"
                clipRule="evenodd"
              ></path>
              <defs>
                <linearGradient
                  id="logo-symbol-gradient"
                  x1=".08"
                  x2="57.92"
                  y1="29"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#26C0FF"></stop>
                  <stop offset=".2" stopColor="#E600C2"></stop>
                  <stop offset=".4" stopColor="#FF494E"></stop>
                  <stop offset=".6" stopColor="#FFA13E"></stop>
                  <stop offset=".8" stopColor="#FFC837"></stop>
                  <stop offset="1" stopColor="#00CC3D"></stop>
                </linearGradient>
              </defs>
              {/* Extra paths from original */}
              <path
                fill="currentColor"
                d="M277.188 51.057c-6.867 0-10.084-3.774-10.084-9.775v-15.9h-5.259v-7.053h5.568v-6.743l7.362-1.732h.619v8.475h7.733v7.053h-7.733v14.106c0 3.031 1.237 4.33 4.145 4.33a10.43 10.43 0 0 0 3.093-.495h.619v6.93c-1.732.556-3.774.804-6.063.804Z"
              ></path>
              <path
                fill="currentColor"
                d="M254.169 14.308c-3.403 0-5.135-1.856-5.135-5.073 0-3.031 1.732-4.95 5.135-4.95 3.217 0 5.135 1.919 5.135 4.95 0 3.217-1.918 5.073-5.135 5.073Zm4.083 36.192h-8.29V18.33h8.29V50.5Z"
              ></path>
              <path
                fill="currentColor"
                d="M227.074 51.057c-6.991 0-11.26-4.145-11.26-10.023 0-6.124 4.331-9.96 12.992-9.96 2.784 0 5.197.31 7.176.99V29.28c0-2.784-1.794-4.702-5.568-4.702-3.402 0-5.382 1.732-5.382 4.145h-7.795c0-3.155 1.175-5.816 3.464-7.857 2.351-2.042 5.63-3.093 9.899-3.093 8.476 0 13.673 4.701 13.673 11.445V50.5h-7.363l-.618-3.34h-.248c-1.979 2.598-4.949 3.897-8.97 3.897Z"
              ></path>
              {/* ... (rest of the SVG paths remain the same) */}
            </svg>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-base font-medium">Resources</h2>
              <ul className="flex flex-col gap-2.5 text-gray-300">
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800"
                    href="https://openinternetprotocol.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Internet Protocol
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800"
                    href="https://github.com/portraitgg/portrait-brand-kit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Brand Kit
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-base font-medium">Developers</h2>
              <ul className="flex flex-col gap-2.5 text-gray-300">
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800"
                    href="https://github.com/portraitgg/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800"
                    href="https://learn.portrait.so"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800"
                    href="https://github.com/portraitgg/portrait-contracts-public"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Smart Contracts
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Downloads + Socials */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-base font-medium">Downloads</h2>
              <ul className="flex flex-col gap-2.5 text-gray-300">
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800"
                    href="https://github.com/portraitgg/portrait-hosting-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portrait for Mac
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800"
                    href="https://github.com/portraitgg/portrait-hosting-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portrait for Windows
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-base font-medium">Socials</h2>
              <ul className="flex flex-col gap-2.5 text-gray-300">
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800 inline-flex items-center gap-1.5"
                    href="https://twitter.com/withportrait"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>X.com</span>
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800 inline-flex items-center gap-1.5"
                    href="https://farcaster.xyz/portrait"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Farcaster</span>
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800 inline-flex items-center gap-1.5"
                    href="https://bsky.app/profile/portrait.bsky.social"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Bluesky</span>
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800 inline-flex items-center gap-1.5"
                    href="https://discord.portrait.so"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Discord</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div>
            <div className="flex flex-col gap-4">
              <h2 className="text-base font-medium">Support</h2>
              <ul className="flex flex-col gap-2.5 text-gray-300">
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800 inline-flex items-center gap-1.5"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Report abuse</span>
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition-colors hover:text-gray-800 inline-flex items-center gap-1.5"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Report bug</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Bottom Divider */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="1"
          fill="none"
          preserveAspectRatio="none"
          className="text-gray-50"
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
          ></line>
        </svg>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 text-sm sm:flex-row xl:gap-8">
          <p className="text-small mr-auto text-center">
            © Portrait Technology Inc. 2025
          </p>
          <div className="flex items-center gap-4 xl:gap-4">
            <a
              className="text-gray-300 transition-colors hover:text-gray-800 inline-flex items-center gap-1.5"
              href="https://status.portrait.so"
              target="_blank"
              rel="noreferrer"
            >
              <span className="size-1.5 rounded-full border border-brand-green-600 bg-brand-green-400"></span>
              <span>System status</span>
            </a>
            <span className="text-gray-100">|</span>
            <a
              className="text-gray-300 transition-colors hover:text-gray-800"
              href="https://portrait.host/ipfs/bafkreibb6wckgm7b57s62liy2aieug4kcxnyhrzneynx2ioxkanud6l7ly"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
            <a
              className="text-gray-300 transition-colors hover:text-gray-800"
              href="https://portrait.host/ipfs/bafkreiap5juiigdo54e24wjamuhkn6fdo5gdv6w2g42ajno3guf5hvx3wa"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

