"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Filter, PlusCircle, BookOpen, ShoppingBag, ChevronRight } from "lucide-react"

// Mock data for listings
const MOCK_LISTINGS = [
  {
    id: 1,
    title: "Data Structures and Algorithms",
    description: "Excellent condition, barely used. Perfect for CS students.",
    price: 1200,
    image: "/placeholder.svg?height=200&width=200",
    category: "Computer Science",
    type: "sell",
    condition: "Like New",
    postedBy: "Ali Hassan",
    postedDate: "2023-04-15",
  },
  {
    id: 2,
    title: "Calculus: Early Transcendentals",
    description: "8th edition, some highlighting but otherwise in good condition.",
    price: 800,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mathematics",
    type: "sell",
    condition: "Good",
    postedBy: "Sara Ahmed",
    postedDate: "2023-04-10",
  },
  {
    id: 3,
    title: "Looking for Physics Textbook",
    description: "Need a copy of University Physics by Young and Freedman, 14th or 15th edition.",
    price: 1000,
    image: "/placeholder.svg?height=200&width=200",
    category: "Physics",
    type: "buy",
    condition: "Any",
    postedBy: "Usman Khan",
    postedDate: "2023-04-05",
  },
  {
    id: 4,
    title: "Computer Networks",
    description: "By Tanenbaum, 5th edition. Some wear on the cover but content is perfect.",
    price: 950,
    image: "/placeholder.svg?height=200&width=200",
    category: "Computer Science",
    type: "sell",
    condition: "Good",
    postedBy: "Fatima Zahra",
    postedDate: "2023-04-02",
  },
  {
    id: 5,
    title: "Need Database Systems Book",
    description: "Looking for Database System Concepts by Silberschatz, any recent edition.",
    price: 1100,
    image: "/placeholder.svg?height=200&width=200",
    category: "Computer Science",
    type: "buy",
    condition: "Any",
    postedBy: "Hamza Ali",
    postedDate: "2023-03-28",
  },
  {
    id: 6,
    title: "Organic Chemistry",
    description: "By Wade, 8th edition. Excellent condition with no markings.",
    price: 1300,
    image: "/placeholder.svg?height=200&width=200",
    category: "Chemistry",
    type: "sell",
    condition: "Like New",
    postedBy: "Ayesha Malik",
    postedDate: "2023-03-25",
  },
]

// Categories for filtering
const CATEGORIES = [
  "All Categories",
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Engineering",
  "Business",
  "Arts",
  "Other",
]

export default function BuySellPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedType, setSelectedType] = useState("all")
  const [listings, setListings] = useState(MOCK_LISTINGS)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check login status on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)
  }, [])

  // Filter listings based on search, category, and type
  useEffect(() => {
    let filteredListings = MOCK_LISTINGS

    // Filter by search term
    if (searchTerm) {
      filteredListings = filteredListings.filter(
        (listing) =>
          listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          listing.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "All Categories") {
      filteredListings = filteredListings.filter((listing) => listing.category === selectedCategory)
    }

    // Filter by type (buy/sell)
    if (selectedType !== "all") {
      filteredListings = filteredListings.filter((listing) => listing.type === selectedType)
    }

    setListings(filteredListings)
  }, [searchTerm, selectedCategory, selectedType])

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
            <span className="text-white font-medium">Buy & Sell Books</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Buy & Sell Books</h1>
            <p className="text-xl text-white/90">
              Buy and sell books at the best prices. Buy and sell books at the best prices. Buy and sell books at the
              best prices.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 mx-20">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by title or description..."
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

          {/* Type Filter (Buy/Sell) */}
          <div className="flex rounded-md overflow-hidden border border-gray-300 dark:border-gray-600">
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                selectedType === "all"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
              onClick={() => setSelectedType("all")}
            >
              All
            </button>
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium flex items-center justify-center gap-1 ${
                selectedType === "buy"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
              onClick={() => setSelectedType("buy")}
            >
              <ShoppingBag className="h-4 w-4" />
              Buy
            </button>
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium flex items-center justify-center gap-1 ${
                selectedType === "sell"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
              onClick={() => setSelectedType("sell")}
            >
              <BookOpen className="h-4 w-4" />
              Sell
            </button>
          </div>
        </div>
      </div>

      {/* Post New Listing Button */}
      <div className="flex justify-end mb-6 mx-20">
        <Link
          href={isLoggedIn ? "/services/buy-sell/post" : "/login?redirectTo=/services/buy-sell/post"}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          <PlusCircle className="h-5 w-5" />
          <span>Post New Listing</span>
        </Link>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20 pb-10">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <Image src={listing.image || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
                <div
                  className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded-md ${
                    listing.type === "buy" ? "bg-primary" : "bg-green-500"
                  }`}
                >
                  {listing.type === "buy" ? "WANTED" : "FOR SALE"}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">{listing.title}</h3>
                  <span className="text-lg font-bold text-primary">Rs. {listing.price}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{listing.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span>{listing.category}</span>
                  <span>{listing.condition}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Posted by {listing.postedBy}</span>
                  <Link
                    href={`/services/buy-sell/${listing.id}`}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <div className="mx-auto w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No listings found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All Categories")
                setSelectedType("all")
              }}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
