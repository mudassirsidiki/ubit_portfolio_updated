"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, GraduationCap, FileText } from "lucide-react"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import SemesterGPAChart from "@/components/dashboard/SemesterGPAChart"
import SubjectMarksChart from "@/components/dashboard/SubjectMarksChart"
import { mockStudentData } from "@/lib/mock-data"

export default function ResultStorageDashboard() {
  const [studentData, setStudentData] = useState(mockStudentData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Prepare data for the semester GPA chart
  const semesterGPAData = studentData.semesters.map((semester) => ({
    semester: semester.name,
    gpa: semester.gpa,
  }))

  // Prepare data for the subject marks chart (using the most recent semester)
  const mostRecentSemester = studentData.semesters[studentData.semesters.length - 1]
  const subjectMarksData = mostRecentSemester.courses.map((course) => ({
    subject: course.name,
    marks: course.marks,
    totalMarks: 100, // Assuming total marks is 100
  }))

  return (
    <DashboardLayout title="Academic Dashboard" activeTab="dashboard">
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <p className="text-gray-600 dark:text-gray-300">View and manage your academic performance</p>
          </div>
          <Link
            href="/dashboard/result-storage/results"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-md"
          >
            <span>View Detailed Results</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-gray-800 animate-pulse h-32 rounded-xl border border-gray-200 dark:border-gray-700"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Current CGPA</h3>
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{studentData.cgpa.toFixed(2)}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Out of 4.0 scale • {studentData.semesters.length} semesters
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Courses</h3>
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {studentData.semesters.reduce((total, semester) => total + semester.courses.length, 0)}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Across {studentData.semesters.length} semesters
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Current Semester</h3>
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {mostRecentSemester.name.split(" ")[0]}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                GPA: {mostRecentSemester.gpa.toFixed(2)} • {mostRecentSemester.courses.length} courses
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Credit Hours</h3>
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                  <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {studentData.semesters.reduce(
                  (total, semester) =>
                    total + semester.courses.reduce((sum, course) => sum + (course.creditHours || 0), 0),
                  0,
                )}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Total completed credit hours</p>
            </div>
          </div>
        )}

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">GPA Progression</h3>
            {isLoading ? (
              <div className="h-[300px] bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg"></div>
            ) : (
              <SemesterGPAChart data={semesterGPAData} />
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Subject Marks</h3>
            {isLoading ? (
              <div className="h-[300px] bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg"></div>
            ) : (
              <SubjectMarksChart data={subjectMarksData} />
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
