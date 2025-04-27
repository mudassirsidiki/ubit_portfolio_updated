import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft, Calendar, Clock } from "lucide-react"

export default function BlogsPage() {
  // University blogs
  const universityBlogs = [
    {
      title: "Degree Application Process",
      excerpt: "Complete guide to applying for your degree certificate after graduation.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 15, 2024",
      readTime: "5 min read",
      href: "/services/blogs/university/degree-application",
    },
    {
      title: "Transcript Request Procedure",
      excerpt: "Step-by-step instructions for requesting official academic transcripts.",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 28, 2024",
      readTime: "4 min read",
      href: "/services/blogs/university/transcript-request",
    },
    {
      title: "Document Verification Process",
      excerpt: "How to get your academic documents verified by the university.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 5, 2024",
      readTime: "6 min read",
      href: "/services/blogs/university/verification-process",
    },
    {
      title: "Performa Submission Guidelines",
      excerpt: "Guidelines for filling and submitting various university performas.",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 20, 2024",
      readTime: "3 min read",
      href: "/services/blogs/university/performa-submission",
    },
    {
      title: "English Proficiency Letter Request",
      excerpt: "Process for obtaining an English proficiency letter from the university.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 3, 2024",
      readTime: "4 min read",
      href: "/services/blogs/university/english-proficiency",
    },
    {
      title: "Improvement Examination Process",
      excerpt: "How to apply for improvement examinations to enhance your grades.",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 15, 2024",
      readTime: "5 min read",
      href: "/services/blogs/university/improvement-process",
    },
    {
      title: "Supply Examination Guidelines",
      excerpt: "Complete guide to supplementary examinations for failed courses.",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 10, 2024",
      readTime: "4 min read",
      href: "/services/blogs/university/supply-process",
    },
    {
      title: "Repeater Student Process",
      excerpt: "Information for students who need to repeat courses or semesters.",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 5, 2023",
      readTime: "6 min read",
      href: "/services/blogs/university/repeater-process",
    },
    {
      title: "Short of Attendance Process (G-1 Form)",
      excerpt: "How to address attendance shortages using the G-1 Form.",
      image: "/placeholder.svg?height=400&width=600",
      date: "November 20, 2023",
      readTime: "5 min read",
      href: "/services/blogs/university/short-attendance",
    },
    {
      title: "Library Card Application",
      excerpt: "Process for obtaining and renewing your university library card.",
      image: "/placeholder.svg?height=400&width=600",
      date: "October 15, 2023",
      readTime: "3 min read",
      href: "/services/blogs/university/library-card",
    },
  ]

  // HEC blogs
  const hecBlogs = [
    {
      title: "Inter and Matric Certificate Procedure",
      excerpt: "Guide to obtaining and verifying intermediate and matriculation certificates.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 10, 2024",
      readTime: "7 min read",
      href: "/services/blogs/hec/inter-matric-certificate",
    },
    {
      title: "IBCC Equivalence Process",
      excerpt: "Complete guide to the IBCC equivalence process for board certificates.",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 20, 2024",
      readTime: "8 min read",
      href: "/services/blogs/hec/ibcc-process",
    },
    {
      title: "MOFA Document Attestation Procedure",
      excerpt: "Step-by-step guide to getting your documents attested by the Ministry of Foreign Affairs.",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 25, 2024",
      readTime: "6 min read",
      href: "/services/blogs/hec/mofa-procedure",
    },
    {
      title: "HEC Degree Verification Process",
      excerpt: "How to get your degree verified by the Higher Education Commission.",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 15, 2023",
      readTime: "5 min read",
      href: "/services/blogs/hec/degree-verification",
    },
  ]

  const categories = [
    { name: "University", count: universityBlogs.length },
    { name: "HEC", count: hecBlogs.length },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-transparent pt-20 pb-16">
      {/* Hero Section - Added for consistency with other pages */}

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
            <span className="text-white font-medium">Blogs</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blogs</h1>
            <p className="text-xl text-white/90">
              Explore comprehensive guides and resources for academic procedures. Explore comprehensive guides and
              resources for academic procedures. Explore comprehensive guides and resources for academic procedures.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* University Blogs Section - Enhanced styling */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">University Procedures</h2>
              </div>

              <div className="space-y-6">
                {universityBlogs.map((blog, index) => (
                  <Link key={index} href={blog.href} className="block">
                    <div className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row dark:border dark:border-gray-800 hover:border-primary dark:hover:border-primary-200 border border-gray-200">
                      <div className="md:w-1/3 relative">
                        <div className="aspect-w-16 aspect-h-9 md:h-full">
                          <Image
                            src={blog.image || "/placeholder.svg"}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">{blog.excerpt}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                            <Calendar className="w-4 h-4" />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                            <Clock className="w-4 h-4" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* HEC Blogs Section - Enhanced styling */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">HEC Procedures</h2>
              </div>

              <div className="space-y-6">
                {hecBlogs.map((blog, index) => (
                  <Link key={index} href={blog.href} className="block">
                    <div className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row dark:border dark:border-gray-800 hover:border-primary dark:hover:border-primary-200 border border-gray-200">
                      <div className="md:w-1/3 relative">
                        <div className="aspect-w-16 aspect-h-9 md:h-full">
                          <Image
                            src={blog.image || "/placeholder.svg"}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">{blog.excerpt}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                            <Calendar className="w-4 h-4" />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                            <Clock className="w-4 h-4" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Remove the subscription form from the sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-md dark:border dark:border-gray-800 sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Categories</h3>

              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-700 cursor-default"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{category.name}</span>
                    <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
