import { cn } from "@/lib/utils.ts";
import { Button } from "@/components/common/Button.tsx";
import { ApplicationContext, type ApplicationContextData } from "@/lib/context.ts";
import { useContext } from "react";

export interface FooterContactProps {
  className?: string;
}

const FooterContact = ({ className }: FooterContactProps) => {
  const application: ApplicationContextData | undefined = useContext(ApplicationContext);

  return (
    <div className={cn(
      "flex flex-col w-fit h-fit px-4 py-3 bg-transparent gap-1 items-center",
      className
    )}>
      <span className="text-small-12 text-gray-400 self-center uppercase">
        Contact
      </span>
      {application?.data?.contacts?.map((contact, index) => (
        <Button
          key={index}
          variant="footer_link"
          onClick={contact.navigate}
        >
          {contact.name}
        </Button>
      ))}
    </div>
  );
}

export default FooterContact;
