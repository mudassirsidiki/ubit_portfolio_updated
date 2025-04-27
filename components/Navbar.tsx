"use client"
import { Menu, X, Sun, Moon, LogOut } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  // Check login status and set theme mounting state
  useEffect(() => {
    setMounted(true)

    // Check login status
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    const storedUsername = localStorage.getItem("username")

    setIsLoggedIn(loggedIn)
    if (storedUsername) {
      setUsername(storedUsername)
    }
  }, [])

  // Handle scroll events with throttling for better performance
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout | null = null

    const handleScroll = () => {
      if (scrollTimer !== null) return

      scrollTimer = setTimeout(() => {
        setIsScrolled(window.scrollY > 20)
        scrollTimer = null
      }, 100) // Throttle to 100ms
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimer) clearTimeout(scrollTimer)
    }
  }, [])

  // Close dropdowns when clicking outside - optimized with useCallback
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (isServicesMenuOpen && !target.closest("[data-services-dropdown]")) {
        setIsServicesMenuOpen(false)
      }

      if (isUserMenuOpen && !target.closest("[data-user-dropdown]")) {
        setIsUserMenuOpen(false)
      }
    },
    [isServicesMenuOpen, isUserMenuOpen],
  )

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [handleClickOutside])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Determine Navbar Background
  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled || pathname !== "/"
      ? "bg-white dark:bg-black shadow-lg py-3 text-gray-900 dark:text-white"
      : "bg-black/40 backdrop-blur-md py-5 text-white shadow-lg"
  }`

  // Function to handle home button click
  const handleHomeClick = useCallback(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
    }
  }, [pathname, router])

  // Function to handle logout
  const handleLogout = useCallback(() => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("username")
    localStorage.removeItem("userRole")
    localStorage.removeItem("loginSource")
    setIsLoggedIn(false)
    setUsername("")
    setIsUserMenuOpen(false)

    // Redirect to home page
    router.push("/")
  }, [router])

  // Toggle theme with proper handling
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  // Updated services array with "Blogs" instead of "Academic Blogs"
  const services = [
    {
      name: "Blogs",
      href: "/services/blogs",
      restricted: false,
    },
    {
      name: "Events",
      href: "/services/events",
      restricted: false,
    },
    {
      name: "Result Storage",
      href: "/services/result-storage",
      dashboard: "/dashboard/result-storage",
      restricted: true,
    },
    { name: "Portfolio Generation", href: "/services/portfolio-generation", restricted: true },
    { name: "Alumni Network", href: "/services/alumni-network", restricted: true },
    { name: "Buy & Sell Books", href: "/services/buy-sell", restricted: false },
  ]

  return (
    <nav className={navbarClasses}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <button onClick={handleHomeClick} className="flex items-center gap-3" aria-label="Go to homepage">
          <div className="relative w-10 h-10 bg-white dark:bg-gray-800 rounded-full p-1">
            <Image src="/images/logo.jpg" alt="UBIT Logo" fill className="object-contain dark:hidden rounded-full" />
            <Image
              src="/images/logo.jpg"
              alt="UBIT Logo"
              fill
              className="object-contain hidden dark:block rounded-full"
            />
          </div>
          <span
            className={`text-xl font-bold ${
              isScrolled || pathname !== "/" ? "text-primary dark:text-white" : "text-white"
            }`}
          >
            UBIT
          </span>
        </button>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 shadow-md"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          )}

          <button
            className="text-current bg-gray-100 dark:bg-gray-700 p-2 rounded-full shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              pathname === "/" ? "text-primary dark:text-primary-200" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              pathname === "/about" ? "text-primary dark:text-primary-200" : ""
            }`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative" data-services-dropdown>
            <button
              className={`text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 ${
                pathname.startsWith("/services") ? "text-primary dark:text-primary-200" : ""
              }`}
              onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
              aria-expanded={isServicesMenuOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${isServicesMenuOpen ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isServicesMenuOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-20 border-2 border-gray-200 dark:border-gray-700"
                role="menu"
              >
                {services.map((service, index) => {
                  // If service is restricted and user is logged in, link directly to the dashboard
                  const href = service.restricted && isLoggedIn && service.dashboard ? service.dashboard : service.href

                  return (
                    <Link
                      key={index}
                      href={href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-primary-200 flex items-center justify-between"
                      onClick={() => setIsServicesMenuOpen(false)}
                      role="menuitem"
                    >
                      <span>{service.name}</span>
                      {service.restricted && !isLoggedIn && (
                        <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">Login</span>
                      )}
                    </Link>
                  )
                })}
                <div className="border-t border-gray-100 dark:border-gray-700 my-2"></div>
                <Link
                  href="/services"
                  className="block px-4 py-2 text-sm font-medium text-primary dark:text-primary-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsServicesMenuOpen(false)}
                  role="menuitem"
                >
                  View All Services
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              pathname === "/contact" ? "text-primary dark:text-primary-200" : ""
            }`}
          >
            Contact
          </Link>

          <div className="flex items-center gap-3 ml-4">
            {isLoggedIn ? (
              // User is logged in - show user menu
              <div className="relative" data-user-dropdown>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isScrolled || pathname !== "/"
                      ? "text-primary hover:bg-primary/5 dark:text-white dark:hover:bg-white/10"
                      : "text-white hover:bg-white/10"
                  }`}
                  aria-expanded={isUserMenuOpen}
                  aria-haspopup="true"
                >
                  <span>{username}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${isUserMenuOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isUserMenuOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-20 border-2 border-gray-200 dark:border-gray-700"
                    role="menu"
                  >
                    <Link
                      href="/dashboard/result-storage"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setIsUserMenuOpen(false)}
                      role="menuitem"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setIsUserMenuOpen(false)}
                      role="menuitem"
                    >
                      Profile
                    </Link>
                    <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // User is not logged in - show login/signup buttons
              <>
                <Link
                  href="/login"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border ${
                    isScrolled || pathname !== "/"
                      ? "text-primary border-primary hover:bg-primary/5 dark:text-white dark:border-white dark:hover:bg-white/10"
                      : "text-white border-white hover:bg-white/10"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg border border-primary-200"
                >
                  Sign Up
                </Link>
              </>
            )}

            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 shadow-md"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu - Updated with "Blogs" instead of "Academic Blogs" */}
        {isMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl p-6 md:hidden flex flex-col space-y-4 border-t-2 border-gray-200 dark:border-gray-700"
            role="dialog"
            aria-modal="true"
          >
            <Link
              href="/"
              className="text-gray-900 dark:text-white font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 dark:text-white font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center justify-between w-full text-gray-900 dark:text-white font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  setIsServicesMenuOpen(!isServicesMenuOpen)
                }}
                aria-expanded={isServicesMenuOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${isServicesMenuOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {isServicesMenuOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200 dark:border-gray-700" role="menu">
                  {services.map((service, index) => {
                    // If service is restricted and user is logged in, link directly to the dashboard
                    const href =
                      service.restricted && isLoggedIn && service.dashboard ? service.dashboard : service.href

                    return (
                      <Link
                        key={index}
                        href={href}
                        className="block py-1 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-sm flex items-center justify-between"
                        onClick={() => setIsMenuOpen(false)}
                        role="menuitem"
                      >
                        <span>{service.name}</span>
                        {service.restricted && !isLoggedIn && (
                          <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">Login</span>
                        )}
                      </Link>
                    )
                  })}
                  <Link
                    href="/services"
                    className="block py-1 text-primary dark:text-primary-200 font-medium text-sm"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-gray-900 dark:text-white font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              {isLoggedIn ? (
                // User is logged in - show dashboard and logout options
                <>
                  <Link
                    href="/dashboard/result-storage"
                    className="text-primary hover:bg-primary/5 dark:text-white dark:hover:bg-primary/10 px-4 py-2 rounded-md text-sm font-medium transition-colors text-center border border-primary dark:border-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                    className="flex items-center justify-center text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 px-4 py-2 rounded-md text-sm font-medium transition-colors text-center border border-red-200"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign out
                  </button>
                </>
              ) : (
                // User is not logged in - show login/signup buttons
                <>
                  <Link
                    href="/login"
                    className="text-primary hover:bg-primary/5 dark:text-white dark:hover:bg-primary/10 px-4 py-2 rounded-md text-sm font-medium transition-colors text-center border border-primary dark:border-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors text-center shadow-md border border-primary-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
