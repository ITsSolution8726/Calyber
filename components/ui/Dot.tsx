
type DotProps = {
  className?: string;
};

export default function Dot({ className = "" }: DotProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary ${className}`}
    />
  );
}