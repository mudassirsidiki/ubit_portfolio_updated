"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"
import ForgotPasswordModal from "./ForgotPasswordModal"

export default function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Check if user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    const username = localStorage.getItem("username")

    if (isLoggedIn && username) {
      // User is already logged in, check if we need to redirect
      const redirectTo = searchParams.get("redirectTo")
      if (redirectTo) {
        router.push(redirectTo)
      } else {
        // If no specific redirect, check if they were trying to access result storage
        const loginSource = localStorage.getItem("loginSource")
        if (loginSource === "result-storage") {
          router.push("/dashboard/result-storage")
        } else {
          // Default redirect to home with welcome message
          router.push("/?welcome=true")
        }
      }
    }
  }, [router, searchParams])

  // Handle form input changes
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setError("")
  }, [])

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setError("")
  }, [])

  // Toggle password visibility
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev)
  }, [])

  // Open forgot password modal
  const openForgotPasswordModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  // Close forgot password modal
  const closeForgotPasswordModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  // Form validation
  const validateForm = useCallback(() => {
    if (!email.trim()) {
      setError("Email is required")
      return false
    }

    if (!password) {
      setError("Password is required")
      return false
    }

    return true
  }, [email, password])

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      if (!validateForm()) {
        return
      }

      try {
        setIsLoading(true)
        setError("")

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // For demo purposes, accept "admin" as valid credentials
        if (email === "admin" && password === "admin") {
          // Store login state in localStorage for session persistence
          localStorage.setItem("isLoggedIn", "true")
          localStorage.setItem("username", "Admin User")
          localStorage.setItem("userRole", "admin")

          // Check if there's a redirect parameter
          const redirectTo = searchParams.get("redirectTo")

          if (redirectTo) {
            // If there's a specific redirect URL, go there
            router.push(redirectTo)
          } else {
            // If logging in from the main site, redirect to home with welcome message
            router.push("/?welcome=true")
          }
        } else {
          setError("Invalid email or password")
        }
      } catch (err) {
        console.error("Login error:", err)
        setError("An error occurred during login. Please try again.")
      } finally {
        setIsLoading(false)
      }
    },
    [email, password, validateForm, router, searchParams],
  )

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm" role="alert" aria-live="assertive">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Enter your email"
            required
            aria-required="true"
            aria-invalid={!!error && !email}
          />
          <p className="text-xs text-gray-500">Demo: admin</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <button type="button" onClick={openForgotPasswordModal} className="text-sm text-primary hover:underline">
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
              placeholder="Enter your password"
              required
              aria-required="true"
              aria-invalid={!!error && !password}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <p className="text-xs text-gray-500">Demo: admin</p>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center"
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </button>
      </form>

      <ForgotPasswordModal isOpen={isModalOpen} onClose={closeForgotPasswordModal} />
    </>
  )
}
