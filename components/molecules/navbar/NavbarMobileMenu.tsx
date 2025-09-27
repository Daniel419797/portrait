"use client";

export const NavbarMobileMenu = ({ open, setOpenAction }: { open: boolean; setOpenAction: (v: boolean) => void }) => {
  return (
    <button
      onClick={() => setOpenAction(!open)}
      className="relative w-8 h-8 md:hidden flex flex-col justify-center items-center"
    >
      {/* Top Line */}
      <span
        className={`
          absolute h-[2px] w-6 bg-black rounded transition-all duration-500 ease-in-out
          ${open ? "rotate-45" : "-translate-y-1"}
        `}
      />
      {/* Bottom Line */}
      <span
        className={`
          absolute h-[2px] w-6 bg-black rounded transition-all duration-500 ease-in-out
          ${open ? "-rotate-45" : "translate-y-1"}
        `}
      />
    </button>
  );
};
