import type { RefObject } from "react";

export type Contact = {
  name?: string,
  navigate?: () => void,
}

export type Navigation = {
  name?: string,
  navigate?: () => void,
}

export type PageRefs = {
  projectsRef?: RefObject<HTMLDivElement | null>
  infoRef?: RefObject<HTMLDivElement | null>
}
