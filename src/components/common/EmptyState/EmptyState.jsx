import { Inbox } from "lucide-react";

const EmptyState = ({
  icon: Icon = Inbox,
  title = "Nothing here yet",
  message = "There's no content to show right now.",
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white/60 px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <Icon size={26} />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-1 max-w-sm text-sm text-slate-500">
        {message}
      </p>

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
};

export default EmptyState;
