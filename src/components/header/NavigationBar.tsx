import { Button } from "@/components/common/Button.tsx";
import { cn } from "@/utils/utils.ts";
import type { HeaderRefProps } from "@/components/header/Header.tsx";

export interface NavigationBarProps {
  className?: string;
  pageRefs?: HeaderRefProps;
}

const NavigationBar = ({ className, pageRefs }: NavigationBarProps) => {
  const scrollToProjects = () => {
    pageRefs?.projectsRef?.current?.scrollIntoView({
      block: "start",
      behavior: 'smooth'
    });
  };

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={cn(
      "flex w-fit h-fit bg-gray-850 rounded-full border border-gray-750 p-1 gap-1 shadow-medium",
      className
    )}>
      <Button
        variant="navigation"
        onClick={scrollToHome}
      >
        Home
      </Button>
      <Button
        variant="navigation"
        onClick={scrollToProjects}
      >
        Projects
      </Button>
      <Button
        variant="navigation"
      >
        Info
      </Button>
    </div>
  );
}

export default NavigationBar;
