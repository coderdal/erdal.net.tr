export default function Loading() {
  return (
    <main className="mx-6 text-3xl">
        <div role="status" className="animate-pulse mt-3">
            <div className="loading-skeleton w-16 h-3.5 mb-7 mt-2"></div>
            <div className="loading-skeleton w-20 2 mb-1.5"></div>
            <div className="loading-skeleton w-full h-4"></div>
            <div className="loading-skeleton w-full h-4"></div>
            <div className="loading-skeleton w-full h-4"></div>
            <div className="loading-skeleton w-full h-4"></div>
            <div className="loading-skeleton w-20 2 mb-1.5"></div>
            <div className="loading-skeleton w-full h-4"></div>
            <div className="loading-skeleton w-full h-4"></div>
            <div className="loading-skeleton w-full h-4"></div>
            <div className="loading-skeleton w-full h-4"></div>
            <div className="loading-skeleton w-20 2 mb-1.5"></div>
            <div className="loading-skeleton w-full h-4"></div>
            <div className="loading-skeleton w-full h-4"></div>
            <div className="loading-skeleton w-full h-4"></div>
            <span className="sr-only">Loading...</span>
        </div>
    </main>
  );
}
