export default function Loading() {
  return (
    <main className="mx-6 text-3xl">
        <div role="status" className="animate-pulse mt-3">
            <div className="loading-skeleton w-20 h-3.5 mb-4 mt-2"></div>
            <div className="flex flex-wrap gap-3">
              <div className="loading-skeleton rounded-md w-52 h-40"></div>
              <div className="loading-skeleton rounded-md w-52 h-40"></div>
              <div className="loading-skeleton rounded-md w-52 h-40"></div>
              <div className="loading-skeleton rounded-md w-52 h-40"></div>
              <div className="loading-skeleton rounded-md w-52 h-40"></div>
              <div className="loading-skeleton rounded-md w-52 h-40"></div>
              <div className="loading-skeleton rounded-md w-52 h-40"></div>
              <div className="loading-skeleton rounded-md w-52 h-40"></div>
              <div className="loading-skeleton rounded-md w-52 h-40"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    </main>
  );
}
