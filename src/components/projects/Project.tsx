import { cn } from "@/utils/utils.ts";
import type { ReactNode } from "react";
import ProjectPreview from "@/components/projects/ProjectPreview.tsx";
import ProjectHeader from "@/components/projects/ProjectHeader.tsx";

export type ProjectAccentColor = "red" | "magenta" | "blue" | "cyan" | "green" | "yellow";

export interface ProjectProps {
  className?: string;
  name?: string;
  description?: string;
  technologies?: string[];
  accentColor?: ProjectAccentColor;
  repositoryUrl?: string;
  children?: ReactNode;
}

type OpenTarget = "_blank" | "_self" | "_parent" | "_top";

const Project = ({
  className,
  name,
  description,
  technologies,
  accentColor,
  repositoryUrl,
  children
}: ProjectProps) => {
  const openTarget: OpenTarget = "_blank";
  const features = "noopener, noreferrer";

  const onClick = () => {
    if (!repositoryUrl)
      return;

    window.open(repositoryUrl, openTarget, features)
  }

  return (
    <div
      className={cn(
        "w-280 p-2 border rounded-8 border-gray-750 bg-gray-850 group",
        repositoryUrl && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className={cn(
        "relative flex flex-col w-full h-fit px-12 pt-8 pb-0 border rounded-6 border-gray-700 bg-gray-800 overflow-hidden transition-all duration-500",
        accentColor === "red" && "group-hover:bg-red-500/8",
        accentColor === "magenta" && "group-hover:bg-magenta-500/8",
        accentColor === "blue" && "group-hover:bg-deep-blue-500/8",
        accentColor === "cyan" && "group-hover:bg-cyan-500/8",
        accentColor === "green" && "group-hover:bg-green-500/8",
        accentColor === "yellow" && "group-hover:bg-orange-500/8",
      )}>
        <ProjectHeader
          name={name}
          description={description}
          technologies={technologies}
        />
        <div className="relative w-full h-136 z-20">
          <ProjectPreview
            className="absolute top-0 left-0 mt-6 group-hover:mt-3 transition-all duration-500"
            repositoryUrl={repositoryUrl}
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
