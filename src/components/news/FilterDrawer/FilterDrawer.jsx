import clsx from "clsx";
import { motion } from "framer-motion";
import CATEGORIES from "../../../constants/categories";

const FilterDrawer = ({ activeCategory = "top", onChange }) => {
  // Ensure "top" is treated cleanly as the initial item
  const items = ["top", ...CATEGORIES.filter((c) => c !== "top")];

  return (
    <div className="relative w-full">
      <div 
        className={clsx(
          "-mx-4 flex items-center gap-1.5 overflow-x-auto px-4 pb-2.5 pt-0.5",
          "sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0",
          "scrollbar-none overscroll-contain"
        )}
      >
        {items.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              onClick={() => onChange?.(category)}
              className={clsx(
                "relative shrink-0 whitespace-nowrap rounded-xl px-4 py-2 text-xs font-semibold tracking-wide capitalize transition-colors duration-200 outline-none",
                isActive
                  ? "text-blue-600"
                  : "text-slate-500 bg-slate-50/50 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60"
              )}
            >
              <span className="relative z-10">
                {category === "top" ? "All" : category}
              </span>

              {/* Smooth sliding pill effect for active selection */}
              {isActive && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 rounded-xl bg-blue-50 border border-blue-200/50"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterDrawer;