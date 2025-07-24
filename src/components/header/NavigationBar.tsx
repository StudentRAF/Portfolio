import { Button } from "@/components/common/Button.tsx";

const NavigationBar = () => {
  return (
    <div className="w-fit bg-gray-850 rounded-full border border-gray-750 p-1 gap-1">
      <Button>Home</Button>
      <Button>Projects</Button>
      <Button>Info</Button>
    </div>
  );
}

export default NavigationBar;
