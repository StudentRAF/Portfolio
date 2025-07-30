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
        "w-280 p-2 border rounded-8 border-gray-750 bg-gray-850 group",
        project.repositoryUrl && "cursor-pointer",
        className
      )}
      onClick={() => navigateToProject(project)}
    >
      <div className={cn(
        "relative flex flex-col w-full h-fit px-12 pt-8 pb-0 border rounded-6 border-gray-700 bg-gray-800 overflow-hidden transition-all duration-500",
        project.accentColor === "red" && "group-hover:bg-red-500/8",
        project.accentColor === "magenta" && "group-hover:bg-magenta-500/8",
        project.accentColor === "blue" && "group-hover:bg-deep-blue-500/8",
        project.accentColor === "cyan" && "group-hover:bg-cyan-500/8",
        project.accentColor === "green" && "group-hover:bg-green-500/8",
        project.accentColor === "yellow" && "group-hover:bg-orange-500/8",
      )}>
        <ProjectHeader project={project}/>
        <div className="relative w-full h-136 z-20">
          <ProjectPreview
            className="absolute top-0 left-0 mt-6 group-hover:mt-3 transition-all duration-500"
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
