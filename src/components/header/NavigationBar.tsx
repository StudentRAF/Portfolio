import { Button } from "@/components/common/Button.tsx";
import { cn } from "@/lib/utils.ts";
import { ApplicationContext, type ApplicationContextData } from "@/lib/context.ts";
import { useContext } from "react";

export interface NavigationBarProps {
  className?: string;
}

const NavigationBar = ({ className }: NavigationBarProps) => {
  const application: ApplicationContextData | undefined = useContext(ApplicationContext);

  return (
    <div className={cn(
      "flex w-fit h-fit bg-gray-850 rounded-full border border-gray-750 p-1 gap-1 shadow-medium",
      className
    )}>
      {application?.data?.navigations?.map((navigation, index) => (
        <Button
          key={index}
          variant="navigation"
          onClick={navigation.navigate}
        >
          {navigation.name}
        </Button>
      ))}
    </div>
  );
}

export default NavigationBar;
