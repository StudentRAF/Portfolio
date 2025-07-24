import { cn } from "@/utils/utils.ts";
import { Button } from "@/components/common/Button.tsx";

export interface LinksProps {
  className?: string;
}

const Links = ({ className }: LinksProps) => {
  return (
    <div className={cn(
      "flex w-fit h-fit px-4 py-3 bg-transparent gap-1",
      className
    )}>
      <Button variant="link">Linkedin</Button>
      <Button variant="link">Resume</Button>
    </div>
  );
}

export default Links;
