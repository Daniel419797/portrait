import { Button } from "@/components/atoms/Button";

export const NavbarActions = ({ mobile }: { mobile?: boolean }) => (
  <div className={mobile ? "flex gap-2 items-center" : "ml-auto flex items-center gap-3"}>
    {/* Login Button */}
    <Button
      size="sm"
      variant="ghost"
      className={mobile ? "w-full" : "h-10"}
    >
      Login
    </Button>

    {/* Sign Up Button with rainbow gradient */}
    <Button
      size="sm"
      variant="rainbow"
      className={mobile ? "w-full" : "h-10"}
    >
      Sign Up
    </Button>
  </div>
);
