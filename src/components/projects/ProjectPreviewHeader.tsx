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
      className
    )}>
      <div className="flex gap-2">
        <CircleIcon className="size-3 text-red-400"/>
        <CircleIcon className="size-3 text-orange-400"/>
        <CircleIcon className="size-3 text-green-400"/>
      </div>

      <span className="flex w-full h-5 px-4 bg-gray-700 rounded-full text-small-11 justify-center items-center text-gray-350">
        {project.repositoryUrl}
      </span>

      <div className="flex flex-col gap-0.5">
        <CircleIcon className="size-1 text-gray-400"/>
        <CircleIcon className="size-1 text-gray-400"/>
        <CircleIcon className="size-1 text-gray-400"/>
      </div>
    </div>
  );
};

export default ProjectPreviewHeader;
