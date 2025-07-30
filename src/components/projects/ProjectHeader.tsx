import { cn } from "@/lib/utils.ts";
import { Badge } from "@/components/common/Badge.tsx";
import type { ProjectType } from "@/types/project.ts";

export interface ProjectHeaderProps {
  className?: string;
  project: ProjectType;
}

const ProjectHeader = ({ className, project }: ProjectHeaderProps) => {
  return (
    <div className={cn(
      "flex flex-col gap-4 z-20",
      className
    )}>
      <div className="flex gap-6 items-end">
        <span className="text-heading03-24 text-gray-100">
          {project.name}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies?.map((technology, index) => (
            <Badge key={index}>
              {technology}
            </Badge>
          ))}
        </div>
      </div>
      <span className="text-normal-14 text-gray-400">
        {project.description}
      </span>
    </div>
  );
};

export default ProjectHeader;
