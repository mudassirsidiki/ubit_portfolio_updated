import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft } from "lucide-react"

export default function TranscriptRequestPage() {
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
            <Link href="/services/result-transcript-academics" className="hover:underline">
              Result Transcript & Academics
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Transcript Request</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/services/result-transcript-academics"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Result Transcript & Academics
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-6">Transcript Request</h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 hover:shadow-md transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg text-gray-700 mb-6">
                This page provides information about requesting official and unofficial transcripts.
              </p>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p className="text-gray-600 mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Transcript Request"
                  width={600}
                  height={400}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
          <h2 className="text-xl font-semibold mb-4">Contribute to This Page</h2>
          <p className="text-gray-600 mb-4">
            Is this information outdated or incomplete? Help us improve this page by contributing your knowledge and
            expertise.
          </p>
          <Link
            href="#"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all hover:shadow-md"
          >
            Suggest Improvements
          </Link>
        </div>
      </div>
    </div>
  )
}
