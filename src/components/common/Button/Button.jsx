import clsx from "clsx";
import { Loader2 } from "lucide-react";

const VARIANTS = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:text-slate-400",
  outline:
    "border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:text-slate-300",
  ghost:
    "text-slate-600 hover:bg-slate-100 disabled:text-slate-300",
  danger:
    "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300",
};

const SIZES = {
  sm: "h-9 px-3 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
  icon: "h-11 w-11",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  className = "",
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl font-medium transition disabled:cursor-not-allowed",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...rest}
    >
      {isLoading && <Loader2 size={16} className="animate-spin" />}
      {children}
    </button>
  );
};

export default Button;
