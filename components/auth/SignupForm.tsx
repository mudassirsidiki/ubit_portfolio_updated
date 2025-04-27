"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Upload } from "lucide-react"
import Image from "next/image"

// Form step components
const PersonalInfoStep = ({ formData, handleChange, error }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-2">
      <label htmlFor="fullName" className="block text-sm font-medium text-gray-500">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Enter your full name"
        required
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="email" className="block text-sm font-medium text-gray-500">
        Email ID <span className="text-red-500">*</span>
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Enter your email"
        required
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="password" className="block text-sm font-medium text-gray-500">
        Password <span className="text-red-500">*</span>
      </label>
      <input
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Create a password"
        required
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-500">
        Confirm Password <span className="text-red-500">*</span>
      </label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Confirm your password"
        required
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="fatherName" className="block text-sm font-medium text-gray-500">
        Father's Name <span className="text-red-500">*</span>
      </label>
      <input
        id="fatherName"
        name="fatherName"
        type="text"
        value={formData.fatherName}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Enter your father's name"
        required
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="cellNumber" className="block text-sm font-medium text-gray-500">
        Cell Number <span className="text-red-500">*</span>
      </label>
      <input
        id="cellNumber"
        name="cellNumber"
        type="tel"
        value={formData.cellNumber}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Enter your cell number"
        required
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-500">
        Date of Birth <span className="text-red-500">*</span>
      </label>
      <input
        id="dateOfBirth"
        name="dateOfBirth"
        type="date"
        value={formData.dateOfBirth}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        required
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="city" className="block text-sm font-medium text-gray-500">
        City of Residence <span className="text-red-500">*</span>
      </label>
      <input
        id="city"
        name="city"
        type="text"
        value={formData.city}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Enter your city"
        required
      />
    </div>

    <div className="space-y-2 md:col-span-2">
      <label htmlFor="permanentAddress" className="block text-sm font-medium text-gray-500">
        Permanent Address <span className="text-red-500">*</span>
      </label>
      <textarea
        id="permanentAddress"
        name="permanentAddress"
        value={formData.permanentAddress}
        onChange={handleChange}
        rows={3}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Enter your permanent address"
        required
      ></textarea>
    </div>

    <div className="space-y-2 md:col-span-2">
      <label htmlFor="mailingAddress" className="block text-sm font-medium text-gray-500">
        Mailing Address <span className="text-red-500">*</span>
      </label>
      <textarea
        id="mailingAddress"
        name="mailingAddress"
        value={formData.mailingAddress}
        onChange={handleChange}
        rows={3}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Enter your mailing address"
        required
      ></textarea>
    </div>
  </div>
)

const AcademicInfoStep = ({ formData, handleChange, error }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-2">
      <label htmlFor="batch" className="block text-sm font-medium text-gray-500">
        Batch <span className="text-red-500">*</span>
      </label>
      <input
        id="batch"
        name="batch"
        type="text"
        value={formData.batch}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Enter your batch (e.g., 2023)"
        required
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="section" className="block text-sm font-medium text-gray-500">
        Section <span className="text-red-500">*</span>
      </label>
      <input
        id="section"
        name="section"
        type="text"
        value={formData.section}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Enter your section (e.g., A, B, C)"
        required
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="shift" className="block text-sm font-medium text-gray-500">
        Shift <span className="text-red-500">*</span>
      </label>
      <select
        id="shift"
        name="shift"
        value={formData.shift}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        required
      >
        <option value="">Select Shift</option>
        <option value="Morning">Morning</option>
        <option value="Evening">Evening</option>
      </select>
    </div>

    <div className="space-y-2">
      <label htmlFor="gender" className="block text-sm font-medium text-gray-500">
        Gender <span className="text-red-500">*</span>
      </label>
      <select
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div className="space-y-2">
      <label htmlFor="seatNumber" className="block text-sm font-medium text-gray-500">
        Seat Number <span className="text-red-500">*</span>
      </label>
      <input
        id="seatNumber"
        name="seatNumber"
        type="text"
        value={formData.seatNumber}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Enter your seat number"
        required
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="program" className="block text-sm font-medium text-gray-500">
        Program <span className="text-red-500">*</span>
      </label>
      <select
        id="program"
        name="program"
        value={formData.program}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Enter your program"
        required
      >
        <option value="">Select Program</option>
        <option value="BSCS">BS Computer Science</option>
        <option value="BSSE">BS Software Engineering</option>
        <option value="BSIT">BS Information Technology</option>
        <option value="MCS">Master of Computer Science</option>
        <option value="MIT">Master of Information Technology</option>
      </select>
    </div>

    <div className="space-y-2">
      <label htmlFor="enrollmentNumber" className="block text-sm font-medium text-gray-500">
        Enrollment Number <span className="text-red-500">*</span>
      </label>
      <input
        id="enrollmentNumber"
        name="enrollmentNumber"
        type="text"
        value={formData.enrollmentNumber}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        placeholder="Enter your enrollment number"
        required
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="admissionType" className="block text-sm font-medium text-gray-500">
        Admission Type <span className="text-red-500">*</span>
      </label>
      <select
        id="admissionType"
        name="admissionType"
        value={formData.admissionType}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        required
      >
        <option value="">Select Admission Type</option>
        <option value="Merit">Merit-Based</option>
        <option value="Self">Self-Financed</option>
      </select>
    </div>
  </div>
)

