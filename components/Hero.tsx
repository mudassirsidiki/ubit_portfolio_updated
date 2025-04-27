"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const searchParams = useSearchParams()
  const [showWelcome, setShowWelcome] = useState(false)
  const [username, setUsername] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  // Check if user just logged in and should see welcome message
  useEffect(() => {
    const welcome = searchParams.get("welcome") === "true"
    const storedUsername = localStorage.getItem("username")

    if (welcome && storedUsername) {
      setUsername(storedUsername)
      setShowWelcome(true)

      // Auto-hide welcome message after 5 seconds
      const timer = setTimeout(() => {
        setShowWelcome(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [searchParams])

  // Auto-advance carousel
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearTimeout(timer)
  }, [currentSlide])

  const handleCloseWelcome = useCallback(() => {
    setShowWelcome(false)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black to-primary/90 text-white">
      {/* Welcome notification */}
      {showWelcome && (
        <div
          className="fixed top-20 right-4 z-50 bg-white text-primary px-6 py-4 rounded-lg shadow-lg flex items-center justify-between max-w-md animate-slideIn"
          role="alert"
          aria-live="polite"
        >
          <div>
            <h3 className="font-bold text-lg">Hi {username}!</h3>
            <p>Welcome back to UBIT Services Portal.</p>
          </div>
          <button
            onClick={handleCloseWelcome}
            className="ml-4 p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close notification"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              An Open-Source Platform For All Your UBIT Needs
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-white/80">University of Karachi</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join thousands of students and faculty members who are already enjoying the benefits of UBIT. Streamline
              your university experience with ourprehensive set of tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/login" className="btn-primary text-center">
                Sign In
              </Link>
              <Link href="/recruiters" className="btn-outline text-center">
                Seeking Talent?
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              {/* Replace service cards with image carousel */}
              <div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl overflow-hidden"
                style={{ height: "550px", width: "100%" }}
              >
                <div className="relative h-full">
                  {/* First slide */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 0 ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className="relative h-[550px] w-full rounded-xl overflow-hidden">
                      <Image
                        src="/images/hero1.png?height=1200&width=1600"
                        alt="UBIT Campus"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Second slide */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 1 ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className="relative h-[550px] w-full rounded-xl overflow-hidden">
                      <Image
                        src="/images/hero2.jpg?height=1200&width=1600"
                        alt="Student Life"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Third slide */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 2 ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className="relative h-[550px] w-full rounded-xl overflow-hidden">
                      <Image
                        src="/images/hero3.jpg?height=1200&width=1600"
                        alt="Academic Excellence"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Navigation buttons */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
                      className="h-12 w-12 flex items-center justify-center bg-black/40 hover:bg-black/60 rounded-full text-white"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
                      className="h-12 w-12 flex items-center justify-center bg-black/40 hover:bg-black/60 rounded-full text-white"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 rounded-full blur-2xl"
                aria-hidden="true"
              ></div>
              <div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
