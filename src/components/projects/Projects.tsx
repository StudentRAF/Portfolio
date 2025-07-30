import { cn } from "@/utils/utils.ts";
import Project from "@/components/projects/Project.tsx";
import { forwardRef } from "react";

export interface ProjectsProps {
  className?: string;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(({ className }, ref) => {
  return (
    <div
      id="projects"
      ref={ref}
      className={cn(
        "flex flex-col items-center px-auto py-12 gap-16 scroll-mt-16",
        className
      )
    }>
      <Project
        name="Uwubank"
        description="Uwubank is a microservice-based system that implements core banking and trading functionalities. The banking module supports multi-currency account management, currency exchange, transactional operations, and loan handling. The stock exchange module provides access to historical securities data and enables real-time trading through a low-latency, in-memory caching mechanism."
        technologies={["C#", "ASP.NET Core", "Entity Framework", "PostgreSQL", "Redis", "Webhooks"]}
        accentColor="red"
        repositoryUrl="https://github.com/StudentRAF/Bank-Backend"
      >
        <img
          src="/Uwubank.png"
          alt="Uwubank is a microservice-based system that implements core banking and trading functionalities. The banking module supports multi-currency account management, currency exchange, transactional operations, and loan handling. The stock exchange module provides access to historical securities data and enables real-time trading through a low-latency, in-memory caching mechanism."
        />
      </Project>
      <Project
        name="Bliztard"
        description="Bliztard is a distributed storage management system built on a master-slave architecture with integrated node failure detection. It enables reliable file uploading and downloading through a custom designed storage layer inspired by SSTables, featuring indexing and efficient lookup using optimized data partitioning."
        technologies={["C#", "ASP.NET Core"]}
        accentColor="green"
        repositoryUrl="https://github.com/SpaceInvadersRAF/Bliztard"
      >
        <img
          src="/Bliztard.png"
          alt="Bliztard is a distributed storage management system built on a master-slave architecture with integrated node failure detection. It enables reliable file uploading and downloading through a custom designed storage layer inspired by SSTables, featuring indexing and efficient lookup using optimized data partitioning."
        />
      </Project>
      <Project
        name="Isle Heights"
        description="Isle Heights is a grid-based game where users explore a 30×30 map of land and water cells to identify the island with the highest average height. Players can make up to three guesses by selecting islands, with the game ending after a correct guess or three failed attempts, and an option to restart."
        technologies={["Java", "Spring Boot", "PostgreSQL", "TypeScript", "React"]}
        repositoryUrl="https://github.com/StudentRAF/IsleHeights"
        accentColor="cyan"
      >
        <img
          src="/IsleHeights.png"
          alt="Isle Heights is a grid-based game where users explore a 30×30 map of land and water cells to identify the island with the highest average height. Players can make up to three guesses by selecting islands, with the game ending after a correct guess or three failed attempts, and an option to restart."
        />
      </Project>
      <Project
        name="Travel Guide"
        description="Travel Guide is a web application that helps users explore travel destinations and activities through organized articles and filters by location or activity. It includes a content management system for adding and editing destinations, with separate interfaces for users and employees to streamline access and control."
        technologies={["Java", "Jersey", "PostgreSQL", "TypeScript", "React"]}
        repositoryUrl="https://github.com/StudentRAF/TravelGuide"
        accentColor="magenta"
      >
        <img
          src="/TravelGuide.png"
          alt="Travel Guide is a web application that helps users explore travel destinations and activities through organized articles and filters by location or activity. It includes a content management system for adding and editing destinations, with separate interfaces for users and employees to streamline access and control."
        />
      </Project>
      <Project
        name="Gym App"
        description="Gym App is a web application that supports multiple gyms through a modular architecture. It is designed for managing gym operations, including training scheduling and registration. The system features a content management system for employees to update training sessions, and a separate site for gym members to browse and register for activities."
        technologies={["Java", "Spring Boot", "MySQL", "TypeScript", "React"]}
        repositoryUrl="https://github.com/StudentRAF/GymMicroservices"
        accentColor="yellow"
      >
        <img
          src="/Gym.png"
          alt="Gym App is a web application that supports multiple gyms through a modular architecture. It is designed for managing gym operations, including training scheduling and registration. The system features a content management system for employees to update training sessions, and a separate site for gym members to browse and register for activities."
        />
      </Project>
      <Project
        name="GeRuMap"
        description="GeRuMap is a desktop mind-mapping tool designed to showcase clean architecture and design pattern implementation. It features a custom-built graphical editor for creating interactive mind maps, along with serialization and deserialization to support data persistence."
        technologies={["Java", "Swing", "Graphics2D"]}
        accentColor="blue"
      >
        <img
          src="/GeRuMap.png"
          alt="GeRuMap is a desktop mind-mapping tool designed to showcase clean architecture and design pattern implementation. It features a custom-built graphical editor for creating interactive mind maps, along with serialization and deserialization to support data persistence."
        />
      </Project>
    </div>
  );
});

Projects.displayName = 'Projects';

export default Projects;
