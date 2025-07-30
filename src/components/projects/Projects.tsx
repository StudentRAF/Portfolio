import { cn } from "@/lib/utils.ts";
import Project from "@/components/projects/Project.tsx";
import { forwardRef, useContext } from "react";
import { ApplicationContext, type ApplicationContextData } from "@/lib/context.ts";

export interface ProjectsProps {
  className?: string;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(({ className }, ref) => {
  const application: ApplicationContextData | undefined = useContext(ApplicationContext);

  return (
    <div
      id="projects"
      ref={ref}
      className={cn(
        "flex flex-col items-center px-auto py-12 gap-16 scroll-mt-16",
        className
      )}
    >
      {
        application?.data?.projects?.map((project, index) => (
          <Project
            key={index}
            project={project}
          >
            <img
              alt={project.alt}
              src={project.previewImage}
            />
          </Project>))
      }
    </div>
  );
});

Projects.displayName = 'Projects';

export default Projects;
