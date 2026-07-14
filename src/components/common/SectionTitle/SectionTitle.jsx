import { ChevronRight } from "lucide-react";

const SectionTitle = ({
  title,
  subtitle,
  actionText,
  onAction,
}) => {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      {actionText && (
        <button
          onClick={onAction}
          className="flex items-center gap-1 font-medium text-blue-600 transition hover:gap-2"
        >
          {actionText}

          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
};

export default SectionTitle;