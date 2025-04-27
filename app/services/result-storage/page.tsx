"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronRight, ArrowLeft, Lock } from "lucide-react"
import Image from "next/image"

export default function ResultStoragePage() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)

    // If user is already logged in, redirect to dashboard
    if (loggedIn) {
      // Store the login source to help with redirects
      localStorage.setItem("loginSource", "result-storage")
      router.push("/dashboard/result-storage")
    } else {
      setIsLoading(false)
    }
  }, [router])

  // Handle login click - store the source for redirect after login
  const handleLoginClick = () => {
    localStorage.setItem("loginSource", "result-storage")
  }

  // If still checking login status, show loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="bg-primary text-white py-3">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Result Storage</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/services" className="flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              Login Required
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Result Storage</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Securely store and access your academic results and transcripts. Our platform provides a centralized
              location for all your academic records, making it easy to track your progress and share your achievements.
            </p>

            <Link
              href="/login?redirectTo=/dashboard/result-storage"
              onClick={handleLoginClick}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Login to Access
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33333M12.6667 8L8.00004 12.6667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Result Storage"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full">
                  <Lock className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-8 shadow-md dark:border dark:border-gray-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Secure Storage</h3>
              <p className="text-gray-700 dark:text-gray-300">
                All your academic records are securely stored with enterprise-grade encryption.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Easy Access</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Access your results anytime, anywhere, from any device with internet connection.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Visual Charts</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Visualize your academic performance with our interactive charts and graphs.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">GPA Calculator</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Track your academic progress with our built-in GPA calculator and performance analytics.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 dark:bg-primary/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ready to Access Your Results?</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Login to your account to start using the Result Storage service.
              </p>
            </div>
            <Link
              href="/login?redirectTo=/dashboard/result-storage"
              onClick={handleLoginClick}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg"
            >
              Login Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
