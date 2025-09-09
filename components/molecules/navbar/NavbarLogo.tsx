import Link from "next/link";

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-0 font-bold text-lg min-[680px]:text-xl"
    >
      {/* Desktop Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 75 58"
        className="hidden h-5 w-auto min-[680px]:block"
      >
        <path
          fill="url(#logo-gradient)"
          fillRule="evenodd"
          d="M40 8.5H18A9.5 9.5 0 0 0 8.5 18v22a9.5 9.5 0 0 0 9.5 9.5h22a9.5 9.5 0 0 0 9.5-9.5V18A9.5 9.5 0 0 0 40 8.5ZM18 0C8.059 0 0 8.059 0 18v22c0 9.941 8.059 18 18 18h22c9.941 0 18-8.059 18-18V18c0-9.941-8.059-18-18-18H18Z"
          clipRule="evenodd"
        />
        <defs>
          <linearGradient
            id="logo-gradient"
            x1=".08"
            x2="57.92"
            y1="29"
            y2="29"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#26C0FF" />
            <stop offset=".2" stopColor="#E600C2" />
            <stop offset=".4" stopColor="#FF494E" />
            <stop offset=".6" stopColor="#FFA13E" />
            <stop offset=".8" stopColor="#FFC837" />
            <stop offset="1" stopColor="#00CC3D" />
          </linearGradient>
        </defs>
      </svg>

      {/* Mobile Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 60 58"
        width="20"
        height="20"
        className="block min-[680px]:hidden"
      >
        <path
          fill="url(#logo-gradient-mobile)"
          fillRule="evenodd"
          d="M40 8.5H18A9.5 9.5 0 0 0 8.5 18v22a9.5 9.5 0 0 0 9.5 9.5h22a9.5 9.5 0 0 0 9.5-9.5V18A9.5 9.5 0 0 0 40 8.5ZM18 0C8.059 0 0 8.059 0 18v22c0 9.941 8.059 18 18 18h22c9.941 0 18-8.059 18-18V18c0-9.941-8.059-18-18-18H18Z"
          clipRule="evenodd"
        />
        <defs>
          <linearGradient
            id="logo-gradient-mobile"
            x1=".08"
            x2="57.92"
            y1="29"
            y2="29"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#26C0FF" />
            <stop offset=".2" stopColor="#E600C2" />
            <stop offset=".4" stopColor="#FF494E" />
            <stop offset=".6" stopColor="#FFA13E" />
            <stop offset=".8" stopColor="#FFC837" />
            <stop offset="1" stopColor="#00CC3D" />
          </linearGradient>
        </defs>
      </svg>

      {/* Logo Name */}
      <span className="text-gray-700 select-none">
        Portrait
      </span>
    </Link>
  );
};