export function BlogDetailSkeleton() {
  return (
    <article className="bg-white rounded-lg overflow-hidden animate-pulse">
      {/* Cover Image Skeleton */}
      <div className="w-full aspect-video bg-gray-200" />

      {/* Content Skeleton */}
      <div className="p-8 md:p-12">
        {/* Category Badge Skeleton */}
        <div className="w-24 h-6 bg-gray-200 rounded mb-4" />

        {/* Title Skeleton */}
        <div className="space-y-3 mb-6">
          <div className="w-full h-8 bg-gray-200 rounded" />
          <div className="w-3/4 h-8 bg-gray-200 rounded" />
        </div>

        {/* Metadata Bar Skeleton */}
        <div className="flex items-center gap-6 mb-8 pb-6 border-b border-gray-200">
          <div className="w-28 h-4 bg-gray-200 rounded" />
          <div className="w-20 h-4 bg-gray-200 rounded" />
          <div className="w-32 h-4 bg-gray-200 rounded" />
          <div className="ml-auto w-32 h-10 bg-gray-200 rounded" />
        </div>

        {/* Content Paragraphs Skeleton */}
        <div className="space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="w-full h-4 bg-gray-200 rounded" />
              <div className="w-full h-4 bg-gray-200 rounded" />
              <div className="w-5/6 h-4 bg-gray-200 rounded" />
            </div>
          ))}
        </div>

        {/* Author Section Skeleton */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="w-32 h-4 bg-gray-200 rounded" />
              <div className="w-48 h-3 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
