export default function Loading() {
  return (
    <main className="mx-6 text-3xl">
        <div role="status" className="animate-pulse mt-3">
            <div className="loading-skeleton w-56 h-4 mb-6 mt-2"></div>
            <div className="loading-skeleton w-3/4 h-3"></div>
            <div className="loading-skeleton w-full h-3"></div>
            <div className="loading-skeleton w-5/6 h-3"></div>
            <div className="loading-skeleton w-full h-3"></div>
            <div className="loading-skeleton w-full h-3 mb-8"></div>
            <div className="loading-skeleton w-44 h-3"></div>
            <div className="loading-skeleton w-full h-3"></div>
            <div className="loading-skeleton w-3/6 h-3"></div>
            <div className="loading-skeleton w-full h-3"></div>
            <div className="loading-skeleton w-5/6 h-3 mb-8"></div>
            <div className="loading-skeleton w-full h-3"></div>
            <div className="loading-skeleton w-full h-3"></div>
            <div className="loading-skeleton w-full h-3"></div>
            <div className="loading-skeleton w-5/6 h-3"></div>
            <span className="sr-only">Loading...</span>
        </div>
    </main>
  );
}
