import { Clock3 } from "lucide-react";
import clsx from "clsx";

import formatDate from "../../../utils/formatDate";

const NewsMeta = ({ source, pubDate, className = "" }) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-between gap-3 text-sm text-slate-500",
        className
      )}
    >
      <span className="truncate font-medium text-slate-600">
        {source || "Unknown source"}
      </span>

      {pubDate && (
        <span className="flex shrink-0 items-center gap-1">
          <Clock3 size={14} />
          {formatDate(pubDate)}
        </span>
      )}
    </div>
  );
};

export default NewsMeta;
