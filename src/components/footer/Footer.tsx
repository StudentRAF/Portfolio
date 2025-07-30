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
      className
    )}>
      <FooterCopyright className="text-center"/>
      <div className="relative flex w-fit justify-center gap-16">
        <FooterNavigation />
        <FooterContact className="h-fit"/>
      </div>
    </div>
  );
}

export default Footer;