import { Loader2 } from "lucide-react";
import clsx from "clsx";

const SIZES = {
  sm: 18,
  md: 28,
  lg: 40,
};

const Loader = ({ size = "md", label, className = "" }) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-3 py-10 text-slate-500",
        className
      )}
    >
      <Loader2
        size={SIZES[size] || SIZES.md}
        className="animate-spin text-blue-600"
      />

      {label && <p className="text-sm">{label}</p>}
    </div>
  );
};

export default Loader;
