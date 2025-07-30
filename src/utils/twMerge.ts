import { extendTailwindMerge } from "tailwind-merge";

const fontSize: string[] = [
  "small-11", "small-12",
  "normal-13", "normal-14",
  "heading03-20", "heading03-24",
  "heading02-32",
  "heading01-28", "heading01-40"
].map(name => `text-${name}`);

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": fontSize
    }
  }
});

export default twMerge;