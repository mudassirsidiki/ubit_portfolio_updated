"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface Semester {
  id: string
  name: string
  [key: string]: any
}

interface AddResultModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (result: any) => void
  semesters: Semester[]
}

export default function AddResultModal({ isOpen, onClose, onAdd, semesters = [] }: AddResultModalProps) {
  const [formData, setFormData] = useState({
    semesterId: semesters && semesters.length > 0 ? semesters[0]?.id || "" : "",
    courseName: "",
    courseNumber: "",
    totalMarks: "",
    practicalMarks: "",
    teacherName: "",
    assistantName: "",
    creditHours: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  if (!isOpen) return null

  // If there are no semesters, show a message
  if (!semesters || semesters.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add New Result</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            No semesters available. Please add a semester before adding results.
          </p>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.semesterId) {
      newErrors.semesterId = "Please select a semester"
    }

    if (!formData.courseName.trim()) {
      newErrors.courseName = "Course name is required"
    }

    if (!formData.courseNumber.trim()) {
      newErrors.courseNumber = "Course number is required"
    }

    if (!formData.totalMarks.trim()) {
      newErrors.totalMarks = "Total marks are required"
    } else if (
      isNaN(Number(formData.totalMarks)) ||
      Number(formData.totalMarks) < 0 ||
      Number(formData.totalMarks) > 100
    ) {
      newErrors.totalMarks = "Total marks must be a number between 0 and 100"
    }

    if (
      formData.practicalMarks.trim() &&
      (isNaN(Number(formData.practicalMarks)) ||
        Number(formData.practicalMarks) < 0 ||
        Number(formData.practicalMarks) > 100)
    ) {
      newErrors.practicalMarks = "Practical marks must be a number between 0 and 100"
    }

    if (!formData.creditHours.trim()) {
      newErrors.creditHours = "Credit hours are required"
    } else if (isNaN(Number(formData.creditHours)) || Number(formData.creditHours) <= 0) {
      newErrors.creditHours = "Credit hours must be a positive number"
    }

    if (!formData.teacherName.trim()) {
      newErrors.teacherName = "Teacher name is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onAdd({
        ...formData,
        totalMarks: Number(formData.totalMarks),
        practicalMarks: formData.practicalMarks ? Number(formData.practicalMarks) : 0,
        creditHours: Number(formData.creditHours),
      })

      // Reset form
      setFormData({
        semesterId: semesters[0]?.id || "",
        courseName: "",
        courseNumber: "",
        totalMarks: "",
        practicalMarks: "",
        teacherName: "",
        assistantName: "",
        creditHours: "",
      })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add New Result</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="semesterId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Semester
              </label>
              <select
                id="semesterId"
                name="semesterId"
                value={formData.semesterId}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.semesterId ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white`}
              >
                {semesters.map((semester) => (
                  <option key={semester.id} value={semester.id}>
                    {semester.name}
                  </option>
                ))}
              </select>
              {errors.semesterId && <p className="mt-1 text-sm text-red-500">{errors.semesterId}</p>}
            </div>

            <div>
              <label htmlFor="courseName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.courseName ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white`}
                placeholder="e.g. Database Systems"
              />
              {errors.courseName && <p className="mt-1 text-sm text-red-500">{errors.courseName}</p>}
            </div>

            <div>
              <label htmlFor="courseNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Course Number
              </label>
              <input
                type="text"
                id="courseNumber"
                name="courseNumber"
                value={formData.courseNumber}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.courseNumber ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white`}
                placeholder="e.g. CS-301"
              />
              {errors.courseNumber && <p className="mt-1 text-sm text-red-500">{errors.courseNumber}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="totalMarks" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Total Marks
                </label>
                <input
                  type="number"
                  id="totalMarks"
                  name="totalMarks"
                  value={formData.totalMarks}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className={`w-full px-3 py-2 border ${
                    errors.totalMarks ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white`}
                  placeholder="e.g. 85"
                />
                {errors.totalMarks && <p className="mt-1 text-sm text-red-500">{errors.totalMarks}</p>}
              </div>

              <div>
                <label
                  htmlFor="practicalMarks"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Practical Marks
                </label>
                <input
                  type="number"
                  id="practicalMarks"
                  name="practicalMarks"
                  value={formData.practicalMarks}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className={`w-full px-3 py-2 border ${
                    errors.practicalMarks ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white`}
                  placeholder="e.g. 90"
                />
                {errors.practicalMarks && <p className="mt-1 text-sm text-red-500">{errors.practicalMarks}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="creditHours" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Credit Hours
              </label>
              <input
                type="number"
                id="creditHours"
                name="creditHours"
                value={formData.creditHours}
                onChange={handleChange}
                min="1"
                step="1"
                className={`w-full px-3 py-2 border ${
                  errors.creditHours ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white`}
                placeholder="e.g. 3"
              />
              {errors.creditHours && <p className="mt-1 text-sm text-red-500">{errors.creditHours}</p>}
            </div>

            <div>
              <label htmlFor="teacherName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Teacher Name
              </label>
              <input
                type="text"
                id="teacherName"
                name="teacherName"
                value={formData.teacherName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.teacherName ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white`}
                placeholder="e.g. Dr. John Smith"
              />
              {errors.teacherName && <p className="mt-1 text-sm text-red-500">{errors.teacherName}</p>}
            </div>

            <div>
              <label
                htmlFor="assistantName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Assistant Name
              </label>
              <input
                type="text"
                id="assistantName"
                name="assistantName"
                value={formData.assistantName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                placeholder="e.g. Jane Doe"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Add Result
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
