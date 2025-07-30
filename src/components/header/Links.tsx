import { cn } from "@/lib/utils.ts";
import { ApplicationContext, type ApplicationContextData } from "@/lib/context.ts";
import { useContext } from "react";
import { Button } from "@/components/common/Button.tsx";

export interface LinksProps {
  className?: string;
}

const Links = ({ className }: LinksProps) => {
  const application: ApplicationContextData | undefined = useContext(ApplicationContext);

  return (
    <div className={cn(
      "flex w-fit h-fit px-4 py-3 bg-transparent gap-1",
      className
    )}>
      {application?.data?.contacts?.map((contact, index) => (
        <Button
          key={index}
          variant="link"
          onClick={contact.navigate}
        >
          {contact.name}
        </Button>
      ))}
    </div>
  );
}

export default Links;
