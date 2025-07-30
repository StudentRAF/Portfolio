import { createContext, type Dispatch, type SetStateAction } from "react";
import type { ProjectType } from "@/types/project.ts";
import type { Contact, Navigation } from "@/types/common.ts";

export type ApplicationData = {
  author?: string,
  title?: string,
  copyright?: string,
  projects?: ProjectType[],
  contacts?: Contact[],
  navigations?: Navigation[]
}

export type ApplicationContextData = {
  setData: Dispatch<SetStateAction<ApplicationData | undefined>>,
  data?: ApplicationData,
}

export const getDefaultApplicationData = (): ApplicationData => {
  return {
    author: "Nemanja Radovanović",
    title: "Software Developer",
    copyright: "© 2025 Nemanja Radovanovic. All Rights Reserved."
  }
};

export const ApplicationContext = createContext<ApplicationContextData | undefined>({
  setData: () => undefined,
  data: getDefaultApplicationData(),
});