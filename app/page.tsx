"use client"

import { useEffect, useState, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ServicesSection from "@/components/ServicesSection"
import Footer from "@/components/Footer"
// import RecruiterSection from "@/components/RecruiterSection"
import { X } from "lucide-react"

export default function Home() {
  const searchParams = useSearchParams()
  const [showWelcome, setShowWelcome] = useState(false)
  const [username, setUsername] = useState("")

  useEffect(() => {
    // Check if the welcome parameter is present in the URL
    const welcomeParam = searchParams.get("welcome")
    const storedUsername = localStorage.getItem("username")

    if (welcomeParam === "true" && storedUsername) {
      setUsername(storedUsername)
      setShowWelcome(true)

      // Remove the welcome parameter from the URL
      try {
        const url = new URL(window.location.href)
        url.searchParams.delete("welcome")
        window.history.replaceState({}, "", url)
      } catch (error) {
        console.error("Error updating URL:", error)
      }

      // Auto-hide the welcome message after 5 seconds
      const timer = setTimeout(() => {
        setShowWelcome(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [searchParams])

  const handleCloseWelcome = useCallback(() => {
    setShowWelcome(false)
  }, [])

  return (
    <main className="flex flex-col">
      {showWelcome && (
        <div
          className="fixed top-20 right-4 z-50 bg-primary text-white p-4 rounded-lg shadow-lg max-w-xs animate-fade-in"
          role="alert"
          aria-live="polite"
        >
          <button
            onClick={handleCloseWelcome}
            className="absolute top-2 right-2 text-white/80 hover:text-white"
            aria-label="Close welcome message"
          >
            <X size={16} />
          </button>
          <p className="font-medium">Hi {username}, Welcome Back! 👋</p>
          <p className="text-sm mt-1 text-white/80">It's great to see you again.</p>
        </div>
      )}
      <Navbar />
      <Hero />
      <ServicesSection />
      {/* <RecruiterSection /> */}
      <Footer />
    </main>
  )
}
