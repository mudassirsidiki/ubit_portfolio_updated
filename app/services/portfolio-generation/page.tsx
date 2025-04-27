import Link from "next/link"
import { ChevronRight, ArrowLeft, FileText, Briefcase } from "lucide-react"

export default function PortfolioGenerationPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Breadcrumb */}
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
            <span className="text-white font-medium">Portfolio Generation</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-black to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        </div>
        <div className="container-custom relative z-10 py-16">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio Generation</h1>
            <p className="text-xl text-white/90">
              Create a professional portfolio in minutes to showcase your skills, projects, and experience.
            </p>
            <Link
              href="/services/portfolio-generation/generate"
              className="mt-8 bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Create Your Portfolio
            </Link>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/services" className="flex items-center gap-2 text-lg text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-black rounded-2xl shadow-sm p-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Simple Portfolio Creation</h2>
            <p className="text-gray-600 mb-4">
              Our portfolio generator makes it easy to create a professional portfolio in minutes. Just fill out a
              simple form with your information, and we'll generate a beautiful portfolio website for you.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span className="text-gray-600">No coding required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span className="text-gray-600">Professional design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span className="text-gray-600">Mobile-responsive</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span className="text-gray-600">Easy to share</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-black rounded-2xl shadow-sm p-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Stand Out to Employers</h2>
            <p className="text-gray-600 mb-4">
              A professional portfolio helps you stand out to potential employers and clients. Showcase your skills,
              projects, and experience in a visually appealing way.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span className="text-gray-600">Highlight your best work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span className="text-gray-600">Showcase your skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span className="text-gray-600">Share your experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span className="text-gray-600">Make a lasting impression</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-black rounded-2xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Create Your Portfolio?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get started with our easy-to-use portfolio generator. Fill out a simple form, and we'll create a
            professional portfolio website for you in minutes.
          </p>
          <Link
            href="/services/portfolio-generation/generate"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Create Your Portfolio Now
          </Link>
        </div>
      </div>
    </div>
  )
}