// Render educational background step
const EducationalBackgroundStep = ({ formData, handleChange, calculatePercentage }) => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-medium text-white mb-4">Intermediate Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="intermediateCollege" className="block text-sm font-medium text-gray-500">
            College Name <span className="text-red-500">*</span>
          </label>
          <input
            id="intermediateCollege"
            name="intermediateCollege"
            type="text"
            value={formData.intermediateCollege}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Enter your college name"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="intermediateBoard" className="block text-sm font-medium text-gray-500">
            Board <span className="text-red-500">*</span>
          </label>
          <input
            id="intermediateBoard"
            name="intermediateBoard"
            type="text"
            value={formData.intermediateBoard}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Enter your board name"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="intermediateGrade" className="block text-sm font-medium text-gray-500">
            Grade <span className="text-red-500">*</span>
          </label>
          <input
            id="intermediateGrade"
            name="intermediateGrade"
            type="text"
            value={formData.intermediateGrade}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Enter your grade (e.g., A, B, C)"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="intermediateTotalMarks" className="block text-sm font-medium text-gray-500">
            Total Marks <span className="text-red-500">*</span>
          </label>
          <input
            id="intermediateTotalMarks"
            name="intermediateTotalMarks"
            type="number"
            value={formData.intermediateTotalMarks}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Enter total marks"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="intermediateObtainedMarks" className="block text-sm font-medium text-gray-500">
            Obtained Marks <span className="text-red-500">*</span>
          </label>
          <input
            id="intermediateObtainedMarks"
            name="intermediateObtainedMarks"
            type="number"
            value={formData.intermediateObtainedMarks}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Enter obtained marks"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-500">Percentage</label>
          <div className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-700">
            {calculatePercentage(formData.intermediateObtainedMarks, formData.intermediateTotalMarks)}%
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-medium text-white mb-4">Matriculation Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="matriculationSchool" className="block text-sm font-medium text-gray-500">
            School Name <span className="text-red-500">*</span>
          </label>
          <input
            id="matriculationSchool"
            name="matriculationSchool"
            type="text"
            value={formData.matriculationSchool}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Enter your school name"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="matriculationBoard" className="block text-sm font-medium text-gray-500">
            Board <span className="text-red-500">*</span>
          </label>
          <input
            id="matriculationBoard"
            name="matriculationBoard"
            type="text"
            value={formData.matriculationBoard}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Enter your board name"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="matriculationGrade" className="block text-sm font-medium text-gray-500">
            Grade <span className="text-red-500">*</span>
          </label>
          <input
            id="matriculationGrade"
            name="matriculationGrade"
            type="text"
            value={formData.matriculationGrade}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Enter your grade (e.g., A, B, C)"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="matriculationTotalMarks" className="block text-sm font-medium text-gray-500">
            Total Marks <span className="text-red-500">*</span>
          </label>
          <input
            id="matriculationTotalMarks"
            name="matriculationTotalMarks"
            type="number"
            value={formData.matriculationTotalMarks}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Enter total marks"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="matriculationObtainedMarks" className="block text-sm font-medium text-gray-500">
            Obtained Marks <span className="text-red-500">*</span>
          </label>
          <input
            id="matriculationObtainedMarks"
            name="matriculationObtainedMarks"
            type="number"
            value={formData.matriculationObtainedMarks}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Enter obtained marks"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-500">Percentage</label>
          <div className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-700">
            {calculatePercentage(formData.matriculationObtainedMarks, formData.matriculationTotalMarks)}%
          </div>
        </div>
      </div>
    </div>
  </div>
)

// CNIC and Declaration step
const CNICDeclarationStep = ({ formData, handleChange, handleFileUpload }) => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-medium text-white mb-4">CNIC Images</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="cnicFront" className="block text-sm font-medium text-gray-500">
            CNIC Front <span className="text-red-500">*</span>
          </label>
          <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center">
            {formData.cnicFront ? (
              <div className="flex flex-col items-center">
                <div className="w-full h-40 relative mb-2">
                  <Image
                    src={URL.createObjectURL(formData.cnicFront) || "/placeholder.svg"}
                    alt="CNIC Front"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600">{formData.cnicFront.name}</p>
                <button
                  type="button"
                  onClick={() => handleChange({ target: { name: "cnicFront", value: null } })}
                  className="text-red-500 text-sm mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <label htmlFor="cnicFrontInput" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <Upload className="w-10 h-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Click to upload CNIC front</p>
                  <p className="text-xs text-gray-500">PNG, JPG or JPEG (max. 2MB)</p>
                </div>
                <input
                  id="cnicFrontInput"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, "cnicFront")}
                />
              </label>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="cnicBack" className="block text-sm font-medium text-gray-500">
            CNIC Back <span className="text-red-500">*</span>
          </label>
          <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center">
            {formData.cnicBack ? (
              <div className="flex flex-col items-center">
                <div className="w-full h-40 relative mb-2">
                  <Image
                    src={URL.createObjectURL(formData.cnicBack) || "/placeholder.svg"}
                    alt="CNIC Back"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600">{formData.cnicBack.name}</p>
                <button
                  type="button"
                  onClick={() => handleChange({ target: { name: "cnicBack", value: null } })}
                  className="text-red-500 text-sm mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <label htmlFor="cnicBackInput" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <Upload className="w-10 h-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Click to upload CNIC back</p>
                  <p className="text-xs text-gray-500">PNG, JPG or JPEG (max. 2MB)</p>
                </div>
                <input
                  id="cnicBackInput"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, "cnicBack")}
                />
              </label>
            )}
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Declaration</h3>
      <div className="flex items-start">
        <input
          id="declaration"
          name="declaration"
          type="checkbox"
          checked={formData.declaration}
          onChange={(e) =>
            handleChange({ target: { name: "declaration", type: "checkbox", checked: e.target.checked } })
          }
          className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
          required
        />
        <label htmlFor="declaration" className="ml-2 block text-sm text-gray-500">
          I confirm that all the information provided is accurate and I accept responsibility for its authenticity. If
          found guilty of providing false information, I will face the consequences.
        </label>
      </div>
    </div>
  </div>
)

