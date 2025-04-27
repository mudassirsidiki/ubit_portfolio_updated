import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft } from "lucide-react"

export default function FinancialAidPage() {
  const scholarships = [
    {
      name: "Merit-Based Scholarship",
      description: "Awarded to students with outstanding academic performance. Covers up to 100% of tuition fees.",
      eligibility: "CGPA of 3.5 or higher",
      deadline: "August 15, 2024",
    },
    {
      name: "Need-Based Scholarship",
      description:
        "Provided to students with financial constraints. Covers partial tuition fees based on need assessment.",
      eligibility: "Demonstrated financial need",
      deadline: "July 30, 2024",
    },
    {
      name: "Sports Scholarship",
      description: "Available for students with exceptional sports achievements representing the university.",
      eligibility: "National or international sports representation",
      deadline: "September 1, 2024",
    },
    {
      name: "Research Grants",
      description: "Funding opportunities for students engaged in research projects under faculty supervision.",
      eligibility: "Research proposal approval by faculty",
      deadline: "Rolling basis",
    },
  ]

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
            <span>Financial Aid</span>
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

        <h1 className="text-4xl font-bold text-primary mb-6">Financial Aid</h1>
        <p className="text-xl text-gray-600 mb-8">Explore financial assistance options available to students</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-6">Available Scholarships</h2>
          <p className="text-gray-600 mb-8">
            Our university offers various scholarships to support students in their academic journey. Below are the
            details of available scholarships, eligibility criteria, and application process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{scholarship.name}</h3>
                <p className="text-gray-600 mb-4">{scholarship.description}</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Eligibility:</strong> {scholarship.eligibility}
                  </p>
                  <p>
                    <strong>Application Deadline:</strong> {scholarship.deadline}
                  </p>
                </div>
                <Link href="#" className="text-primary hover:underline mt-3 inline-block">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Application Process</h2>

          <div className="flex gap-8 items-center mb-8">
            <div className="w-1/2">
              <p className="text-gray-600 mb-4">
                The financial aid application process is designed to be straightforward and accessible to all students.
                Follow these steps to apply for financial assistance:
              </p>
              <ol className="list-decimal pl-5 text-gray-600 space-y-2">
                <li>Complete the online application form</li>
                <li>Submit required documentation</li>
                <li>Attend the interview (if required)</li>
                <li>Await the decision from the Financial Aid Committee</li>
              </ol>
            </div>
            <div className="w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Financial Aid Office"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Important Dates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Fall Semester Applications</p>
                <p className="text-gray-600">Open: June 1 - Close: July 15</p>
              </div>
              <div>
                <p className="font-medium">Spring Semester Applications</p>
                <p className="text-gray-600">Open: November 1 - Close: December 15</p>
              </div>
              <div>
                <p className="font-medium">Summer Semester Applications</p>
                <p className="text-gray-600">Open: April 1 - Close: April 30</p>
              </div>
              <div>
                <p className="font-medium">Results Announcement</p>
                <p className="text-gray-600">Within 3 weeks after closing date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
