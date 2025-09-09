import Link from "next/link";
import { cn } from "@/lib/utils";

interface LinkItem {
  label: string;
  href: string;
  badge?: string;
}

const links: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Points", href: "/points", badge: "New!" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const NavbarLinks = ({ mobile }: { mobile?: boolean }) => (
  <div
    className={cn(
      "flex",
      mobile
        ? "flex-col rounded-3xl bg-white/90 p-3 shadow-sm ring-1 ring-black/10 backdrop-blur-xl gap-2"
        : "left-0 justify-start items-center gap-2"
    )}
  >
    {links.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          "relative inline-flex w-full items-center justify-start rounded-full px-4 py-2 text-[11px] font-semibold text-gray-600 transition-colors duration-200 hover:bg-black/[0.06] hover:text-gray-800",
          mobile ? "max-[679px]:rounded-xl" : ""
        )}
      >
        {link.badge && (
          <span className="absolute -right-1 -top-1 rotate-[15deg] text-[0.6875rem] font-semibold uppercase text-red-400">
            {link.badge}
          </span>
        )}
        {link.label}
      </Link>
    ))}
  </div>
);
