import { Dispatch, SetStateAction } from "react";
import { Menu, X } from "lucide-react";

export const NavbarMobileMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <button
    className="ml-auto flex min-[680px]:hidden items-center justify-center"
    onClick={() => setOpen(!open)}
    aria-label="Toggle menu"
  >
    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </button>
);
