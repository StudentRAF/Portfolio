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
      "max-sm:gap-3",
      className
    )}>
      <div className={cn(
        "flex gap-6 items-end",
        "max-lg:flex-col max-lg:items-start max-lg:gap-4",
        "max-sm:gap-3",
      )}>
        <span className={cn(
          "text-heading03-24 text-gray-100",
          "max-sm:text-heading03-20"
        )}>
          {project.name}
        </span>
        <div className={cn(
          "flex flex-wrap gap-1.5",
          "max-sm:gap-1"
        )}>
          {project.technologies?.map((technology, index) => (
            <Badge
              key={index}
              className={cn(
                "max-sm:text-small-11 max-sm:h-5 max-sm:px-3",
                project.repositoryUrl && "group-hover:cursor-pointer"
              )}
            >
              {technology}
            </Badge>
          ))}
        </div>
      </div>
      <span className={cn(
        "text-normal-14 text-gray-400",
        "max-sm:text-normal-13"
      )}>
        {project.description}
      </span>
    </div>
  );
};

export default ProjectHeader;
