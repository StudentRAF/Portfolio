import { cn } from "@/utils/utils.ts";
import HeroIllustration from "@/assets/Illustrations/Hero.tsx";
import HeroTitleIllustration from "@/assets/Illustrations/HeroTitle.tsx";

export interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={cn(
      "flex w-280 h-120 mx-auto my-12 items-center relative bg-transparent gap-2",
      className
    )}>
      <div className="flex flex-col w-full gap-6">
        <HeroTitleIllustration />
        <span className="text-gray-500 text-heading03-24 leading-5">Based in Belgrade, Serbia.</span>
      </div>
      <HeroIllustration className="absolute top-0, right-0"/>
    </div>
  );
}

export default Hero;
