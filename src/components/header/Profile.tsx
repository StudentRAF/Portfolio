import { cn } from "@/utils/utils.ts";

export interface ProfileProps {
  className?: string;
}

const Profile = ({ className }: ProfileProps) => {
  return (
    <div className={cn(
      "flex flex-col w-fit h-fit px-4 py-3 bg-transparent gap-2",
      className
    )}>
      <span className="text-gray-100 text-heading03-20 leading-6">Nemanja Radovanović</span>
      <span className="text-gray-400 text-normal-14 leading-5">Software Developer</span>
    </div>
  );
}

export default Profile;
