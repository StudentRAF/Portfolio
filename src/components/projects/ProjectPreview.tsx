import { cn } from "@/lib/utils.ts";
import ProjectPreviewHeader from "@/components/projects/ProjectPreviewHeader.tsx";
import type { ReactNode } from "react";
import type { ProjectType } from "@/types/project.ts";

export interface ProjectPreviewProps {
  className?: string;
  children?: ReactNode;
  project: ProjectType;
}

const ProjectPreview = ({ className, children, project }: ProjectPreviewProps) => {
  return (
    <div className={cn(
      "flex flex-col w-full h-fit border border-gray-600 rounded-4 overflow-hidden",
      className
    )}>
      <ProjectPreviewHeader project={project}/>
      {children}
    </div>
  );
};

export default ProjectPreview;
