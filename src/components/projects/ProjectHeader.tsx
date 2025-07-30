import { cn } from "@/utils/utils.ts";
import { Badge } from "@/components/common/Badge.tsx";

export interface ProjectHeaderProps {
  className?: string;
  name?: string;
  description?: string;
  technologies?: string[];
}

const ProjectHeader = ({ className, name, description, technologies }: ProjectHeaderProps) => {
  return (
    <div className={cn(
      "flex flex-col gap-4 z-20",
      className
    )}>
      <div className="flex gap-6 items-end">
        <span className="text-heading03-24 text-gray-100">
          {name}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {technologies?.map((technology) => (
            <Badge>
              {technology}
            </Badge>
          ))}
        </div>
      </div>
      <span className="text-normal-14 text-gray-400">
        {description}
      </span>
    </div>
  );
};

export default ProjectHeader;
