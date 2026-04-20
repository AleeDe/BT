type SkeletonLineProps = {
  widthClass?: string;
  heightClass?: string;
};

function SkeletonLine({ widthClass = "w-full", heightClass = "h-4" }: SkeletonLineProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-md bg-slate-800/80",
        "before:absolute before:inset-0 before:-translate-x-full",
        "before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-pulse",
        widthClass,
        heightClass,
      ].join(" ")}
    />
  );
}

export function LoadingSpinner() {
  return (
    <div className="py-12">
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-slate-800/70 bg-slate-900/40 p-5">
        <div className="mb-4 flex items-center gap-3">
          <SkeletonLine widthClass="w-10" heightClass="h-10 rounded-xl" />
          <div className="w-full space-y-2">
            <SkeletonLine widthClass="w-1/2" heightClass="h-4" />
            <SkeletonLine widthClass="w-1/3" heightClass="h-3" />
          </div>
        </div>
        <div className="space-y-2">
          <SkeletonLine />
          <SkeletonLine widthClass="w-11/12" />
          <SkeletonLine widthClass="w-9/12" />
        </div>
      </div>
    </div>
  );
}

export function SectionLoadingSpinner() {
  return (
    <div className="py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="space-y-8">
          <div className="space-y-3">
            <SkeletonLine widthClass="w-40" heightClass="h-4" />
            <SkeletonLine widthClass="w-2/3" heightClass="h-9" />
            <SkeletonLine widthClass="w-1/2" heightClass="h-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-5 space-y-4">
              <SkeletonLine widthClass="w-12" heightClass="h-12 rounded-xl" />
              <SkeletonLine widthClass="w-3/4" heightClass="h-5" />
              <SkeletonLine widthClass="w-full" heightClass="h-4" />
              <SkeletonLine widthClass="w-11/12" heightClass="h-4" />
            </div>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-5 space-y-4">
              <SkeletonLine widthClass="w-12" heightClass="h-12 rounded-xl" />
              <SkeletonLine widthClass="w-4/5" heightClass="h-5" />
              <SkeletonLine widthClass="w-full" heightClass="h-4" />
              <SkeletonLine widthClass="w-10/12" heightClass="h-4" />
            </div>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-5 space-y-4">
              <SkeletonLine widthClass="w-12" heightClass="h-12 rounded-xl" />
              <SkeletonLine widthClass="w-2/3" heightClass="h-5" />
              <SkeletonLine widthClass="w-full" heightClass="h-4" />
              <SkeletonLine widthClass="w-9/12" heightClass="h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
