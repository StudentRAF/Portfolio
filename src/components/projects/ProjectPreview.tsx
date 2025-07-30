import { cn } from "@/utils/utils.ts";
import ProjectPreviewHeader from "@/components/projects/ProjectPreviewHeader.tsx";
import type { ReactNode } from "react";

export interface ProjectPreviewProps {
  className?: string;
  children?: ReactNode;
  repositoryUrl?: string;
}

const ProjectPreview = ({ className, children, repositoryUrl }: ProjectPreviewProps) => {
  return (
    <div className={cn(
      "flex flex-col w-full h-fit border border-gray-600 rounded-4 overflow-hidden",
      className
    )}>
      <ProjectPreviewHeader repositoryUrl={repositoryUrl}/>
      {children}
    </div>
  );
};

export default ProjectPreview;
