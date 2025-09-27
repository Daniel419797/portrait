"use client";
import { useState } from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarActions } from "./NavbarActions";
import { NavbarMobileMenu } from "./NavbarMobileMenu";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed z-50 max-w-[100%] min-w-[100%]">
      <div className="sticky shadow-2xl mx-[1.5rem] md:mx-[2rem] z-50 pr-[10px] md:px-safe-or-6 mt-[7%] md:mt-[2.5%] top-[5%] bg-white/80 items-center rounded-[25px] md:rounded-[50px] backdrop-blur-xl border-b border-gray-200">
        <nav className="relative justify-between mx-auto flex max-w-screen-xl items-center gap-6 py-1.5 md:py-1.5 pl-6 pr-1.5">
          <NavbarLogo />

          {/* Desktop */}
          <div className="flex md:flex-1 justify-between">
            <div className="hidden min-[680px]:flex items-center gap-6">
              <NavbarLinks />
            </div>
            <div className="flex justify-between gap-6">
              <NavbarActions mobile/>
              <NavbarMobileMenu open={mobileOpen} setOpenAction={setMobileOpen} />
            </div>
          </div>
          
        </nav>

        {/* Mobile Menu */}
        <div
          className={`
            min-[680px]:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${mobileOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
          `}
        >
          <div className="pl-3 pb-4">
            <NavbarLinks mobile />
            {/* <NavbarActions mobile /> */}
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className={`
            fixed inset-0 bg-blask/30 backdrop-blur-sm transition-opacity duration-500 ease-in-out z-40
            ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        />
      )}
    </header>
  );
};
