import { cn } from "@/lib/utils.ts";
import FooterNavigation from "@/components/footer/FooterNavigation.tsx";
import FooterContact from "@/components/footer/FooterContact.tsx";
import FooterCopyright from "@/components/footer/FooterCopyright.tsx";

export interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={cn(
      "relative flex flex-row max-w-280 w-full mx-auto py-6 px-12 justify-between items-center gap-6",
      "max-md:flex-col-reverse max-md:px-10",
      "max-md:px-10",
      "max-sm:px-4",
      className
    )}>
      <FooterCopyright className="text-center"/>
      <div className={cn(
        "flex w-fit justify-center gap-16",
        "max-lg:gap-12",
        "max-sm:gap-8"
      )}>
        <FooterNavigation />
        <FooterContact className="h-fit"/>
      </div>
    </div>
  );
}

export default Footer;