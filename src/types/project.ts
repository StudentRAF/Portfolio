export type ProjectType = {
  name?: string,
  description?: string,
  technologies?: string[],
  accentColor?: ProjectAccentColor,
  repositoryUrl?: string,
  previewImage?: string,
  alt?: string,
  navigate?: () => void,
}

export type ProjectAccentColor = "red" | "magenta" | "blue" | "cyan" | "green" | "yellow";
