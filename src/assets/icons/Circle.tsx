export interface CircleIconProps {
  className?: string;
}

const CircleIcon = ({ className }: CircleIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="none"
    viewBox="0 0 12 12"
    className={className}
  >
    <circle
      cx="6"
      cy="6"
      r="6"
      fill="currentColor"
    ></circle>
  </svg>
);

export default CircleIcon;
