import { clsx, type ClassValue } from "clsx"
import twMerge from "@/utils/twMerge.ts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
