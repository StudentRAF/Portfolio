import NavigationBar from "@/components/header/NavigationBar.tsx";
import Profile from "@/components/header/Profile.tsx";
import { cn } from "@/utils/utils.ts";
import Links from "@/components/header/Links.tsx";
import type { RefObject } from "react";

export interface HeaderRefProps {
  projectsRef?: RefObject<HTMLDivElement | null>;
}

export interface HeaderProps {
  className?: string;
  pageRefs?: HeaderRefProps;
}

const Header = ({ className, pageRefs }: HeaderProps) => {
  return (
    <div className={cn(
      "flex max-w-480 w-full mx-auto py-6 px-12 justify-between items-center sticky top-0 z-50",
      className
    )}>
      <Profile className="w-120"/>
      <NavigationBar className="shrink-0" pageRefs={pageRefs}/>
      <Links className="w-120 justify-end"/>
    </div>
  );
}

export default Header;