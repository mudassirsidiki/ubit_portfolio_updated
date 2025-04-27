import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
      {/* 404 with gradient effect */}
      <h1 className="text-7xl lg:text-9xl font-bold bg-gradient-to-r from-primary to-orange-200 text-transparent bg-clip-text mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>

      <Link href="/" className="btn-primary text-base sm:text-base">
        Return Home
      </Link>
    </div>
  )
}
