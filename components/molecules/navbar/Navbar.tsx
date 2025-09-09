"use client";
import { useState } from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarActions } from "./NavbarActions";
import { NavbarMobileMenu } from "./NavbarMobileMenu";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] mx-[1.5rem] top-[5%] z-50 px-safe-or-6 bg-white/80 flex items-center rounded-[25px] pr-1.5 justify-between md:rounded-[50px] overflow-hidden backdrop-blur-xl border-b border-gray-200">
      <nav className="relative left-0 flex max-w-screen-xl items-center justify-center gap-6 py-2 md:py-1.5 pl-6 pr-1.5">
        <NavbarLogo />

        {/* Desktop */}
        <div className="hidden justify-between min-[680px]:flex flex-1 items-center gap-6">
          <NavbarLinks />
          {/* <NavbarActions /> */}
        </div>

        
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="min-[680px]:hidden px-4 absolute pb-4">
          <NavbarLinks mobile />
  
        </div>

      )}
      <NavbarActions mobile />
      {/* Mobile Toggle */}
      <NavbarMobileMenu open={mobileOpen} setOpen={setMobileOpen} />
    </header>
  );
};
