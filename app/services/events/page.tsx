"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Clock, Filter, Search, PlusCircle, Tag, ChevronRight } from "lucide-react"

// Mock data for events
const MOCK_EVENTS = [
  {
    id: 1,
    title: "Annual Tech Symposium 2023",
    description:
      "Join us for a day of tech talks, workshops, and networking opportunities with industry professionals.",
    date: "2023-12-15",
    time: "09:00 AM - 05:00 PM",
    location: "UBIT Main Auditorium",
    image: "/placeholder.svg?height=300&width=600",
    category: "Conference",
    organizer: "UBIT Computer Science Department",
    featured: true,
  },
  {
    id: 2,
    title: "Hackathon: Code for Change",
    description: "A 24-hour coding competition to develop solutions for social problems. Open to all UBIT students.",
    date: "2023-11-25",
    time: "10:00 AM - 10:00 AM (Next Day)",
    location: "UBIT Lab Complex",
    image: "/placeholder.svg?height=300&width=600",
    category: "Competition",
    organizer: "UBIT Programming Club",
    featured: true,
  },
  {
    id: 3,
    title: "Workshop: Introduction to Machine Learning",
    description: "Learn the basics of machine learning algorithms and their applications in this hands-on workshop.",
    date: "2023-11-18",
    time: "02:00 PM - 05:00 PM",
    location: "Room 201, CS Building",
    image: "/placeholder.svg?height=300&width=600",
    category: "Workshop",
    organizer: "AI Research Group",
    featured: false,
  },
  {
    id: 4,
    title: "Guest Lecture: Cybersecurity Trends",
    description: "Industry expert will discuss the latest trends and challenges in cybersecurity.",
    date: "2023-11-10",
    time: "03:00 PM - 04:30 PM",
    location: "Virtual (Zoom)",
    image: "/placeholder.svg?height=300&width=600",
    category: "Lecture",
    organizer: "UBIT Information Security Department",
    featured: false,
  },
  {
    id: 5,
    title: "Career Fair: Tech Opportunities",
    description: "Connect with top tech companies looking to hire UBIT graduates and interns.",
    date: "2023-12-05",
    time: "10:00 AM - 04:00 PM",
    location: "UBIT Main Hall",
    image: "/placeholder.svg?height=300&width=600",
    category: "Career",
    organizer: "UBIT Career Services",
    featured: true,
  },
  {
    id: 6,
    title: "Research Symposium",
    description: "Undergraduate and graduate students present their research projects.",
    date: "2023-12-10",
    time: "01:00 PM - 06:00 PM",
    location: "Research Center, UBIT",
    image: "/placeholder.svg?height=300&width=600",
    category: "Research",
    organizer: "UBIT Research Committee",
    featured: false,
  },
]

// Categories for filtering
const CATEGORIES = [
  "All Categories",
  "Conference",
  "Workshop",
  "Competition",
  "Lecture",
  "Career",
  "Research",
  "Social",
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [events, setEvents] = useState(MOCK_EVENTS)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState("")

  // Check login status and role on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    const role = localStorage.getItem("userRole") || ""

    setIsLoggedIn(loggedIn)
    setUserRole(role)
  }, [])

  // Filter events based on search and category
  useEffect(() => {
    let filteredEvents = MOCK_EVENTS

    // Filter by search term
    if (searchTerm) {
      filteredEvents = filteredEvents.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.organizer.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "All Categories") {
      filteredEvents = filteredEvents.filter((event) => event.category === selectedCategory)
    }

    setEvents(filteredEvents)
  }, [searchTerm, selectedCategory])

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  // Check if user is admin
  const isAdmin = userRole === "admin"

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
            <span className="text-white font-medium">Events</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Events and Announcements</h1>
            <p className="text-xl text-white/90">
              Connect with the latest events and activities happening at UBIT. Connect with the latest events and
              activities happening at UBIT. Connect with the latest events and activities happening at UBIT.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-8 mx-20">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="w-full md:w-64">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-primary"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Create Event Button (Admin Only) */}
          {isAdmin && (
            <Link
              href="/services/events/create"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              <PlusCircle className="h-5 w-5" />
              <span>Create Event</span>
            </Link>
          )}
        </div>
      </div>

      {/* Featured Events */}
      {/* <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter((event) => event.featured)
              .map((event) => (
                <div
                  key={event.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-primary">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Link
                      href={`/services/events/${event.id}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                    >
                      View Details <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section> */}

      {/* All Events */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mx-20">All Events</h2>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20 py-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-primary">{event.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">By {event.organizer}</span>
                    <Link
                      href={`/services/events/${event.id}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                    >
                      View Details <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No events found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All Categories")
              }}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
