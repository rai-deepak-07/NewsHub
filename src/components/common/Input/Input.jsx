import { forwardRef } from "react";
import clsx from "clsx";

const Input = forwardRef(
  (
    {
      icon: Icon,
      trailing,
      className = "",
      containerClassName = "",
      ...rest
    },
    ref
  ) => {
    return (
      <div className={clsx("relative", containerClassName)}>
        {Icon && (
          <Icon
            size={18}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
        )}

        <input
          ref={ref}
          className={clsx(
            "h-12 w-full rounded-xl border border-slate-200 bg-white text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600",
            Icon ? "pl-11" : "pl-4",
            trailing ? "pr-11" : "pr-4",
            className
          )}
          {...rest}
        />

        {trailing && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {trailing}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
