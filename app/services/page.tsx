import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Database, Briefcase, FileText, Users, Calendar, BookOpen, Lock } from "lucide-react"

export default function ServicesPage() {
  // Update the allServices array to only include the current supported services
  // and remove any references to academic procedures or other outdated services

  const allServices = [
    {
      title: "Blogs",
      description: "Explore insightful articles and research from our academic community",
      icon: <FileText className="h-10 w-10" />,
      image: "/placeholder.svg?height=600&width=800",
      href: "/services/blogs",
      restricted: false,
      features: [
        "University procedures and guidelines",
        "HEC documentation processes",
        "Academic resources and guides",
        "Step-by-step instructions for common procedures",
      ],
    },
    {
      title: "Events",
      description: "Stay updated with university events and important announcements",
      icon: <Calendar className="h-10 w-10" />,
      image: "/placeholder.svg?height=600&width=800",
      href: "/services/events",
      restricted: false,
      features: [
        "Academic calendar and deadlines",
        "Campus events and workshops",
        "Guest lectures and seminars",
        "Student organization activities",
      ],
    },
    {
      title: "Result Storage",
      description: "Securely store and access your academic results and transcripts",
      icon: <Database className="h-10 w-10" />,
      image: "/placeholder.svg?height=600&width=800",
      href: "/services/result-storage",
      restricted: true,
      features: [
        "Secure storage of all academic transcripts",
        "Easy access to past semester results",
        "Official transcript requests",
        "Grade tracking and GPA calculator",
      ],
    },
    {
      title: "Portfolio Generation",
      description: "Create professional portfolios to showcase your work and achievements",
      icon: <Briefcase className="h-10 w-10" />,
      image: "/placeholder.svg?height=600&width=800",
      href: "/services/portfolio-generation",
      restricted: true,
      features: [
        "Professional portfolio templates",
        "Project showcase capabilities",
        "Skills and achievements section",
        "Shareable public profile links",
      ],
    },
    {
      title: "Alumni Network",
      description: "Connect with graduates and explore career opportunities",
      icon: <Users className="h-10 w-10" />,
      image: "/placeholder.svg?height=600&width=800",
      href: "/services/alumni-network",
      restricted: false,
      features: [
        "Connect with alumni in your field",
        "Mentorship opportunities",
        "Job postings from alumni employers",
        "Networking events and reunions",
      ],
    },
    {
      title: "Buy & Sell Books",
      description: "Platform for trading academic textbooks and study materials",
      icon: <BookOpen className="h-10 w-10" />,
      image: "/placeholder.svg?height=600&width=800",
      href: "/services/buy-sell-books",
      restricted: false,
      features: [
        "Marketplace for used textbooks",
        "Course-specific material exchange",
        "Price comparison with bookstore",
        "Direct messaging with sellers/buyers",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-transparent pt-24 pb-16">
      {/* Hero Section - Improved styling */}
      <div className="bg-gradient-to-br from-black to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Our Services</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Comprehensive digital solutions designed to enhance your academic journey and professional development
            </p>
          </div>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="container-custom mt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Services Section - Enhanced styling */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                  {service.restricted && (
                    <span className="ml-2 text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      Login Required
                    </span>
                  )}
                </h2>
              </div>

              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                {service.restricted && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                      <Lock className="h-12 w-12 text-white" />
                    </div>
                  </div>
                )}
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-medium">{service.description}</p>

              <div className="mb-6 flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {service.restricted ? (
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg font-medium w-full justify-center"
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
              ) : (
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg font-medium w-full justify-center"
                >
                  Explore Service
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
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
