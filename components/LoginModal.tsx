"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
}

export default function LoginModal({ isOpen, onClose, serviceName }: LoginModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden"
    } else {
      // Add a small delay before hiding to allow for animation
      const timer = setTimeout(() => {
        setIsVisible(false)
        // Re-enable body scrolling
        document.body.style.overflow = ""
      }, 300)
      return () => clearTimeout(timer)
    }

    // Cleanup function to ensure body scrolling is re-enabled
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white dark:bg-black/90 backdrop-blur-sm rounded-xl p-8 max-w-md w-full shadow-2xl transition-all duration-300 transform border-2 border-gray-200 dark:border-gray-700 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Authentication Required</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors bg-gray-100 dark:bg-gray-700 p-2 rounded-full"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
          You need to be logged in to access the{" "}
          <span className="font-semibold text-primary dark:text-primary-200">{serviceName}</span> service. Please login
          or create an account to continue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors text-center font-medium shadow-md hover:shadow-lg border border-primary-200"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center font-medium shadow-md hover:shadow-lg"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}
