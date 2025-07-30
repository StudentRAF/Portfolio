import NavigationBar from "@/components/header/NavigationBar.tsx";
import Profile from "@/components/header/Profile.tsx";
import { cn } from "@/utils/utils.ts";
import Links from "@/components/header/Links.tsx";

export interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <div className={cn(
      "flex w-full py-6 px-12 justify-between items-center sticky top-0 z-50",
      className
    )}>
      <Profile className="w-120"/>
      <NavigationBar className="shrink-0"/>
      <Links className="w-120"/>
    </div>
  );
}

export default Header;