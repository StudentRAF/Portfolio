import { cn } from "@/utils/utils.ts";
import HeroIllustration from "@/assets/Illustrations/Hero.tsx";

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
        <span className="w-[720px] text-transparent text-heading01-40 bg-linear-210 from-gray-250 from-20% to-gray-350 to-85% bg-clip-text tracking-wider">
          From the creation of new applications through gateways of boundless creativity and adventure.
        </span>
        <span className="text-gray-500 text-heading03-24 leading-5">Based in Belgrade, Serbia.</span>
      </div>
      <HeroIllustration className="absolute top-0, right-0"/>
    </div>
  );
}

export default Hero;
