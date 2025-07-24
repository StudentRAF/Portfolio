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
      "flex w-full py-6 px-12 justify-between items-center",
      className
    )}>
      <Profile className="w-80"/>
      <NavigationBar/>
      <Links className="flex-row-reverse w-80 left"/>
    </div>
  );
}

export default Header;