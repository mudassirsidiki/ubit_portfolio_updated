import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft, Calendar, Clock, User, FileText, BookOpen } from "lucide-react"

export default function AcademicBlogsPage() {
  // University blogs
  const universityBlogs = [
    {
      title: "Degree Application Process",
      excerpt: "Complete guide to applying for your degree certificate after graduation.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Academic Affairs Office",
      date: "March 15, 2024",
      readTime: "5 min read",
      href: "/services/academic-blogs/university/degree-application",
    },
    {
      title: "Transcript Request Procedure",
      excerpt: "Step-by-step instructions for requesting official academic transcripts.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Examination Department",
      date: "February 28, 2024",
      readTime: "4 min read",
      href: "/services/academic-blogs/university/transcript-request",
    },
    {
      title: "Document Verification Process",
      excerpt: "How to get your academic documents verified by the university.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Verification Cell",
      date: "April 5, 2024",
      readTime: "6 min read",
      href: "/services/academic-blogs/university/verification-process",
    },
    {
      title: "Performa Submission Guidelines",
      excerpt: "Guidelines for filling and submitting various university performas.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Student Affairs Department",
      date: "January 20, 2024",
      readTime: "3 min read",
      href: "/services/academic-blogs/university/performa-submission",
    },
    {
      title: "English Proficiency Letter Request",
      excerpt: "Process for obtaining an English proficiency letter from the university.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Language Department",
      date: "March 3, 2024",
      readTime: "4 min read",
      href: "/services/academic-blogs/university/english-proficiency",
    },
    {
      title: "Improvement Examination Process",
      excerpt: "How to apply for improvement examinations to enhance your grades.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Examination Department",
      date: "February 15, 2024",
      readTime: "5 min read",
      href: "/services/academic-blogs/university/improvement-process",
    },
    {
      title: "Supply Examination Guidelines",
      excerpt: "Complete guide to supplementary examinations for failed courses.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Examination Department",
      date: "January 10, 2024",
      readTime: "4 min read",
      href: "/services/academic-blogs/university/supply-process",
    },
    {
      title: "Repeater Student Process",
      excerpt: "Information for students who need to repeat courses or semesters.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Academic Affairs Office",
      date: "December 5, 2023",
      readTime: "6 min read",
      href: "/services/academic-blogs/university/repeater-process",
    },
    {
      title: "Short of Attendance Process (G-1 Form)",
      excerpt: "How to address attendance shortages using the G-1 Form.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Student Affairs Department",
      date: "November 20, 2023",
      readTime: "5 min read",
      href: "/services/academic-blogs/university/short-attendance",
    },
    {
      title: "Library Card Application",
      excerpt: "Process for obtaining and renewing your university library card.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Library Department",
      date: "October 15, 2023",
      readTime: "3 min read",
      href: "/services/academic-blogs/university/library-card",
    },
  ]

  // HEC blogs
  const hecBlogs = [
    {
      title: "Inter and Matric Certificate Procedure",
      excerpt: "Guide to obtaining and verifying intermediate and matriculation certificates.",
      image: "/placeholder.svg?height=400&width=600",
      author: "HEC Documentation Cell",
      date: "March 10, 2024",
      readTime: "7 min read",
      href: "/services/academic-blogs/hec/inter-matric-certificate",
    },
    {
      title: "IBCC Equivalence Process",
      excerpt: "Complete guide to the IBCC equivalence process for board certificates.",
      image: "/placeholder.svg?height=400&width=600",
      author: "IBCC Liaison Office",
      date: "February 20, 2024",
      readTime: "8 min read",
      href: "/services/academic-blogs/hec/ibcc-process",
    },
    {
      title: "MOFA Document Attestation Procedure",
      excerpt: "Step-by-step guide to getting your documents attested by the Ministry of Foreign Affairs.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Foreign Affairs Liaison",
      date: "January 25, 2024",
      readTime: "6 min read",
      href: "/services/academic-blogs/hec/mofa-procedure",
    },
    {
      title: "HEC Degree Verification Process",
      excerpt: "How to get your degree verified by the Higher Education Commission.",
      image: "/placeholder.svg?height=400&width=600",
      author: "HEC Verification Department",
      date: "December 15, 2023",
      readTime: "5 min read",
      href: "/services/academic-blogs/hec/degree-verification",
    },
  ]

  const categories = [
    { name: "University", count: universityBlogs.length },
    { name: "HEC", count: hecBlogs.length },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-transparent pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="bg-primary text-white py-3">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Academic Blogs</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/services" className="flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Academic Blogs</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Explore comprehensive guides and resources for academic procedures. Our platform features detailed
              instructions for university processes and HEC requirements to help you navigate your academic journey.
            </p>

            {/* University Blogs Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">University Procedures</h2>
              </div>

              <div className="space-y-8">
                {universityBlogs.map((blog, index) => (
                  <Link key={index} href={blog.href} className="block">
                    <div className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row dark:border dark:border-gray-800">
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
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-primary transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{blog.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
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

            {/* HEC Blogs Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">HEC Procedures</h2>
              </div>

              <div className="space-y-8">
                {hecBlogs.map((blog, index) => (
                  <Link key={index} href={blog.href} className="block">
                    <div className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row dark:border dark:border-gray-800">
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
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-primary transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{blog.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
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

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-sm dark:border dark:border-gray-800 sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Categories</h3>

              <div className="space-y-2">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/services/academic-blogs/category/${category.name.toLowerCase()}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
