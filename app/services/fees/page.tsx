import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft } from "lucide-react"

export default function FeesInformationPage() {
  const feeStructure = [
    {
      program: "Bachelor's Programs",
      perSemester: "PKR 45,000",
      admissionFee: "PKR 25,000",
      examFee: "PKR 5,000",
    },
    {
      program: "Master's Programs",
      perSemester: "PKR 60,000",
      admissionFee: "PKR 30,000",
      examFee: "PKR 7,500",
    },
    {
      program: "PhD Programs",
      perSemester: "PKR 80,000",
      admissionFee: "PKR 40,000",
      examFee: "PKR 10,000",
    },
    {
      program: "Certificate Courses",
      perSemester: "PKR 30,000",
      admissionFee: "PKR 15,000",
      examFee: "PKR 3,000",
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
            <span>Fees Information</span>
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

        <h1 className="text-4xl font-bold text-primary mb-6">Fees Information</h1>
        <p className="text-xl text-gray-600 mb-8">
          Comprehensive details about tuition fees, payment methods, and deadlines
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-6">Fee Structure</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-3 text-left">Program</th>
                  <th className="border border-gray-200 p-3 text-left">Per Semester</th>
                  <th className="border border-gray-200 p-3 text-left">Admission Fee</th>
                  <th className="border border-gray-200 p-3 text-left">Examination Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-200 p-3">{item.program}</td>
                    <td className="border border-gray-200 p-3">{item.perSemester}</td>
                    <td className="border border-gray-200 p-3">{item.admissionFee}</td>
                    <td className="border border-gray-200 p-3">{item.examFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p>* All fees are subject to change without prior notice</p>
            <p>* Additional charges may apply for laboratory courses, field trips, and special programs</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Payment Methods</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Bank Transfer</h3>
                <p className="text-gray-600">
                  Fees can be paid through direct bank transfer to the university account.
                </p>
                <div className="mt-2 bg-gray-50 p-3 rounded text-sm">
                  <p>
                    <strong>Bank:</strong> Bank Al-Falah
                  </p>
                  <p>
                    <strong>Account Title:</strong> UBIT University
                  </p>
                  <p>
                    <strong>Account Number:</strong> 0123-4567-8901-2345
                  </p>
                  <p>
                    <strong>Branch Code:</strong> 0123
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Online Payment</h3>
                <p className="text-gray-600">
                  Pay your fees online through our secure payment portal using credit/debit cards.
                </p>
                <Link
                  href="#"
                  className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors"
                >
                  Pay Online
                </Link>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">On-Campus Payment</h3>
                <p className="text-gray-600">Visit the Finance Office at the Admin Block to pay your fees in person.</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Timings:</strong> Monday to Friday, 9:00 AM to 3:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Payment Schedule</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Fall Semester</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Regular Payment Deadline</span>
                    <span className="font-medium">August 15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Late Payment (with 5% surcharge)</span>
                    <span className="font-medium">August 16-31</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Late Payment (with 10% surcharge)</span>
                    <span className="font-medium">September 1-15</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Spring Semester</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Regular Payment Deadline</span>
                    <span className="font-medium">January 15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Late Payment (with 5% surcharge)</span>
                    <span className="font-medium">January 16-31</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Late Payment (with 10% surcharge)</span>
                    <span className="font-medium">February 1-15</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Summer Semester</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Regular Payment Deadline</span>
                    <span className="font-medium">May 15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Late Payment (with 5% surcharge)</span>
                    <span className="font-medium">May 16-31</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Fee Refund Policy</h2>

          <div className="flex gap-8 items-center">
            <div className="w-1/2">
              <p className="text-gray-600 mb-4">
                Students who withdraw from courses or the university may be eligible for a partial refund of tuition
                fees, depending on the timing of withdrawal.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Before Semester Start</h3>
                  <p className="text-gray-600">
                    100% refund if withdrawal is requested before the first day of classes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">First Week of Classes</h3>
                  <p className="text-gray-600">
                    75% refund if withdrawal is requested within the first week of classes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Second Week of Classes</h3>
                  <p className="text-gray-600">
                    50% refund if withdrawal is requested within the second week of classes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">After Second Week</h3>
                  <p className="text-gray-600">No refund will be provided after the second week of classes.</p>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Finance Office"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
