import { cn } from "@/lib/utils.ts";
import { ApplicationContext, type ApplicationContextData } from "@/lib/context.ts";
import { useContext } from "react";

export interface FooterCopyrightProps {
  className?: string;
}

const FooterCopyright = ({ className }: FooterCopyrightProps) => {
  const application: ApplicationContextData | undefined = useContext(ApplicationContext);

  return (
    <span className={cn(
      "text-gray-400 text-normal-14",
      className
    )}>
      {application?.data?.copyright}
    </span>
  );
}

export default FooterCopyright;