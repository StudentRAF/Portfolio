import { cn } from "@/lib/utils.ts";
import CircleIcon from "@/assets/icons/Circle.tsx";
import type { ProjectType } from "@/types/project.ts";

export interface ProjectPreviewHeaderProps {
  className?: string;
  project: ProjectType;
}

const ProjectPreviewHeader = ({ className, project }: ProjectPreviewHeaderProps) => {
  return (
    <div className={cn(
      "flex w-full h-fit px-6 py-3 gap-6 bg-gray-850 items-center",
      "max-lg:px-4 max-lg:py-2 max-lg:gap-4",
      "max-sm:px-3 max-sm:gap-2",
      className
    )}>
      <div className={cn(
        "flex w-fit gap-2",
        "max-lg:gap-1"
      )}>
        <CircleIcon className={cn(
          "size-3 text-red-400",
          "max-lg:size-2",
          "max-sm:size-1.5"
        )}/>
        <CircleIcon className={cn(
          "size-3 text-orange-400",
          "max-lg:size-2",
          "max-sm:size-1.5"
        )}/>
        <CircleIcon className={cn(
          "size-3 text-green-400",
          "max-lg:size-2",
          "max-sm:size-1.5"
        )}/>
      </div>

      <span className={cn(
        "flex w-full h-5 px-4 bg-gray-700 rounded-full text-small-11 justify-center items-center text-gray-350",
        "max-sm:text-transparent max-sm:px-2 max-sm:h-4 truncate"
      )}>
        {project.repositoryUrl}
      </span>

      <div className="flex flex-col w-fit gap-0.5">
        <CircleIcon className={cn(
          "size-1 text-gray-400",
          "max-lg:size-0.5"
        )}/>
        <CircleIcon className={cn(
          "size-1 text-gray-400",
          "max-lg:size-0.5"
        )}/>
        <CircleIcon className={cn(
          "size-1 text-gray-400",
          "max-lg:size-0.5"
        )}/>
      </div>
    </div>
  );
};

export default ProjectPreviewHeader;
