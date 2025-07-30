import { Button } from "@/components/common/Button.tsx";
import { cn } from "@/lib/utils.ts";
import { ApplicationContext, type ApplicationContextData } from "@/lib/context.ts";
import { useContext } from "react";

export interface FooterNavigationProps {
  className?: string;
}

const FooterNavigation = ({ className }: FooterNavigationProps) => {
  const application: ApplicationContextData | undefined = useContext(ApplicationContext);

  return (
    <div className={cn(
      "flex flex-col w-fit h-fit px-4 py-3 bg-transparent gap-1 items-center",
      className
    )}>
      <span className="text-small-12 text-gray-400 self-center uppercase">
        Navigation
      </span>
      {application?.data?.navigations?.map((navigation, index) => (
        <Button
          key={index}
          variant="footer_link"
          onClick={navigation.navigate}
        >
          {navigation.name}
        </Button>
      ))}
    </div>
  );
}

export default FooterNavigation;
