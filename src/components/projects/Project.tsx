import { cn } from "@/lib/utils.ts";
import type { ReactNode } from "react";
import ProjectPreview from "@/components/projects/ProjectPreview.tsx";
import ProjectHeader from "@/components/projects/ProjectHeader.tsx";
import type { ProjectType } from "@/types/project.ts";
import { navigateToProject } from "@/lib/data.ts";

export interface ProjectProps {
  className?: string;
  project: ProjectType;
  children?: ReactNode;
}

const Project = ({
  className,
  project,
  children
}: ProjectProps) => {
  return (
    <div
      className={cn(
        "flex max-w-280 w-full p-2 border rounded-8 border-gray-750 bg-gray-850 group",
        project.repositoryUrl && "cursor-pointer",
        className
      )}
      onClick={() => navigateToProject(project)}
    >
      <div className={cn(
        "relative flex flex-col w-full h-fit px-12 pt-8 pb-0 border rounded-6 border-gray-700 bg-gray-800 overflow-hidden transition-all duration-500",
        "max-xl:px-8 max-xl:pt-6",
        "max-lg:px-6",
        "max-sm:px-4 max-sm:pt-4",
        project.accentColor === "red" && "group-hover:bg-red-500/8 max-[948px]:bg-red-500/6 group-hover:max-[948px]:bg-red-500/6",
        project.accentColor === "magenta" && "group-hover:bg-magenta-500/8 max-[948px]:bg-magenta-500/6 group-hover:max-[948px]:bg-magenta-500/6",
        project.accentColor === "blue" && "group-hover:bg-deep-blue-500/8 max-[948px]:bg-deep-blue-500/6 group-hover:max-[948px]:bg-deep-blue-500/6",
        project.accentColor === "cyan" && "group-hover:bg-cyan-500/8 max-[948px]:bg-cyan-500/6 group-hover:max-[948px]:bg-cyan-500/6",
        project.accentColor === "green" && "group-hover:bg-green-500/8 max-[948px]:bg-green-500/6 group-hover:max-[948px]:bg-green-500/6",
        project.accentColor === "yellow" && "group-hover:bg-orange-500/8 max-[948px]:bg-orange-500/8 group-hover:max-[948px]:bg-orange-500/8",
      )}>
        <ProjectHeader project={project}/>
        <div className={cn(
          "relative w-full h-136 z-20",
          "max-[1132px]:h-128",
          "max-[1080px]:h-120",
          "max-[1008px]:h-112",
          "max-[948px]:h-104",
          "max-[876px]:h-96",
          "max-[816px]:h-88",
          "max-[736px]:h-80",
          "max-[676px]:h-72",
          "max-[592px]:h-64",
          "max-[540px]:h-56",
          "max-[472px]:h-52",
          "max-[440px]:h-48",
          "max-[408px]:h-44",
          "max-[376px]:h-40",
        )}>
          <ProjectPreview
            className={cn(
              "absolute top-0 left-0 mt-6 group-hover:mt-3 transition-all duration-500",
              "max-[948px]:mt-4 max-[948px]:group-hover:mt-4",
              "max-sm:mt-3 max-sm:group-hover:mt-3"
            )}
            project={project}
          >
            {children}
          </ProjectPreview>
        </div>
        <div
          className="absolute flex w-full h-full top-0 left-0 z-10 bg-linear-180 from-gray-900/10 from-5 to-gray-900 to-95% transition-all duration-500"/>
      </div>
    </div>
  );
};

export default Project;
