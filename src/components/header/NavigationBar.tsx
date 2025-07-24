import { Button } from "@/components/common/Button.tsx";
import { cn } from "@/utils/utils.ts";

export interface NavigationBarProps {
  className?: string;
}

const NavigationBar = ({ className }: NavigationBarProps) => {
  return (
    <div className={cn(
      "flex w-fit h-fit bg-gray-850 rounded-full border border-gray-750 p-1 gap-1 shadow-medium",
      className
    )}>
      <Button variant="navigation">Home</Button>
      <Button variant="navigation">Projects</Button>
      <Button variant="navigation">Info</Button>
    </div>
  );
}

export default NavigationBar;
