"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Users, ExternalLink, Lock, ArrowRight, ChevronRight } from "lucide-react"

// Mock data for alumni groups
const ALUMNI_GROUPS = [
  {
    id: 1,
    name: "UBIT CS Batch 2020-2024",
    description: "For Computer Science graduates from the 2020-2024 batch.",
    members: 156,
    platform: "WhatsApp",
    link: "https://chat.whatsapp.com/example1",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "UBIT SE Alumni Network",
    description: "Software Engineering alumni from all batches.",
    members: 243,
    platform: "WhatsApp",
    link: "https://chat.whatsapp.com/example2",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "UBIT IT Professionals",
    description: "Information Technology graduates working in the industry.",
    members: 189,
    platform: "Telegram",
    link: "https://t.me/example3",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "UBIT Alumni LinkedIn Group",
    description: "Professional networking for all UBIT alumni.",
    members: 412,
    platform: "LinkedIn",
    link: "https://linkedin.com/groups/example4",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "UBIT 2015-2019 Batch",
    description: "For all departments' graduates from the 2015-2019 batch.",
    members: 203,
    platform: "WhatsApp",
    link: "https://chat.whatsapp.com/example5",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "UBIT Job Opportunities",
    description: "Group for sharing job opportunities exclusively for UBIT graduates.",
    members: 378,
    platform: "Telegram",
    link: "https://t.me/example6",
    image: "/placeholder.svg?height=80&width=80",
  },
]

// Mock data for upcoming alumni events
const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Annual Alumni Meetup 2023",
    date: "December 15, 2023",
    location: "UBIT Main Campus",
    description: "Join us for the annual alumni gathering with networking opportunities and guest speakers.",
  },
  {
    id: 2,
    title: "Tech Career Fair",
    date: "January 20, 2024",
    location: "Virtual Event",
    description: "Connect with top tech companies looking to hire UBIT graduates.",
  },
]

// Mock data for alumni success stories
const SUCCESS_STORIES = [
  {
    id: 1,
    name: "Ahmed Khan",
    batch: "2015-2019",
    position: "Senior Software Engineer",
    company: "Google",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "My education at UBIT provided the foundation for my career in tech. The programming fundamentals I learned there are still relevant in my work today.",
  },
  {
    id: 2,
    name: "Fatima Ali",
    batch: "2014-2018",
    position: "Product Manager",
    company: "Microsoft",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "UBIT taught me not just technical skills but also how to approach problems systematically. This has been invaluable in my product management role.",
  },
  {
    id: 3,
    name: "Zain Ahmed",
    batch: "2016-2020",
    position: "Data Scientist",
    company: "Amazon",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The rigorous mathematics and statistics courses at UBIT prepared me well for my career in data science. I'm grateful for the strong foundation.",
  },
]

export default function AlumniNetworkPage() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check login status on mount
  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true)
      const loggedIn = localStorage.getItem("isLoggedIn") === "true"
      setIsLoggedIn(loggedIn)

      if (!loggedIn) {
        // Redirect to login page if not logged in
        router.push("/login?redirectTo=/services/alumni-network")
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Loading...</h2>
        </div>
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Login Required</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Please sign in to access the Alumni Network and connect with fellow graduates.
          </p>
          <Link
            href="/login?redirectTo=/services/alumni-network"
            className="inline-flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Sign In <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Header */}

      {/* Breadcrumb - Updated for better navigation */}
      <div className="bg-primary text-white border-b border-primary/20">
        <div className="container-custom py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/80 hover:text-white">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <Link href="/services" className="text-white/80 hover:text-white">
              Services
            </Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">Alumni Network</span>
          </div>
        </div>
      </div>

      {/* Hero Section - Using the same gradient as landing page */}
      <div className="bg-gradient-to-br from-black to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        </div>
        <div className="container-custom relative z-10 py-16">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">UBIT Alumni Network</h1>
            <p className="text-xl text-white/90">
              Connect with fellow alumni and stay updated on UBIT events. Connect with fellow alumni and stay updated on
              UBIT events. Connect with fellow alumni and stay updated on UBIT events.
            </p>
          </div>
        </div>
      </div>

      {/* Alumni Groups Section */}
      <section className="mb-16 mx-20">
        <div className="flex items-center justify-between mb-8 pt-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Alumni Groups</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALUMNI_GROUPS.map((group) => (
            <div
              key={group.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Image
                      src={group.image || "/placeholder.svg"}
                      alt={group.platform}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{group.name}</h3>
                    <p className="text-sm text-primary">{group.platform} Group</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{group.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Users className="h-4 w-4" /> {group.members} members
                  </span>
                  <a
                    href={group.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1"
                  >
                    Join Group <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      {/* <section className="mb-16 mx-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Upcoming Alumni Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                  <Link
                    href={`/services/alumni-network/events/${event.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section> */}

      {/* Success Stories Section */}
      {/* <section className="mx-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Alumni Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUCCESS_STORIES.map((story) => (
              <div
                key={story.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="relative w-20 h-20 mb-4">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{story.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                      <GraduationCap className="h-4 w-4" />
                      <span>Batch {story.batch}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Briefcase className="h-4 w-4" />
                      <span>
                        {story.position} at {story.company}
                      </span>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-300 text-sm italic">"{story.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </section> */}
    </div>
  )
}
