export function BlogCardSkeleton() {
  return (
    <div className="rounded-lg p-4 animate-pulse">
      {/* Header skeleton */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded" />
          <div className="w-16 h-4 bg-gray-200 rounded" />
        </div>
        <div className="w-20 h-3 bg-gray-200 rounded" />
      </div>

      {/* Title skeleton */}
      <div className="space-y-2 mb-2">
        <div className="w-full h-4 bg-gray-200 rounded" />
        <div className="w-3/4 h-4 bg-gray-200 rounded" />
      </div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-3">
        <div className="w-full h-3 bg-gray-200 rounded" />
        <div className="w-5/6 h-3 bg-gray-200 rounded" />
      </div>

      {/* Tags skeleton */}
      <div className="flex gap-1.5">
        <div className="w-16 h-6 bg-gray-200 rounded" />
        <div className="w-20 h-6 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
