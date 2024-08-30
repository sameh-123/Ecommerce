
export default function Loading() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-start gap-10 flex-wrap">
      <div>
        <div className="h-96 w-64 bg-gray-300 rounded-sm animate-pulse mb-4"></div>
        <div className="h-7 w-52 bg-gray-300 animate-pulse rounded-full mb-3"></div>
        <div className="mx-auto flex justify-between items-center">
          <div className="h-7 w-24 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-7 w-10 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div>
        <div className="h-96 w-64 bg-gray-300 rounded-sm animate-pulse mb-4"></div>
        <div className="h-7 w-52 bg-gray-300 animate-pulse rounded-full mb-3"></div>
        <div className="mx-auto flex justify-between items-center">
          <div className="h-7 w-24 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-7 w-10 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div>
        <div className="h-96 w-64 bg-gray-300 rounded-sm animate-pulse mb-4"></div>
        <div className="h-7 w-52 bg-gray-300 animate-pulse rounded-full mb-3"></div>
        <div className="mx-auto flex justify-between items-center">
          <div className="h-7 w-24 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-7 w-10 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>

    </div>
  );
}
