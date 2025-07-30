import { cn } from "@/lib/utils.ts";
import HeroIllustration from "@/assets/Illustrations/Hero.tsx";

export interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={cn(
      "flex max-w-280 w-full h-120 my-12 items-center self-center relative bg-transparent gap-6",
      "max-xl:px-10",
      "max-lg:flex-col-reverse max-lg:h-fit max-lg:mt-0",
      "max-sm:px-6",
      className
    )}>
      <div className={cn(
        "flex flex-col w-full gap-6",
        "max-lg:w-fit",
        "max-md:gap-4"
      )}>
        <span className={cn(
          "flex w-180 text-transparent text-heading01-40 bg-linear-210 from-gray-250 from-20% to-gray-350 to-85% bg-clip-text tracking-wider",
          "max-xl:w-144",
          "max-lg:w-180",
          "max-md:text-heading01-28 max-md:w-144",
          "max-sm:w-full",
        )}>
          From the creation of new applications through gateways of boundless creativity and adventure.
        </span>
        <span
          className={cn(
            "text-gray-500 text-heading03-24 leading-5",
            "max-md:text-heading03-18"
          )}>
          Based in Belgrade, Serbia.
        </span>
      </div>
      <HeroIllustration className={cn(
        "absolute top-0, right-0",
        "max-xl:right-10",
        "max-lg:right-10 max-lg:static max-lg:w-full max-lg:max-w-144 max-lg:h-auto",
      )}/>
    </div>
  );
}

export default Hero;
