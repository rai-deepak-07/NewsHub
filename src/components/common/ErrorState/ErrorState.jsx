import { AlertTriangle } from "lucide-react";
import Button from "../Button/Button";

const ErrorState = ({
  title = "Something went wrong",
  message = "We couldn't load the news right now. Please try again.",
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-red-100 bg-red-50/60 px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-500">
        <AlertTriangle size={26} />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-1 max-w-sm text-sm text-slate-500">
        {message}
      </p>

      {onRetry && (
        <Button onClick={onRetry} variant="primary" className="mt-5">
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
