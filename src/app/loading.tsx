export default function Loading() {
  return (
    <main className="mx-6 text-3xl">
        <div role="status" className="animate-pulse mt-2">
            <div className="loading-skeleton w-5/6 h-3.5 mb-7"></div>
            <div className="loading-skeleton w-full h-3 mb-1.5"></div>
            <div className="loading-skeleton w-4/6 h-3 mb-12"></div>
            <div className="loading-skeleton h-3.5 w-24"></div>
            <div className="flex justify-between mt-6">
              <span className="loading-skeleton h-3 w-14"></span>
              <span className="loading-skeleton h-3 w-14"></span>
              <span className="loading-skeleton h-3 w-14"></span>
            </div>
            <div className="loading-skeleton h-2"></div>
            <div className="loading-skeleton h-2"></div>
            <div className="loading-skeleton h-2"></div>
            <div className="loading-skeleton h-2"></div>
            <div className="loading-skeleton h-2"></div>
            <div className="loading-skeleton h-2"></div>
            <div className="loading-skeleton h-2"></div>
            <div className="loading-skeleton h-2"></div>
            <div className="loading-skeleton h-2"></div>
            <div className="loading-skeleton h-2"></div>
            <span className="sr-only">Loading...</span>
        </div>
    </main>
  );
}
