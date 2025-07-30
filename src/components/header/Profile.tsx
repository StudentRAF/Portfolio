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
      "flex flex-col w-fit h-fit px-4 py-3 bg-transparent gap-2",
      className
    )}>
      <span className="text-gray-100 text-heading03-20 leading-6">
        {application?.data?.author}
      </span>
      <span className="text-gray-400 text-normal-14 leading-5">
        {application?.data?.title}
      </span>
    </div>
  );
}

export default Profile;
