import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="bg-primary text-white py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-md">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-3xl font-bold mb-4">
              Our Story
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering Students Through Technology
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              UBIT is a student-driven platform designed to streamline academic processes, connect students with
              opportunities, and foster a collaborative learning environment. Built by students, for students, our
              mission is to enhance the university experience through innovative digital solutions.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/images/about.jpg?height=600&width=800"
                alt="UBIT Team"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-xl font-semibold">Building the future of education technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision & Mission */}
        <div className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-md dark:border dark:border-gray-800 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:shadow-md transition-all border-l-4 border-primary">
              <h3 className="font-semibold text-2xl mb-4 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To create a seamless digital ecosystem that empowers students to excel academically, connect
                professionally, and grow personally. We envision a university experience where technology removes
                barriers, enhances learning, and prepares students for the challenges of tomorrow.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:shadow-md transition-all border-l-4 border-primary">
              <h3 className="font-semibold text-2xl mb-4 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To develop and maintain open-source solutions that address real student needs, foster collaboration
                between students and faculty, and create opportunities for hands-on learning in software development and
                design. We're committed to accessibility, security, and continuous improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Team - Updated with specific team member names */}
        <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { id: 1, name: "Mudassir Ahmed Siddiqui" },
              { id: 2, name: "Mubashir Ahmed Siddiqui" },
              { id: 3, name: "Mubashir Ali Minhas" },
            ].map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${encodeURIComponent(member.name)}`}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">Role / Position</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Brief description about the team member and their contribution to the project.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
