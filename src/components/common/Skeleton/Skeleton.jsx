import clsx from "clsx";

export const Skeleton = ({ className = "" }) => {
  return (
    <div
      className={clsx(
        "animate-pulse rounded-xl bg-slate-200/80",
        className
      )}
    />
  );
};

export const NewsCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <Skeleton className="aspect-[16/9] w-full rounded-none" />

      <div className="space-y-3 p-5">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />

        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );
};

export const NewsGridSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <NewsCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default Skeleton;
