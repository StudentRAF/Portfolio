import { clsx, type ClassValue } from "clsx"
import twMerge from "@/lib/twMerge.ts";

export type OpenTarget = "_blank" | "_self" | "_parent" | "_top";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
