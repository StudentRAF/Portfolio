import { cn, type OpenTarget } from "@/utils/utils.ts";
import { Button } from "@/components/common/Button.tsx";

export interface LinksProps {
  className?: string;
}

const Links = ({ className }: LinksProps) => {
  const openTarget: OpenTarget = "_blank";
  const features = "noopener, noreferrer";
  const githubUrl = "https://github.com/StudentRAF";
  const linkedInUrl = undefined;

  const onGitHubClick = () => {
    if (!githubUrl)
      return;

    window.open(githubUrl, openTarget, features)
  }

  const onLinkedInClick = () => {
    if (!linkedInUrl)
      return;

    window.open(linkedInUrl, openTarget, features)
  }

  return (
    <div className={cn(
      "flex w-fit h-fit px-4 py-3 bg-transparent gap-1",
      className
    )}>
      <Button
        variant="link"
        onClick={onGitHubClick}
      >
        GitHub
      </Button>
      <Button
        variant="link"
        onClick={onLinkedInClick}
      >
        LinkedIn
      </Button>
    </div>
  );
}

export default Links;
