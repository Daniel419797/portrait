"use client";
import { useState } from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarActions } from "./NavbarActions";
import { NavbarMobileMenu } from "./NavbarMobileMenu";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky mx-[2rem] top-[5%] z-50 px-safe-or-6 bg-white/80 items-center rounded-[25px] md:rounded-[50px] backdrop-blur-xl border-b border-gray-200">
      <nav className="relative mx-auto flex max-w-screen-xl items-center gap-6 py-2 md:py-1.5 pl-6 pr-1.5">
        <NavbarLogo />

        {/* Desktop */}
        <div className="hidden justify-between min-[680px]:flex flex-1 items-center gap-6">
          <NavbarLinks />
          <NavbarActions />
        </div>

        {/* Mobile Toggle */}
        <NavbarMobileMenu open={mobileOpen} setOpen={setMobileOpen} />
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="min-[680px]:hidden px-4 pb-4">
          <NavbarLinks mobile />
          <NavbarActions mobile />
        </div>
      )}
    </header>
  );
};
