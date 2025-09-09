"use client";

import React from "react";


const HostingSection = () => {
  return (
    <section id="hosting" className="mx-auto my-32 flex max-w-screen-xl scroll-mt-28 flex-col gap-16 px-8 sm:my-48 sm:gap-20 md:px-12 lg:my-28 xl:px-16">
        <header className="flex flex-col items-center gap-8 text-center relative">
        <span className="absolute -z-10 h-[calc(100dvh-40px)] w-[calc(100%-24px)] max-w-screen-2xl rounded-[2rem] bg-gradient-to-b from-brand-blue-700/[0.06] to-white"></span>
        
        <div className="border bg-blend-luminosity backdrop-blur-4xl border-[hsla(0,0%,85%,.35)] dark:border-white/[0.12] dark:bg-black/80 mt-12 text-balance rounded-full bg-white/40 px-3 py-1.5 text-sm font-medium text-brand-blue-900/70 sm:mt-24">
            Built on a network of people, not platforms.
        </div>
        
        <h2 className="mx-auto max-w-[14em] text-balance font-medium text-brand-blue-1000">
            A global{" "}
            <span className="bg-rainbow-highlights mx-[-0.3em] px-[0.3em] font-junicode text-junicode-with-basier font-semibold italic [--angle:166deg] [--stop-1:36%] [--stop-2:42%] [--stop-3:50%] [--stop-4:64%] [--stop-5:78%] [--stop-6:90%]">
            network
            </span>{" "}
            for your identity, powered by people.
        </h2>
        
        <p className="mx-auto max-w-prose text-balance text-gray-300 sm:text-lg lg:text-xl">
            On social media, you follow each other, on Portrait you host each
            other—without relying on centralized platforms. This is how the web
            should have been—you&apos;re helping bring it back.
        </p>
        </header>

        <div className="flex justify-center">
        {/* Small screen SVG */}
        <svg
            width="319"
            height="538"
            viewBox="0 0 319 538"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="font-switzer sm:hidden"
        >
            {/* ... full converted mobile SVG content here ... */}
        </svg>

        {/* Medium+ screen SVG */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 696 325"
            width="696"
            height="325"
            className="font-switzer hidden sm:block"
        >
            {/* ... full converted desktop SVG content here ... */}
        </svg>
        </div>

        <div className="flex flex-col gap-12 sm:gap-20">
            <div className="flex justify-center">
            {/* Small screen SVG */}
            <svg
                width="319"
                height="538"
                viewBox="0 0 319 538"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="font-switzer sm:hidden"
            >
                <g>
                <g id="hosting-illu-sm-chat-bubble">
                    <g id="hosting-illu-sm-bubble">
                    <rect x="176.996" width="135" height="60" rx="18" fill="#06ACF1" />
                    <text fill="white" fontSize="14" fontWeight="600">
                        <tspan x="192.996" y="25.11">Requesting</tspan>
                        <tspan x="192.996" y="45.11">Emma’s Portrait</tspan>
                    </text>
                    </g>
                    <path
                    d="M176 58.6048C181.314 59.5709 185.36 56.7933 186.719 55.2836L186.568 50.7548C185.108 51.0567 181.948 51.3285 180.982 50C181.133 55.4346 177.057 58.1519 176 58.6048Z"
                    fill="#06ACF1"
                    />
                </g>
                <g id="hosting-illu-sm-badges-bottom">
                    <g id="hosting-illu-sm-badge-1">
                    <path
                        d="M0.5 412C0.5 402.335 8.33502 394.5 18 394.5H84C93.665 394.5 101.5 402.335 101.5 412C101.5 421.665 93.665 429.5 84 429.5H18C8.33502 429.5 0.5 421.665 0.5 412Z"
                        fill="white"
                    />
                    <path
                        d="M0.5 412C0.5 402.335 8.33502 394.5 18 394.5H84C93.665 394.5 101.5 402.335 101.5 412C101.5 421.665 93.665 429.5 84 429.5H18C8.33502 429.5 0.5 421.665 0.5 412Z"
                        stroke="#DEDEDE"
                    />
                    <mask id="hosting-illu-sm-user-badge-1-avatar-mask">
                        <circle cx="20.5" cy="412" r="12" fill="#ffffff" />
                    </mask>
                    <image
                        xlinkHref="/images/home/hosters/hoster_sarah_avatar.jpg"
                        x="8.5"
                        y="400"
                        width="24"
                        height="24"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#hosting-illu-sm-user-badge-1-avatar-mask)"
                    />
                    <circle cx="20.5" cy="412" r="12" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
                    <circle cx="20.5" cy="412" r="11" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                    <text fill="#585858" fontSize="16" fontWeight="600">
                        <tspan x="40.5" y="417.84">Sarah</tspan>
                    </text>
                    </g>
                    <g id="hosting-illu-sm-badge-2">
                    <path
                        d="M127 394.5H191C200.665 394.5 208.5 402.335 208.5 412C208.5 421.665 200.665 429.5 191 429.5H127C117.335 429.5 109.5 421.665 109.5 412C109.5 402.335 117.335 394.5 127 394.5Z"
                        fill="#06ACF1"
                    />
                    <path
                        d="M127 394.5H191C200.665 394.5 208.5 402.335 208.5 412C208.5 421.665 200.665 429.5 191 429.5H127C117.335 429.5 109.5 421.665 109.5 412C109.5 402.335 117.335 394.5 127 394.5Z"
                        stroke="#0289CE"
                    />
                    <mask id="hosting-illu-sm-user-badge-2-avatar-mask">
                        <circle cx="127.5" cy="412" r="12" fill="#ffffff" />
                    </mask>
                    <image
                        xlinkHref="/images/home/hosters/hoster_emma_avatar.jpg"
                        x="115.5"
                        y="400"
                        width="24"
                        height="24"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#hosting-illu-sm-user-badge-2-avatar-mask)"
                    />
                    <circle cx="127.5" cy="412" r="12" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
                    <circle cx="127.5" cy="412" r="11" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                    <text fill="white" fontSize="16" fontWeight="600">
                        <tspan x="147.5" y="417.84">Emma</tspan>
                    </text>
                    </g>
                    <g id="hosting-illu-sm-badge-3">
                    <path
                        d="M217.5 412C217.5 402.335 225.335 394.5 235 394.5H301C310.665 394.5 318.5 402.335 318.5 412C318.5 421.665 310.665 429.5 301 429.5H235C225.335 429.5 217.5 421.665 217.5 412Z"
                        fill="white"
                    />
                    <path
                        d="M217.5 412C217.5 402.335 225.335 394.5 235 394.5H301C310.665 394.5 318.5 402.335 318.5 412C318.5 421.665 310.665 429.5 301 429.5H235C225.335 429.5 217.5 421.665 217.5 412Z"
                        stroke="#DEDEDE"
                    />
                    <mask id="hosting-illu-sm-user-badge-3-avatar-mask">
                        <circle cx="235" cy="412" r="12" fill="#ffffff" />
                    </mask>
                    <image
                        xlinkHref="/images/home/hosters/hoster_james_avatar.jpg"
                        x="223"
                        y="400"
                        width="24"
                        height="24"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#hosting-illu-sm-user-badge-3-avatar-mask)"
                    />
                    <circle cx="235" cy="412" r="12" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
                    <circle cx="235" cy="412" r="11" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                    <text fill="#585858" fontSize="16" fontWeight="600">
                        <tspan x="255" y="417.84">James</tspan>
                    </text>
                    </g>
                </g>
                <g id="hosting-illu-sm-badges-top">
                    <g id="hosting-illu-sm-badge-top-center">
                    <path
                        d="M133 72.5H186C195.665 72.5 203.5 80.335 203.5 90C203.5 99.665 195.665 107.5 186 107.5H133C123.335 107.5 115.5 99.665 115.5 90C115.5 80.335 123.335 72.5 133 72.5Z"
                        fill="white"
                    />
                    <path
                        d="M133 72.5H186C195.665 72.5 203.5 80.335 203.5 90C203.5 99.665 195.665 107.5 186 107.5H133C123.335 107.5 115.5 99.665 115.5 90C115.5 80.335 123.335 72.5 133 72.5Z"
                        stroke="#DEDEDE"
                    />
                    <g>
                        <path
                        d="M124 90C124 91.1819 124.233 92.3522 124.685 93.4442C125.137 94.5361 125.8 95.5282 126.636 96.364C127.472 97.1997 128.464 97.8626 129.556 98.3149C130.648 98.7672 131.818 99 133 99C134.182 99 135.352 98.7672 136.444 98.3149C137.536 97.8626 138.528 97.1997 139.364 96.364C140.2 95.5282 140.863 94.5361 141.315 93.4442C141.767 92.3522 142 91.1819 142 90C142 88.8181 141.767 87.6478 141.315 86.5558C140.863 85.4639 140.2 84.4718 139.364 83.636C138.528 82.8003 137.536 82.1374 136.444 81.6851C135.352 81.2328 134.182 81 133 81C131.818 81 130.648 81.2328 129.556 81.6851C128.464 82.1374 127.472 82.8003 126.636 83.636C125.8 84.4718 125.137 85.4639 124.685 86.5558C124.233 87.6478 124 88.8181 124 90Z"
                        stroke="#585858"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <path
                        d="M127.168 96.849C127.415 96.0252 127.922 95.3032 128.612 94.79C129.302 94.2768 130.14 93.9997 131 94H135C135.861 93.9997 136.7 94.2774 137.39 94.7918C138.081 95.3062 138.587 96.0298 138.834 96.855M130 88C130 88.7956 130.316 89.5587 130.879 90.1213C131.441 90.6839 132.204 91 133 91C133.796 91 134.559 90.6839 135.121 90.1213C135.684 89.5587 136 88.7956 136 88C136 87.2044 132.684 86.4413 135.121 85.8787C134.559 85.3161 133.796 85 133 85C132.204 85 131.441 85.3161 130.879 85.8787C130.316 86.4413 130 87.2044 130 88Z"
                        stroke="#585858"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </g>
                    <text id="John" fill="#585858" fontSize="16" fontWeight="600">
                        <tspan x="153" y="95.84">John</tspan>
                    </text>
                    </g>
                    <g opacity="0.3">
                    <path
                        d="M230 72.5H296C305.665 72.5 313.5 80.335 313.5 90C313.5 99.665 305.665 107.5 296 107.5H230C220.335 107.5 212.5 99.665 212.5 90C212.5 80.335 220.335 72.5 230 72.5Z"
                        fill="white"
                    />
                    <path
                        d="M230 72.5H296C305.665 72.5 313.5 80.335 313.5 90C313.5 99.665 305.665 107.5 296 107.5H230C220.335 107.5 212.5 99.665 212.5 90C212.5 80.335 220.335 72.5 230 72.5Z"
                        stroke="#DEDEDE"
                    />
                    <g>
                        <path
                        d="M221 90C221 91.1819 221.233 92.3522 221.685 93.4442C222.137 94.5361 222.8 95.5282 223.636 96.364C224.472 97.1997 225.464 97.8626 226.556 98.3149C227.648 98.7672 228.818 99 230 99C231.182 99 232.352 98.7672 233.444 98.3149C234.536 97.8626 235.528 97.1997 236.364 96.364C237.2 95.5282 237.863 94.5361 238.315 93.4442C238.767 92.3522 239 91.1819 239 90C239 88.8181 238.767 87.6478 238.315 86.5558C237.863 85.4639 237.2 84.4718 236.364 83.636C235.528 82.8003 234.536 82.1374 233.444 81.6851C232.352 81.2328 231.182 81 230 81C228.818 81 227.648 81.2328 226.556 81.6851C225.464 82.1374 224.472 82.8003 223.636 83.636C222.8 84.4718 222.137 85.4639 221.685 86.5558C221.233 87.6478 221 88.8181 221 90Z"
                        stroke="#585858"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <path
                        d="M224.168 96.849C224.415 96.0252 224.922 95.3032 225.612 94.79C226.302 94.2768 227.14 93.9997 228 94H232C232.861 93.9997 233.7 94.2774 234.39 94.7918C235.081 95.3062 235.587 96.0298 235.834 96.855M227 88C227 88.7956 227.316 89.5587 227.879 90.1213C228.441 90.6839 229.204 91 230 91C230.796 91 231.559 90.6839 232.121 90.1213C232.684 89.5587 233 88.7956 233 88C233 87.2044 232.684 86.4413 232.121 85.8787C231.559 85.3161 230.796 85 230 85C229.204 85 228.441 85.3161 227.879 85.8787C227.316 86.4413 227 87.2044 227 88Z"
                        stroke="#585858"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </g>
                    <rect x="250" y="87" width="50" height="6" fill="#585858" />
                    </g>
                    <g opacity="0.3">
                    <path
                        d="M23 72.5H89C98.665 72.5 106.5 80.335 106.5 90C106.5 99.665 98.665 107.5 89 107.5H23C13.335 107.5 5.5 99.665 5.5 90C5.5 80.335 13.335 72.5 23 72.5Z"
                        fill="white"
                    />
                    <path
                        d="M23 72.5H89C98.665 72.5 106.5 80.335 106.5 90C106.5 99.665 98.665 107.5 89 107.5H23C13.335 107.5 5.5 99.665 5.5 90C5.5 80.335 13.335 72.5 23 72.5Z"
                        stroke="#DEDEDE"
                    />
                    <g>
                        <path
                        d="M14 90C14 91.1819 14.2328 92.3522 14.6851 93.4442C15.1374 94.5361 15.8003 95.5282 16.636 96.364C17.4718 97.1997 18.4639 97.8626 19.5558 98.3149C20.6478 98.7672 21.8181 99 23 99C24.1819 99 25.3522 98.7672 26.4442 98.3149C27.5361 97.8626 28.5282 97.1997 29.364 96.364C30.1997 95.5282 30.8626 94.5361 31.3149 93.4442C31.7672 92.3522 32 91.1819 32 90C32 88.8181 31.7672 87.6478 31.3149 86.5558C30.8626 85.4639 30.1997 84.4718 29.364 83.636C28.5282 82.8003 27.5361 82.1374 26.4442 81.6851C25.3522 81.2328 24.1819 81 23 81C21.8181 81 20.6478 81.2328 19.5558 81.6851C18.4639 82.1374 17.4718 82.8003 16.636 83.636C15.8003 84.4718 15.1374 85.4639 14.6851 86.5558C14.2328 87.6478 14 88.8181 14 90Z"
                        stroke="#585858"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <path
                        d="M17.168 96.849C17.4155 96.0252 17.9219 95.3032 18.6122 94.79C19.3025 94.2768 20.1398 93.9997 21 94H25C25.8612 93.9997 26.6996 94.2774 27.3904 94.7918C28.0811 95.3062 28.5874 96.0298 28.834 96.855M20 88C20 88.7956 20.316 89.5587 20.8786 90.1213C21.4413 90.6839 22.2043 91 23 91C23.7956 91 24.5587 90.6839 25.1213 90.1213C25.6839 89.5587 26 88.7956 26 88C26 87.2044 25.6839 86.4413 25.1213 85.8787C24.5587 85.3161 23.7956 85 23 85C22.2043 85 21.4413 85.3161 20.8786 85.8787C20.316 86.4413 20 87.2044 20 88Z"
                        stroke="#585858"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </g>
                    <rect x="43" y="87" width="50" height="6" fill="#585858" />
                    </g>
                </g>
                <g id="hosting-illu-sm-avatar">
                    <rect x="109.5" y="164.5" width="99" height="99" rx="49.5" stroke="#DEDEDE" />
                    <mask id="hosting-illu-sm-avatar-mask">
                    <circle cx="159" cy="214" r="40" fill="#ffffff" />
                    </mask>
                    <image
                    xlinkHref="/images/home/grid/profile_pic@2x.jpg"
                    x="119"
                    y="174"
                    width="80"
                    height="80"
                    preserveAspectRatio="xMidYMid slice"
                    mask="url(#hosting-illu-sm-avatar-mask)"
                    />
                    <circle cx="159" cy="214" r="40" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
                    <circle cx="159" cy="214" r="39" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                </g>
                <g id="hosting-illu-sm-lines-bottom">
                    <path
                    id="hosting-illu-sm-line-1"
                    d="M159 340V349.2C159 360.246 167.954 369.2 179 369.2H251.2C260.478 369.2 268 376.722 268 386V386"
                    stroke="#C7C7C7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="8 8"
                    />
                    <path
                    id="hosting-illu-sm-line-2"
                    d="M159 340V349.2C159 360.246 150.046 369.2 139 369.2H69.8C60.5216 369.2 53 376.722 53 386V386"
                    stroke="#C7C7C7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="8 8"
                    />
                    <path
                    id="hosting-illu-sm-line-3"
                    d="M159 340V386"
                    stroke="#C7C7C7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="8 8"
                    />
                </g>
                <path
                    id="hosting-illu-sm-line-bottom"
                    d="M159 272V298"
                    stroke="#C7C7C7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="8 8"
                />
                <path
                    id="hosting-illu-sm-line-top"
                    d="M159 116V156"
                    stroke="#C7C7C7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="8 8"
                />
                <g id="hosting-illu-sm-peers-badge">
                    <path
                    d="M113 306.5H206C212.904 306.5 218.5 312.096 218.5 319C218.5 325.904 212.904 331.5 206 331.5H113C106.096 331.5 100.5 325.904 100.5 319C100.5 312.096 106.096 306.5 113 306.5Z"
                    fill="white"
                    />
                    <path
                    d="M113 306.5H206C212.904 306.5 218.5 312.096 218.5 319C218.5 325.904 212.904 331.5 206 331.5H113C106.096 331.5 100.5 325.904 100.5 319C100.5 312.096 106.096 306.5 113 306.5Z"
                    stroke="#DEDEDE"
                    />
                    <text fill="#797979" fontSize="14" fontWeight="500">
                    <tspan x="112" y="324.11">Peers you host</tspan>
                    </text>
                </g>
                <g id="hosting-illu-sm-notice">
                    <rect x="29.5" y="462.5" width="260" height="75" rx="13.5" fill="white" />
                    <rect x="29.5" y="462.5" width="260" height="75" rx="13.5" stroke="#DEDEDE" />
                    <g>
                    <text fill="#797979" fontSize="14" fontWeight="500">
                        <tspan x="80.4697" y="485.11">You and your peers store</tspan>
                        <tspan x="213.101" y="505.11">, making it</tspan>
                        <tspan x="266.729" y="525.11">.</tspan>
                    </text>
                    <text fill="#353535" fontSize="14" fontWeight="500">
                        <tspan x="41.9697" y="505.11">copies of each other’s data</tspan>
                        <tspan x="48.9629" y="525.11">available to anyone on the internet</tspan>
                    </text>
                    </g>
                </g>
                </g>
            </svg>
            {/* Medium and larger screen SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 696 325"
                width="696"
                height="325"
                className="font-switzer hidden sm:block"
            >
                <g>
                <g>
                    <rect x="218.5" y="0.5" width="260" height="75" rx="13.5" fill="white" />
                    <rect x="218.5" y="0.5" width="260" height="75" rx="13.5" stroke="#DEDEDE" />
                    <g>
                    <text fill="#797979" fontSize="14" fontWeight="500">
                        <tspan x="269.47" y="23.11">You and your peers store</tspan>
                        <tspan x="402.101" y="43.11">, making it</tspan>
                        <tspan x="455.729" y="63.11">.</tspan>
                    </text>
                    <text fill="#353535" fontSize="14" fontWeight="500">
                        <tspan x="230.97" y="43.11">copies of each other’s data</tspan>
                        <tspan x="237.963" y="63.11">available to anyone on the internet</tspan>
                    </text>
                    </g>
                </g>
                <g stroke="#C7C7C7" strokeDasharray="8 8" strokeLinecap="round">
                    <path d="M123.5 170.5h157" />
                </g>
                <g>
                    <mask id="hosting-illu-md-left-line-mask" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                    <path d="M123.5 170.5h157" stroke="#000" strokeDashoffset="0px" strokeDasharray="0px 1px" strokeLinecap="round" pathLength="1" />
                    </mask>
                    <path mask="url(#hosting-illu-md-left-line-mask)" d="M123.5 170.5h157" stroke="#111111" strokeDashoffset="0" strokeDasharray="8 8" strokeLinecap="round" />
                </g>
                <g stroke="#C7C7C7" strokeDasharray="8 8" strokeLinecap="round">
                    <path d="M415.5 169.5h114.677c8.836 0 16-7.163 16-16V74c0-8.837 7.163-16 16-16H577" />
                    <path d="M415.5 169.5h114.677c8.836 0 16-7.163 16-16V130c0-8.837 7.163-16 16-16H577" />
                    <path d="M415.5 169.5H577" />
                    <path d="M415.5 169.5h114.677c8.836 0 16 7.163 16 16V210c0 8.837 7.163 16 16 16H577" />
                    <path d="M415.5 169.5h114.677c8.836 0 16 7.163 16 16V266c0 8.837 7.163 16 16 16H577" />
                </g>
                <g>
                    <mask id="hosting-illu-md-line-1-mask" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                    <path d="M415.5 169.5h114.677c8.836 0 16-7.163 16-16V74c0-8.837 7.163-16 16-16H577" stroke="#000" strokeDashoffset="0px" strokeDasharray="0px 1px" strokeLinecap="round" pathLength="1" />
                    </mask>
                    <path mask="url(#hosting-illu-md-line-1-mask)" d="M415.5 169.5h114.677c8.836 0 16-7.163 16-16V74c0-8.837 7.163-16 16-16H577" stroke="#111111" strokeDashoffset="0" strokeDasharray="8 8" strokeLinecap="round" />
                    <mask id="hosting-illu-md-line-2-mask" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                    <path d="M415.5 169.5h114.677c8.836 0 16-7.163 16-16V130c0-8.837 7.163-16 16-16H577" stroke="#000" strokeDashoffset="0px" strokeDasharray="0px 1px" strokeLinecap="round" pathLength="1" />
                    </mask>
                    <path mask="url(#hosting-illu-md-line-2-mask)" d="M415.5 169.5h114.677c8.836 0 16-7.163 16-16V130c0-8.837 7.163-16 16-16H577" stroke="#111111" strokeDashoffset="0" strokeDasharray="8 8" strokeLinecap="round" />
                    <mask id="hosting-illu-md-line-3-mask" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                    <path d="M415.5 169.5H577" stroke="#000" strokeDashoffset="0px" strokeDasharray="0px 1px" strokeLinecap="round" pathLength="1" />
                    </mask>
                    <path mask="url(#hosting-illu-md-line-3-mask)" d="M415.5 169.5H577" stroke="#111111" strokeDashoffset="0" strokeDasharray="8 8" strokeLinecap="round" />
                    <mask id="hosting-illu-md-line-4-mask" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                    <path d="M415.5 169.5h114.677c8.836 0 16 7.163 16 16V210c0 8.837 7.163 16 16 16H577" stroke="#000" strokeDashoffset="0px" strokeDasharray="0px 1px" strokeLinecap="round" pathLength="1" />
                    </mask>
                    <path mask="url(#hosting-illu-md-line-4-mask)" d="M415.5 169.5h114.677c8.836 0 16 7.163 16 16V210c0 8.837 7.163 16 16 16H577" stroke="#111111" strokeDashoffset="0" strokeDasharray="8 8" strokeLinecap="round" />
                    <mask id="hosting-illu-md-line-5-mask" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                    <path d="M415.5 169.5h114.677c8.836 0 16 7.163 16 16V266c0 8.837 7.163 16 16 16H577" stroke="#000" strokeDashoffset="0px" strokeDasharray="0px 1px" strokeLinecap="round" pathLength="1" />
                    </mask>
                    <path mask="url(#hosting-illu-md-line-5-mask)" d="M415.5 169.5h114.677c8.836 0 16 7.163 16 16V266c0 8.837 7.163 16 16 16H577" stroke="#111111" strokeDashoffset="0" strokeDasharray="8 8" strokeLinecap="round" />
                </g>
                <g>
                    <g id="hosting-illu-md-user-badge-1">
                    <path
                        fill="#fff"
                        stroke="#DEDEDE"
                        d="M607 40.5h62c9.665 0 17.5 7.835 17.5 17.5s-7.835 17.5-17.5 17.5h-62c-9.665 0-17.5-7.835-17.5-17.5s7.835-17.5 17.5-17.5Z"
                    />
                    <mask id="hosting-illu-md-user-badge-1-avatar-mask">
                        <circle cx="607" cy="58" r="12" fill="#ffffff" />
                    </mask>
                    <image
                        xlinkHref="/images/home/hosters/hoster_sophia_avatar.jpg"
                        x="595"
                        y="46"
                        width="24"
                        height="24"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#hosting-illu-md-user-badge-1-avatar-mask)"
                    />
                    <circle cx="607" cy="58" r="12" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
                    <circle cx="607" cy="58" r="11" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                    <text fill="#585858" fontSize="14" fontWeight="600">
                        <tspan x="627" y="63.11">Sophia</tspan>
                    </text>
                    </g>
                    <g id="hosting-illu-md-user-badge-2">
                    <path
                        fill="#fff"
                        stroke="#DEDEDE"
                        d="M607 96.5h71c9.665 0 17.5 7.835 17.5 17.5s-7.835 17.5-17.5 17.5h-71c-9.665 0-17.5-7.835-17.5-17.5s7.835-17.5 17.5-17.5Z"
                    />
                    <mask id="hosting-illu-md-user-badge-2-avatar-mask">
                        <circle cx="607" cy="114" r="12" fill="#ffffff" />
                    </mask>
                    <image
                        xlinkHref="/images/home/hosters/hoster_anthony_avatar.jpg"
                        x="595"
                        y="102"
                        width="24"
                        height="24"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#hosting-illu-md-user-badge-2-avatar-mask)"
                    />
                    <circle cx="607" cy="114" r="12" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
                    <circle cx="607" cy="114" r="11" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                    <text fill="#585858" fontSize="14" fontWeight="600">
                        <tspan x="627" y="119.11">Anthony</tspan>
                    </text>
                    </g>
                    <g id="hosting-illu-md-user-badge-3">
                    <path
                        fill="#fff"
                        stroke="#DEDEDE"
                        d="M607 152.5h55c9.665 0 17.5 7.835 17.5 17.5s-7.835 17.5-17.5 17.5h-55c-9.665 0-17.5-7.835-17.5-17.5s7.835-17.5 17.5-17.5Z"
                    />
                    <mask id="hosting-illu-md-user-badge-3-avatar-mask">
                        <circle cx="607" cy="170" r="12" fill="#ffffff" />
                    </mask>
                    <image
                        xlinkHref="/images/home/hosters/hoster_sarah_avatar.jpg"
                        x="595"
                        y="158"
                        width="24"
                        height="24"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#hosting-illu-md-user-badge-3-avatar-mask)"
                    />
                    <circle cx="607" cy="170" r="12" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
                    <circle cx="607" cy="170" r="11" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                    <text fill="#585858" fontSize="14" fontWeight="600">
                        <tspan x="627" y="175.11">Sarah</tspan>
                    </text>
                    </g>
                    <g id="hosting-illu-md-user-badge-4">
                    <path
                        fill="#fff"
                        stroke="#DEDEDE"
                        d="M607 208.5h59c9.665 0 17.5 7.835 17.5 17.5s-7.835 17.5-17.5 17.5h-59c-9.665 0-17.5-7.835-17.5-17.5s7.835-17.5 17.5-17.5Z"
                    />
                    <mask id="hosting-illu-md-user-badge-4-avatar-mask">
                        <circle cx="607" cy="226" r="12" fill="#ffffff" />
                    </mask>
                    <image
                        xlinkHref="/images/home/hosters/hoster_emma_avatar.jpg"
                        x="595"
                        y="214"
                        width="24"
                        height="24"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#hosting-illu-md-user-badge-4-avatar-mask)"
                    />
                    <circle cx="607" cy="226" r="12" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
                    <circle cx="607" cy="226" r="11" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                    <text fill="#585858" fontSize="14" fontWeight="600">
                        <tspan x="629" y="231.11">Emma</tspan>
                    </text>
                    </g>
                    <g id="hosting-illu-md-user-badge-5">
                    <path
                        fill="#fff"
                        stroke="#DEDEDE"
                        d="M607 264.5h60c9.665 0 17.5 7.835 17.5 17.5s-7.835 17.5-17.5 17.5h-60c-9.665 0-17.5-7.835-17.5-17.5s7.835-17.5 17.5-17.5Z"
                    />
                    <mask id="hosting-illu-md-user-badge-5-avatar-mask">
                        <circle cx="607" cy="282" r="12" fill="#ffffff" />
                    </mask>
                    <image
                        xlinkHref="/images/home/hosters/hoster_james_avatar.jpg"
                        x="595"
                        y="270"
                        width="24"
                        height="24"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#hosting-illu-md-user-badge-5-avatar-mask)"
                    />
                    <circle cx="607" cy="282" r="12" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
                    <circle cx="607" cy="282" r="11" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                    <text fill="#585858" fontSize="14" fontWeight="600">
                        <tspan x="627" y="287.11">James</tspan>
                    </text>
                    </g>
                </g>
                <text fill="#9F9F9F" fontSize="13" fontWeight="500">
                    <tspan x="596.22" y="14.745">Peers you host</tspan>
                </text>
                <g id="hosting-illu-md-avatar">
                    <rect width="109" height="109" x="293.5" y="115.5" stroke="#DEDEDE" rx="54.5" />
                    <mask id="hosting-illu-md-avatar-mask">
                    <circle cx="348" cy="170" r="45" fill="white" />
                    </mask>
                    <image
                    xlinkHref="/images/home/grid/profile_pic@2x.jpg"
                    x="303"
                    y="125"
                    width="90"
                    height="90"
                    preserveAspectRatio="xMidYMid slice"
                    mask="url(#hosting-illu-md-avatar-mask)"
                    />
                    <circle cx="348" cy="170" r="45" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
                    <circle cx="348" cy="170" r="44" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                </g>
                <g>
                    <text fill="#9F9F9F" fontSize="13" fontWeight="500">
                    <tspan x="336" y="250">You</tspan>
                    </text>
                </g>
                <g id="hosting-illu-md-chat-bubble" opacity="0">
                    <g fill="#06ACF1">
                    <rect width="150" height="60" x="113.996" y="91" rx="18" />
                    <path d="M113 149.605c5.314.966 9.36-1.812 10.719-3.321l-.151-4.529c-1.46.302-4.62.573-5.586-.755.151 5.435-3.925 8.152-4.982 8.605Z" />
                    </g>
                    <text fill="#fff" fontSize="14" fontWeight="600">
                    <tspan x="129.996" y="116.11">Requesting</tspan>
                    <tspan x="129.996" y="136.11">Emma’s Portrait</tspan>
                    </text>
                </g>
                <g>
                    <g opacity=".1">
                    <path
                        fill="#fff"
                        stroke="#DEDEDE"
                        d="M44 41.5h49c9.665 0 17.5 7.835 17.5 17.5S102.665 76.5 93 76.5H44c-9.665 0-17.5-7.835-17.5-17.5S34.335 41.5 44 41.5Z"
                    />
                    <g>
                        <g stroke="#585858" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                        <path d="M35 59a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
                        <path d="M38.168 65.849A4 4 0 0 1 42 63h4a4 4 0 0 1 3.834 2.855M41 57a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
                        </g>
                    </g>
                    <path fill="#585858" d="M62 56h35v6H62z" />
                    </g>
                    <g opacity=".3">
                    <path
                        fill="#fff"
                        stroke="#DEDEDE"
                        d="M18 97.5h75c9.665 0 17.5 7.835 17.5 17.5s-7.835 17.5-17.5 17.5H18C8.335 132.5.5 124.665.5 115S8.335 97.5 18 97.5Z"
                    />
                    <g>
                        <g stroke="#585858" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                        <path d="M9 115a9 9 0 1 0 17.998 0A9 9 0 0 0 9 115Z" />
                        <path d="M12.168 121.849A3.998 3.998 0 0 1 16 119h4a3.998 3.998 0 0 1 3.834 2.855M15 113a2.998 2.998 0 0 0 3 3 2.999 2.999 0 0 0 2.121-5.121A2.999 2.999 0 0 0 15 113Z" />
                        </g>
                    </g>
                    <path fill="#585858" d="M36 112h61v6H36z" />
                    </g>
                    <g id="hosting-illu-md-left-badge">
                    <path
                        fill="#fff"
                        stroke="#DEDEDE"
                        d="M46 153.5h47c9.665 0 17.5 7.835 17.5 17.5s-7.835 17.5-17.5 17.5H46c-9.665 0-17.5-7.835-17.5-17.5s7.835-17.5 17.5-17.5Z"
                    />
                    <g>
                        <g stroke="#585858" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                        <path d="M37 171a8.999 8.999 0 1 0 17.998 0A8.999 8.999 0 0 0 37 171Z" />
                        <path d="M40.168 177.849A3.998 3.998 0 0 1 44 175h4a3.998 3.998 0 0 1 3.834 2.855M43 169a2.998 2.998 0 0 0 3 3 2.999 2.999 0 0 0 2.121-5.121A2.999 2.999 0 0 0 43 169Z" />
                        </g>
                    </g>
                    <text fill="#585858" fontSize="14" fontWeight="600">
                        <tspan x="64" y="176.11">John</tspan>
                    </text>
                    </g>
                    <g opacity=".3">
                    <path
                        fill="#fff"
                        stroke="#DEDEDE"
                        d="M29 209.5h64c9.665 0 17.5 7.835 17.5 17.5s-7.835 17.5-17.5 17.5H29c-9.665 0-17.5-7.835-17.5-17.5s7.835-17.5 17.5-17.5Z"
                    />
                    <g>
                        <g stroke="#585858" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                        <path d="M20 227a8.999 8.999 0 1 0 17.998 0A8.999 8.999 0 0 0 20 227Z" />
                        <path d="M23.168 233.849A3.998 3.998 0 0 1 27 231h4a3.998 3.998 0 0 1 3.834 2.855M26 225a2.998 2.998 0 0 0 3 3 2.999 2.999 0 0 0 2.121-5.121A2.999 2.999 0 0 0 26 225Z" />
                        </g>
                    </g>
                    <path fill="#585858" d="M47 224h50v6H47z" />
                    </g>
                    <g opacity=".1">
                    <path
                        fill="#fff"
                        stroke="#DEDEDE"
                        d="M42 265.5h51c9.665 0 17.5 7.835 17.5 17.5s-7.835 17.5-17.5 17.5H42c-9.665 0-17.5-7.835-17.5-17.5s7.835-17.5 17.5-17.5Z"
                    />
                    <g>
                        <g stroke="#585858" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                        <path d="M33 283a8.999 8.999 0 1 0 17.998 0A8.999 8.999 0 0 0 33 283Z" />
                        <path d="M36.168 289.849A3.998 3.998 0 0 1 40 287h4a3.998 3.998 0 0 1 3.834 2.855M39 281a2.998 2.998 0 0 0 3 3 2.999 2.999 0 0 0 2.121-5.121A2.999 2.999 0 0 0 39 281Z" />
                        </g>
                    </g>
                    <path fill="#585858" d="M60 280h37v6H60z" />
                    </g>
                </g>
                </g>
            </svg>
            </div>
        </div>
        <div className="flex items-center gap-3">
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
        </div>
        <div className="flex flex-col items-center justify-center pt-16">
            <div className="border bg-blend-luminosity backdrop-blur-4xl border-[hsla(0,0%,85%,.35)] dark:border-white/[0.12] dark:bg-black/80 text-balance rounded-full bg-white/40 px-3 py-1.5 text-sm font-medium text-brand-blue-900/70">
            Coming soon
            </div>
            <p className="mx-auto my-6 max-w-md text-balance text-center text-sm text-gray-300">
            We’re experimenting with a new kind of reward system—one that values presence over performance. Early hosts on the public testnet will quietly unlock more than just access.
            </p>
            <button
            type="button"
            className="group/button inline-flex outline-none rounded-full disabled:cursor-not-allowed py-1.5"
            >
            <span className="pointer-events-auto relative flex w-full items-center justify-center font-[540] outline-none transition whitespace-nowrap group-[:not([disabled])]/button:group-hover/button:shadow-lg dark:border shadow-sm border bg-gray-700 text-white group-[:not([disabled])]/button:group-hover/button:bg-gray-1000 border-transparent dark:border-white/20 dark:group-[:not([disabled])]/button:group-hover/button:border-white/[0.27] dark:group-[:not([disabled])]/button:group-hover/button:bg-white/[0.22] dark:bg-white/[0.14] dark:text-white dark:shadow-none h-9 gap-2 text-sm px-4 leading-none rounded-full">
                <span className="inline-flex transform items-center justify-center gap-2 transition-[transform,opacity] scale-100 opacity-100">
                Download hosting app
                </span>
                <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 transform transition-[transform,opacity] scale-0 opacity-0">
                <span className="relative">
                    <svg
                    width="16"
                    height="16"
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
            <p className="py-1.5 text-center text-xs text-gray-400">
            Rewards require active hosting.
            </p>
        </div>
    </section>
  );
};

export default HostingSection;