// Main component
export default function SignupForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  // Form data
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    fatherName: "",
    cellNumber: "",
    dateOfBirth: "",
    city: "",
    permanentAddress: "",
    mailingAddress: "",

    // Academic Information
    batch: "",
    section: "",
    shift: "",
    gender: "",
    seatNumber: "",
    program: "",
    enrollmentNumber: "",
    admissionType: "",

    // Intermediate Details
    intermediateCollege: "",
    intermediateBoard: "",
    intermediateTotalMarks: "",
    intermediateObtainedMarks: "",
    intermediateGrade: "",

    // Matriculation Details
    matriculationSchool: "",
    matriculationBoard: "",
    matriculationTotalMarks: "",
    matriculationObtainedMarks: "",
    matriculationGrade: "",

    // CNIC Images
    cnicFront: null as File | null,
    cnicBack: null as File | null,

    // Declaration
    declaration: false,
  })

  // Handle input change with useCallback for better performance
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target

      if (type === "checkbox") {
        const target = e.target as HTMLInputElement
        setFormData((prev) => ({
          ...prev,
          [name]: target.checked,
        }))
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }))
      }
    },
    [],
  )

  // Handle file upload with useCallback
  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>, field: "cnicFront" | "cnicBack") => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.files?.[0] || null,
      }))
    }
  }, [])

  // Calculate percentage with useCallback for performance
  const calculatePercentage = useCallback((obtained: string, total: string) => {
    if (!obtained || !total) return "0.00"
    const percentage = (Number.parseFloat(obtained) / Number.parseFloat(total)) * 100
    return percentage.toFixed(2)
  }, [])

  // Validate form based on current step
  const validateStep = useCallback(
    (currentStep: number) => {
      setError("")

      if (currentStep === 1) {
        if (
          !formData.fullName ||
          !formData.email ||
          !formData.password ||
          !formData.confirmPassword ||
          !formData.fatherName ||
          !formData.cellNumber ||
          !formData.dateOfBirth ||
          !formData.city ||
          !formData.permanentAddress ||
          !formData.mailingAddress
        ) {
          setError("Please fill in all required fields")
          return false
        }

        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match")
          return false
        }

        if (formData.password.length < 8) {
          setError("Password must be at least 8 characters long")
          return false
        }

        return true
      }

      if (currentStep === 2) {
        if (
          !formData.batch ||
          !formData.section ||
          !formData.shift ||
          !formData.gender ||
          !formData.seatNumber ||
          !formData.program ||
          !formData.enrollmentNumber ||
          !formData.admissionType
        ) {
          setError("Please fill in all required fields")
          return false
        }
        return true
      }

      if (currentStep === 3) {
        if (
          !formData.intermediateCollege ||
          !formData.intermediateBoard ||
          !formData.intermediateTotalMarks ||
          !formData.intermediateObtainedMarks ||
          !formData.intermediateGrade ||
          !formData.matriculationSchool ||
          !formData.matriculationBoard ||
          !formData.matriculationTotalMarks ||
          !formData.matriculationObtainedMarks ||
          !formData.matriculationGrade
        ) {
          setError("Please fill in all required fields")
          return false
        }
        return true
      }

      if (currentStep === 4) {
        if (!formData.cnicFront || !formData.cnicBack) {
          setError("Please upload both sides of your CNIC")
          return false
        }

        if (!formData.declaration) {
          setError("Please accept the declaration")
          return false
        }

        return true
      }

      return false
    },
    [formData],
  )

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      // Validate form based on current step
      if (step < 4) {
        if (validateStep(step)) {
          setStep(step + 1)
        }
        return
      }

      // Final submission
      if (validateStep(step)) {
        try {
          setIsLoading(true)
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1500))

          // Redirect to verification page
          router.push("/signup/verification")
        } catch (err) {
          setError("An error occurred during signup. Please try again.")
        } finally {
          setIsLoading(false)
        }
      }
    },
    [step, validateStep, router],
  )

  // Toggle password visibility
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev)
  }, [])

  // Go to previous step
  const goToPreviousStep = useCallback(() => {
    setStep((prev) => Math.max(1, prev - 1))
  }, [])

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      {/* Form Header */}
      <div className="bg-gray-50 dark:bg-gray-700 p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {step === 1 && "Personal Information"}
            {step === 2 && "Academic Information"}
            {step === 3 && "Educational Background"}
            {step === 4 && "CNIC & Declaration"}
          </h2>
          <div className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-primary" : "bg-gray-300 dark:bg-gray-500"}`}
            ></span>
            <span
              className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-primary" : "bg-gray-300 dark:bg-gray-500"}`}
            ></span>
            <span
              className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-primary" : "bg-gray-300 dark:bg-gray-500"}`}
            ></span>
            <span
              className={`w-3 h-3 rounded-full ${step >= 4 ? "bg-primary" : "bg-gray-300 dark:bg-gray-500"}`}
            ></span>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6">
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-200 p-4 rounded-lg text-sm mb-6">
            {error}
          </div>
        )}

        {/* Step 1: Personal Information */}
        {step === 1 && <PersonalInfoStep formData={formData} handleChange={handleChange} error={error} />}

        {/* Step 2: Academic Information */}
        {step === 2 && <AcademicInfoStep formData={formData} handleChange={handleChange} error={error} />}

        {/* Step 3: Educational Background */}
        {step === 3 && (
          <EducationalBackgroundStep
            formData={formData}
            handleChange={handleChange}
            calculatePercentage={calculatePercentage}
          />
        )}

        {/* Step 4: CNIC & Declaration */}
        {step === 4 && (
          <CNICDeclarationStep formData={formData} handleChange={handleChange} handleFileUpload={handleFileUpload} />
        )}
      </div>

      {/* Form Footer */}
      <div className="bg-gray-50 dark:bg-gray-700 p-6 border-t border-gray-100 dark:border-gray-700 flex justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={goToPreviousStep}
            className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
        ) : (
          <div></div>
        )}

        <button
          type="submit"
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center min-w-[120px]"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : step < 4 ? (
            "Next"
          ) : (
            "Sign Up"
          )}
        </button>
      </div>
    </form>
  )
}
