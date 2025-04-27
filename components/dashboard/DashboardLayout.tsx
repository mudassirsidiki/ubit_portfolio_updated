"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import {
  BarChart3,
  ChevronLeft,
  FileText,
  GraduationCap,
  Home,
  LogOut,
  Menu,
  Sun,
  Moon,
  ChevronDown,
  Bell,
  ChevronRight,
} from "lucide-react"
import AddResultModal from "./AddResultModal"
import { useTheme } from "next-themes"

interface DashboardLayoutProps {
  children: React.ReactNode
  title?: string
  activeTab?: "dashboard" | "results"
}

export default function DashboardLayout({ children, title, activeTab }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [username, setUsername] = useState("User")

  // Determine active tab based on pathname if not explicitly provided
  const currentTab = activeTab || (pathname?.includes("/results") ? "results" : "dashboard")

  // Check if user is logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)
    setIsLoading(false)

    if (!loggedIn) {
      router.push("/login/result-storage?redirectTo=/dashboard/result-storage")
    } else {
      // Get username from localStorage
      const storedUsername = localStorage.getItem("username")
      if (storedUsername) {
        setUsername(storedUsername)
      }
    }
  }, [router])

  // Handle responsive sidebar
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("username")
    localStorage.removeItem("userRole")
    router.push("/")
  }

  const handleGoBack = () => {
    window.history.back()
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const notifications = [
    {
      id: 1,
      title: "New Result Added",
      message: "Your result for Database Systems has been added.",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      title: "GPA Updated",
      message: "Your cumulative GPA has been updated to 3.75.",
      time: "1 day ago",
      unread: false,
    },
    {
      id: 3,
      title: "Semester Completed",
      message: "Congratulations on completing Semester 3!",
      time: "3 days ago",
      unread: false,
    },
  ]

  // Show loading while checking login status
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isLoggedIn) {
    return null // Don't render anything if not logged in
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        } md:translate-x-0 bg-white dark:bg-gray-800 dark:bg-black border-r border-gray-200 dark:border-gray-700 shadow-md`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            {isSidebarOpen ? (
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-md">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <span className="font-bold text-lg">UBIT Results</span>
              </Link>
            ) : (
              <div className="mx-auto bg-primary/10 p-2 rounded-md">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
            )}
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {isSidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 py-4 px-3 overflow-y-auto">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard/result-storage"
                  className={`flex items-center ${
                    isSidebarOpen ? "gap-3 px-4" : "justify-center px-0"
                  } py-3 rounded-md transition-colors ${
                    currentTab === "dashboard"
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <BarChart3 className="h-5 w-5" />
                  {isSidebarOpen && <span>Dashboard</span>}
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/result-storage/results"
                  className={`flex items-center ${
                    isSidebarOpen ? "gap-3 px-4" : "justify-center px-0"
                  } py-3 rounded-md transition-colors ${
                    currentTab === "results"
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <FileText className="h-5 w-5" />
                  {isSidebarOpen && <span>Results</span>}
                </Link>
              </li>
            </ul>

            <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className={`flex items-center ${
                      isSidebarOpen ? "gap-3 px-4" : "justify-center px-0"
                    } py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300`}
                  >
                    <Home className="h-5 w-5" />
                    {isSidebarOpen && <span>Back to Home</span>}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className={`flex items-center ${
                      isSidebarOpen ? "gap-3 px-4 w-full text-left" : "justify-center px-0 w-full"
                    } py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-red-600`}
                  >
                    <LogOut className="h-5 w-5" />
                    {isSidebarOpen && <span>Sign Out</span>}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "md:ml-20"}`}>
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30 shadow-sm">
          <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={toggleSidebar}
                className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <Menu className="h-6 w-6" />
              </button>
              <button
                onClick={handleGoBack}
                className="flex items-center gap-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="text-sm">Back</span>
              </button>
              <h1 className="text-xl font-bold">{title || "Academic Dashboard"}</h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              )}

              {/* Notifications */}
              <div className="relative">
                <button
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 relative"
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                >
                  <Bell className="h-5 w-5" />
                  {notifications.some((n) => n.unread) && (
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                  )}
                </button>

                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-10 border border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <p className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">No notifications</p>
                      ) : (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                              notification.unread ? "bg-blue-50 dark:bg-blue-900/20" : ""
                            }`}
                          >
                            <div className="flex justify-between">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</p>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{notification.message}</p>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                      <button className="text-sm text-primary hover:text-primary-600 dark:hover:text-primary-400">
                        Mark all as read
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User menu */}
              <div className="relative">
                <button className="flex items-center space-x-2" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    <span className="text-sm font-medium">{username.substring(0, 2).toUpperCase()}</span>
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {username}
                  </span>
                  <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-10 border border-gray-200 dark:border-gray-700">
                    <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 dark:bg-black">{children}</main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && isMobile && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Add Result Modal */}
      <AddResultModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  )
}
