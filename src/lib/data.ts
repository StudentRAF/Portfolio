import type { ProjectType } from "@/types/project.ts";
import type { Contact, Navigation, PageRefs } from "@/types/common.ts";
import type { OpenTarget } from "@/lib/utils.ts";

export const createProjects = (): ProjectType[] => [
  {
    name: "Uwubank",
    description: "Uwubank is a microservice-based system that implements core banking and trading functionalities. The banking module supports multi-currency account management, currency exchange, transactional operations, and loan handling. The stock exchange module provides access to historical securities data and enables real-time trading through a low-latency, in-memory caching mechanism.",
    technologies: ["C#", "ASP.NET Core", "Entity Framework", "PostgreSQL", "Redis", "Webhooks"],
    accentColor: "red",
    repositoryUrl: "https://github.com/StudentRAF/Bank-Backend",
    previewImage: "/Uwubank.png",
    alt: "Uwubank is a microservice-based system that implements core banking and trading functionalities. The banking module supports multi-currency account management, currency exchange, transactional operations, and loan handling. The stock exchange module provides access to historical securities data and enables real-time trading through a low-latency, in-memory caching mechanism.",
  },
  {
    name: "Bliztard",
    description: "Bliztard is a distributed storage management system built on a master-slave architecture with integrated node failure detection. It enables reliable file uploading and downloading through a custom designed storage layer inspired by SSTables, featuring indexing and efficient lookup using optimized data partitioning.",
    technologies: ["C#", "ASP.NET Core"],
    accentColor: "green",
    repositoryUrl: "https://github.com/SpaceInvadersRAF/Bliztard",
    previewImage: "/Bliztard.png",
    alt: "Bliztard is a distributed storage management system built on a master-slave architecture with integrated node failure detection. It enables reliable file uploading and downloading through a custom designed storage layer inspired by SSTables, featuring indexing and efficient lookup using optimized data partitioning.",
  },
  {
    name: "Isle Heights",
    description: "Isle Heights is a grid-based game where users explore a 30×30 map of land and water cells to identify the island with the highest average height. Players can make up to three guesses by selecting islands, with the game ending after a correct guess or three failed attempts, and an option to restart.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "TypeScript", "React"],
    accentColor: "cyan",
    repositoryUrl: "https://github.com/StudentRAF/IsleHeights",
    previewImage: "/IsleHeights.png",
    alt: "Isle Heights is a grid-based game where users explore a 30×30 map of land and water cells to identify the island with the highest average height. Players can make up to three guesses by selecting islands, with the game ending after a correct guess or three failed attempts, and an option to restart.",
  },
  {
    name: "Travel Guide",
    description: "Travel Guide is a web application that helps users explore travel destinations and activities through organized articles and filters by location or activity. It includes a content management system for adding and editing destinations, with separate interfaces for users and employees to streamline access and control.",
    technologies: ["Java", "Jersey", "PostgreSQL", "TypeScript", "React"],
    accentColor: "magenta",
    repositoryUrl: "https://github.com/StudentRAF/TravelGuide",
    previewImage: "/TravelGuide.png",
    alt: "Travel Guide is a web application that helps users explore travel destinations and activities through organized articles and filters by location or activity. It includes a content management system for adding and editing destinations, with separate interfaces for users and employees to streamline access and control.",
  },
  {
    name: "Gym App",
    description: "Gym App is a web application that supports multiple gyms through a modular architecture. It is designed for managing gym operations, including training scheduling and registration. The system features a content management system for employees to update training sessions, and a separate site for gym members to browse and register for activities.",
    technologies: ["Java", "Spring Boot", "MySQL", "TypeScript", "React"],
    accentColor: "yellow",
    repositoryUrl: "https://github.com/StudentRAF/GymMicroservices",
    previewImage: "/Gym.png",
    alt: "Gym App is a web application that supports multiple gyms through a modular architecture. It is designed for managing gym operations, including training scheduling and registration. The system features a content management system for employees to update training sessions, and a separate site for gym members to browse and register for activities.",
  },
  {
    name: "GeRuMap",
    description: "GeRuMap is a desktop mind-mapping tool designed to showcase clean architecture and design pattern implementation. It features a custom-built graphical editor for creating interactive mind maps, along with serialization and deserialization to support data persistence.",
    technologies: ["Java", "Swing", "Graphics2D"],
    accentColor: "blue",
    repositoryUrl: "",
    previewImage: "/GeRuMap.png",
    alt: "GeRuMap is a desktop mind-mapping tool designed to showcase clean architecture and design pattern implementation. It features a custom-built graphical editor for creating interactive mind maps, along with serialization and deserialization to support data persistence.",
  }
]

export const createNavigations = (pageRefs: PageRefs): Navigation[] => [
  {
    name: "Home",
    navigate: () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  {
    name: "Projects",
    navigate: () => {
      pageRefs?.projectsRef?.current?.scrollIntoView({
        block: "start",
        behavior: 'smooth'
      });
    }
  },
  {
    name: "Info",
    navigate: () => {
      pageRefs?.infoRef?.current?.scrollIntoView({
        block: "start",
        behavior: 'smooth'
      });
    }
  }
]

const openTarget: OpenTarget = "_blank";
const features = "noopener, noreferrer";
const githubUrl = "https://github.com/StudentRAF";
const linkedInUrl = undefined;

export const createContacts = (): Contact[] => [
  {
    name: "GitHub",
    navigate: () => {
      if (!githubUrl)
        return;

      window.open(githubUrl, openTarget, features)
    }
  },
  {
    name: "LinkedIn",
    navigate: () => {
      if (!linkedInUrl)
        return;

      window.open(linkedInUrl, openTarget, features)
    }
  }
]

export const navigateToProject = (project: ProjectType) => {
  if (!project?.repositoryUrl)
    return;

  window.open(project.repositoryUrl, openTarget, features)
}
