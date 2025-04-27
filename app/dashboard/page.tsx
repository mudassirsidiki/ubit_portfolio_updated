"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

// This is a redirect page that will send users to the result storage dashboard
export default function DashboardRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"

    if (isLoggedIn) {
      // Redirect to the result storage dashboard
      router.push("/dashboard/result-storage")
    } else {
      // If not logged in, redirect to login page
      router.push("/login?redirectTo=/dashboard/result-storage")
    }
  }, [router])

  // Show a loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Redirecting to dashboard...</h2>
      </div>
    </div>
  )
}
