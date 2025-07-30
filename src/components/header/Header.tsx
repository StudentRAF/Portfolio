import NavigationBar from "@/components/header/NavigationBar.tsx";
import Profile from "@/components/header/Profile.tsx";
import { cn } from "@/lib/utils.ts";
import Links from "@/components/header/Links.tsx";


export interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <div className={cn(
      "flex max-w-480 w-full mx-auto py-6 px-12 justify-between items-center sticky top-0 z-50 gap-6",
      "max-xl:px-8",
      "max-lg:flex-col-reverse max-lg:gap-4",
      "max-sm:gap-2 max-sm:py-4",
      className
    )}>
      <Profile className={cn(
        "w-120",
        "max-lg:text-center max-lg:w-fit",
        "max-sm:text-heading03-18",
      )}/>
      <NavigationBar className="shrink-0"/>
      <Links className={cn(
        "w-120 justify-end",
        "max-lg:hidden"
      )}/>
    </div>
  );
}

export default Header;