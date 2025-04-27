"use client"

import { useState, useCallback, useMemo, useEffect } from "react"
import Link from "next/link"
import { FileText, Briefcase, Users, Calendar, BookOpen, Database } from "lucide-react"
import LoginModal from "./LoginModal"

export default function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check login status on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)
  }, [])

  // Memoize services array to prevent unnecessary re-renders
  const services = useMemo(
    () => [
      {
        icon: <FileText className="h-8 w-8 transition-transform group-hover:scale-110 duration-300" />,
        title: "Blogs",
        description: "Explore insightful articles and research from our academic community",
        href: "/services/blogs",
        restricted: false,
        name: "Blogs",
      },
      {
        icon: <Calendar className="h-8 w-8 transition-transform group-hover:scale-110 duration-300" />,
        title: "Events",
        description: "Stay updated with university events and important announcements",
        href: "/services/events",
        restricted: false,
        name: "Events",
      },
      {
        icon: <Database className="h-8 w-8 transition-transform group-hover:scale-110 duration-300" />,
        title: "Result Storage",
        description: "Securely store and access your academic results and transcripts",
        href: "/services/result-storage",
        dashboard: "/dashboard/result-storage",
        restricted: true,
        name: "Result Storage",
      },
      {
        icon: <Briefcase className="h-8 w-8 transition-transform group-hover:scale-110 duration-300" />,
        title: "Portfolio Generation",
        description: "Create professional portfolios to showcase your work",
        href: "/services/portfolio-generation",
        restricted: true,
        name: "Portfolio Generation",
      },
      {
        icon: <Users className="h-8 w-8 transition-transform group-hover:scale-110 duration-300" />,
        title: "Alumni Network",
        description: "Connect with graduates and explore career opportunities",
        href: "/services/alumni-network",
        restricted: false,
        name: "Alumni Network",
      },

      {
        icon: <BookOpen className="h-8 w-8 transition-transform group-hover:scale-110 duration-300" />,
        title: "Buy & Sell Books",
        description: "Platform for trading academic textbooks and study materials",
        href: "/services/buy-sell-books",
        restricted: false,
        name: "Buy & Sell Books",
      },
    ],
    [],
  )

  const handleServiceClick = useCallback(
    (service: any) => {
      if (service.restricted && !isLoggedIn) {
        setSelectedService(service.title)
        setModalOpen(true)
      }
    },
    [isLoggedIn],
  )

  const handleCloseModal = useCallback(() => {
    setModalOpen(false)
  }, [])

  return (
    <section id="servicesSection" className="py-24 bg-gray-100 dark:bg-transparent">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Services</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to enhance your academic journey and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}>
              {service.restricted && !isLoggedIn ? (
                // Restricted service and user is NOT logged in - show login prompt
                <div
                  onClick={() => handleServiceClick(service)}
                  className="bg-white dark:bg-black/40 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-800 p-8 rounded-xl flex flex-col h-full hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-2 duration-300 shadow-md"
                  tabIndex={0}
                  role="button"
                  aria-label={`Access ${service.title} service (requires login)`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleServiceClick(service)
                    }
                  }}
                >
                  <div className="w-14 h-14 bg-primary/20 dark:bg-primary/30 rounded-lg flex items-center justify-center text-primary mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
                  <div className="text-primary dark:text-primary-200 font-medium flex items-center gap-2 mt-2">
                    Access Service
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33333M12.6667 8L8.00004 12.6667"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                // User is logged in OR service is not restricted - show direct link
                <Link
                  href={service.restricted && isLoggedIn && service.dashboard ? service.dashboard : service.href}
                  className="block"
                >
                  <div
                    className="bg-white dark:bg-black/40 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-800 p-8 rounded-xl flex flex-col h-full hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-2 duration-300 shadow-md"
                    aria-label={`Explore ${service.title} service`}
                  >
                    <div className="w-14 h-14 bg-primary/20 dark:bg-primary/30 rounded-lg flex items-center justify-center text-primary mb-6">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
                    <div className="text-primary dark:text-primary-200 font-medium flex items-center gap-2 mt-2">
                      {service.restricted && isLoggedIn ? "Access Service" : "Explore Service"}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33333M12.6667 8L8.00004 12.6667"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl text-lg font-medium border-2 border-primary-200"
          >
            View All Services
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
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

      <LoginModal isOpen={modalOpen} onClose={handleCloseModal} serviceName={selectedService} />
    </section>
  )
}
