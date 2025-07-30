import { cn } from "@/lib/utils.ts";
import { ApplicationContext, type ApplicationContextData } from "@/lib/context.ts";
import { useContext } from "react";

export interface ProfileProps {
  className?: string;
}

const Profile = ({ className }: ProfileProps) => {
  const application: ApplicationContextData | undefined = useContext(ApplicationContext);

  return (
    <div className={cn(
      "flex flex-col w-fit h-fit px-6 py-4 bg-transparent gap-2",
      "max-lg:bg-gray-900/50 max-lg:rounded-4",
      "max-sm:rounded-3 max-sm:px-5 max-sm:py-3",
      className
    )}>
      <span className="w-fit text-gray-100 text-heading03-20 leading-6 self-center">
        {application?.data?.author}
      </span>
      <span className="w-fit text-gray-400 text-normal-14 leading-5 self-center">
        {application?.data?.title}
      </span>
    </div>
  );
}

export default Profile;
