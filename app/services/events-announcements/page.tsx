import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft, Github, Code, MessageSquare, Calendar, Clock } from "lucide-react"

// Define the subcategories
const subcategories = [
  {
    title: "Academic Calendar",
    description: "Important dates and deadlines for the academic year",
    image: "/placeholder.svg?height=400&width=400",
    href: "/services/events-announcements/academic-calendar",
  },
  {
    title: "Campus Events",
    description: "Information about upcoming events on campus",
    image: "/placeholder.svg?height=400&width=400",
    href: "/services/events-announcements/campus-events",
  },
  {
    title: "Workshops & Seminars",
    description: "Schedule of educational workshops and seminars",
    image: "/placeholder.svg?height=400&width=400",
    href: "/services/events-announcements/workshops",
  },
  {
    title: "News & Updates",
    description: "Latest news and updates from the university",
    image: "/placeholder.svg?height=400&width=400",
    href: "/services/events-announcements/news",
  },
]

// Define the featured blogs
const featuredBlogs = [
  {
    title: "Understanding Academic Processes",
    description: "A comprehensive guide to navigating university academic processes",
    image: "/placeholder.svg?height=400&width=600",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    href: "/services/events-announcements/academic-processes",
  },
  {
    title: "Tips for Effective Course Registration",
    description: "Strategic approaches to ensure a smooth course registration experience",
    image: "/placeholder.svg?height=400&width=600",
    author: "Prof. Michael Chen",
    date: "February 28, 2024",
    readTime: "4 min read",
    href: "/services/events-announcements/course-registration-tips",
  },
  {
    title: "How to Appeal a Grade Successfully",
    description: "Step-by-step guide to the grade appeal process",
    image: "/placeholder.svg?height=400&width=600",
    author: "Dr. Emily Rodriguez",
    date: "April 5, 2024",
    readTime: "6 min read",
    href: "/services/events-announcements/grade-appeal-guide",
  },
]

export default function EventsAnnouncementsPage() {
  return (
    <div className="min-h-screen bg-secondary/30 pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="bg-primary text-white py-3">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#servicesSection" className="hover:underline">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Events & Announcements</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/#servicesSection" className="flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">Events & Announcements</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Stay updated with university events and important announcements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {subcategories.map((subcategory, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={subcategory.image || "/placeholder.svg"}
                  alt={subcategory.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {subcategory.title}
                </h2>
                <p className="text-gray-600 mb-4">{subcategory.description}</p>
                <Link
                  href={subcategory.href}
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all hover:shadow-md"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Blogs Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Featured Blogs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                    <Link href={blog.href}>{blog.title}</Link>
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">{blog.description}</p>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt={blog.author}
                        width={50}
                        height={50}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-700">{blog.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services/events-announcements/all-blogs"
              className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all hover:shadow-md"
            >
              View All Blogs
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-primary" />
            Want to Contribute?
          </h2>
          <p className="text-gray-600 mb-6">
            UBIT is an open-source platform built by students, for students. We're always looking for contributors to
            help improve and expand our services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-4 rounded-lg hover:border-primary hover:shadow-sm transition-all">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Github className="w-4 h-4 text-primary" />
                Contribute Code
              </h3>
              <p className="text-sm text-gray-600">
                Found a bug or have a feature idea? Fork our repository and submit a pull request.
              </p>
              <Link href="#" className="text-primary text-sm hover:underline mt-2 inline-block">
                View GitHub Repository
              </Link>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg hover:border-primary hover:shadow-sm transition-all">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Suggest Improvements
              </h3>
              <p className="text-sm text-gray-600">
                Have ideas for improving existing features? Share your thoughts with our team.
              </p>
              <Link href="#" className="text-primary text-sm hover:underline mt-2 inline-block">
                Submit Feedback
              </Link>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg hover:border-primary hover:shadow-sm transition-all">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                Join Development
              </h3>
              <p className="text-sm text-gray-600">
                Want to be part of our development team? We're always looking for talented developers.
              </p>
              <Link href="#" className="text-primary text-sm hover:underline mt-2 inline-block">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
