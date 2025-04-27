import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft, Github, Code, MessageSquare } from "lucide-react"

// Define the subcategories
const subcategories = [
  {
    title: "Job Portal",
    description: "Access exclusive job listings from partner companies",
    image: "/placeholder.svg?height=400&width=400",
    href: "/services/employer-connection/job-portal",
  },
  {
    title: "Career Fairs",
    description: "Information about upcoming career fairs and networking events",
    image: "/placeholder.svg?height=400&width=400",
    href: "/services/employer-connection/career-fairs",
  },
  {
    title: "Internship Programs",
    description: "Explore internship opportunities with industry partners",
    image: "/placeholder.svg?height=400&width=400",
    href: "/services/employer-connection/internships",
  },
  {
    title: "Resume Building",
    description: "Resources and tools for creating effective resumes",
    image: "/placeholder.svg?height=400&width=400",
    href: "/services/employer-connection/resume-building",
  },
]

export default function EmployerConnectionPage() {
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
            <span>Employer Connection</span>
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

        <h1 className="text-4xl font-bold text-primary mb-4">Employer Connection</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Connect with potential employers and explore career opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
