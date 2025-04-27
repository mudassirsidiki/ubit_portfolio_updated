"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Plus, ChevronDown, ChevronUp } from "lucide-react"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import AddResultModal from "@/components/dashboard/AddResultModal"
import { mockStudentData } from "@/lib/mock-data"

export default function ResultsPage() {
  const [studentData, setStudentData] = useState(mockStudentData)
  const [expandedSemesters, setExpandedSemesters] = useState<string[]>([studentData.semesters[0]?.id || ""])
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const toggleSemester = (semesterId: string) => {
    setExpandedSemesters((prev) =>
      prev.includes(semesterId) ? prev.filter((id) => id !== semesterId) : [...prev, semesterId],
    )
  }

  const expandAllSemesters = () => {
    setExpandedSemesters(studentData.semesters.map((sem) => sem.id))
  }

  const collapseAllSemesters = () => {
    setExpandedSemesters([])
  }

  const handleAddResult = (newResult: any) => {
    // Find the semester to add the course to
    const updatedSemesters = [...studentData.semesters]
    const semesterIndex = updatedSemesters.findIndex((sem) => sem.id === newResult.semesterId)

    if (semesterIndex !== -1) {
      // Add the new course
      updatedSemesters[semesterIndex].courses.push({
        id: `course-${Date.now()}`,
        name: newResult.courseName || "",
        code: newResult.courseNumber || "",
        marks: newResult.totalMarks || 0,
        practicalMarks: newResult.practicalMarks,
        creditHours: newResult.creditHours || 0,
        teacher: newResult.teacherName || "",
        assistant: newResult.assistantName || "",
      })

      // Recalculate semester GPA (simplified calculation)
      const totalMarks = updatedSemesters[semesterIndex].courses.reduce(
        (sum, course) => sum + (course.marks || 0) * (course.creditHours || 0),
        0,
      )
      const totalCreditHours = updatedSemesters[semesterIndex].courses.reduce(
        (sum, course) => sum + (course.creditHours || 0),
        0,
      )

      updatedSemesters[semesterIndex].gpa = totalCreditHours > 0 ? totalMarks / totalCreditHours / 25 : 0

      // Recalculate CGPA
      const allCourses = updatedSemesters.flatMap((semester) => semester.courses)
      const overallTotalMarks = allCourses.reduce(
        (sum, course) => sum + (course.marks || 0) * (course.creditHours || 0),
        0,
      )
      const overallCreditHours = allCourses.reduce((sum, course) => sum + (course.creditHours || 0), 0)

      const newCGPA = overallCreditHours > 0 ? overallTotalMarks / overallCreditHours / 25 : 0

      setStudentData({
        ...studentData,
        semesters: updatedSemesters,
        cgpa: newCGPA,
      })

      // Expand the semester where the course was added
      if (!expandedSemesters.includes(newResult.semesterId)) {
        setExpandedSemesters([...expandedSemesters, newResult.semesterId])
      }
    }

    setIsAddModalOpen(false)
  }

  // Filter courses based on search term
  const filteredSemesters = studentData.semesters
    .map((semester) => ({
      ...semester,
      courses: semester.courses.filter(
        (course) =>
          (course.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
          (course.code || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
          (course.teacher || "").toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((semester) => semester.courses.length > 0)

  return (
    <DashboardLayout title="Detailed Results" activeTab="results">
      <div className="p-6">
        <div className="flex flex-col mb-8">
          <Link
            href="/dashboard/result-storage"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Detailed Results</h1>

            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <button
                onClick={expandAllSemesters}
                className="text-sm text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-200"
              >
                Expand All
              </button>
              <button
                onClick={collapseAllSemesters}
                className="text-sm text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-200"
              >
                Collapse All
              </button>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-md"
              >
                <Plus className="w-4 h-4" />
                Add Result
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filter - REMOVED */}

        {/* Results List */}
        <div className="space-y-6">
          {filteredSemesters.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center border border-gray-100 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400">No results found matching your search criteria.</p>
            </div>
          ) : (
            filteredSemesters.map((semester) => (
              <div
                key={semester.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <div
                  className="p-4 bg-gray-50 dark:bg-gray-700 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSemester(semester.id)}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{semester.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>GPA: {semester.gpa.toFixed(2)}</span>
                      <span>CGPA: {studentData.cgpa.toFixed(2)}</span>
                      <span>{semester.courses.length} Courses</span>
                    </div>
                  </div>
                  <div>
                    {expandedSemesters.includes(semester.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </div>

                {expandedSemesters.includes(semester.id) && (
                  <div className="p-4">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                              Course
                            </th>
                            <th className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                              Code
                            </th>
                            <th className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                              Marks
                            </th>
                            <th className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                              Practical
                            </th>
                            <th className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                              Credit Hours
                            </th>
                            <th className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                              Teacher
                            </th>
                            <th className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                              Assistant
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                          {semester.courses.map((course) => (
                            <tr key={course.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                {course.name || "Untitled Course"}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                {course.code || "N/A"}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                {course.marks || 0}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                {course.practicalMarks || "N/A"}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                {course.creditHours || 0}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                {course.teacher || "N/A"}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                {course.assistant || "N/A"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex flex-wrap gap-6">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Semester GPA</p>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">
                            {semester.gpa.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Cumulative GPA</p>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">
                            {studentData.cgpa.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Total Credit Hours</p>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">
                            {semester.courses.reduce((sum, course) => sum + (course.creditHours || 0), 0)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Floating Add Button (Mobile) */}
        <div className="md:hidden fixed bottom-6 right-6">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>

        {/* Add Result Modal */}
        <AddResultModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddResult}
          semesters={studentData.semesters || []}
        />
      </div>
    </DashboardLayout>
  )
}
