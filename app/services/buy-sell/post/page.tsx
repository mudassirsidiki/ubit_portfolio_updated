"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Upload, X, AlertCircle } from "lucide-react"

// Categories for the dropdown
const CATEGORIES = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Engineering",
  "Business",
  "Arts",
  "Other",
]

export default function PostListingPage() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    type: "sell", // Default to "sell"
    condition: "good", // Default to "good"
    images: [] as File[],
  })

  // Check login status on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)

    if (!loggedIn) {
      router.push("/login?redirectTo=/services/buy-sell/post")
    }
  }, [router])

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle image uploads
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)

      // Limit to 3 images
      if (formData.images.length + newFiles.length > 3) {
        setError("You can upload a maximum of 3 images")
        return
      }

      // Create preview URLs for the images
      const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file))

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newFiles],
      }))

      setPreviewUrls((prev) => [...prev, ...newPreviewUrls])
    }
  }

  // Remove an image
  const removeImage = (index: number) => {
    const newImages = [...formData.images]
    newImages.splice(index, 1)

    const newPreviewUrls = [...previewUrls]
    URL.revokeObjectURL(newPreviewUrls[index]) // Clean up the URL
    newPreviewUrls.splice(index, 1)

    setFormData((prev) => ({
      ...prev,
      images: newImages,
    }))

    setPreviewUrls(newPreviewUrls)
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate form
    if (!formData.title.trim()) {
      setError("Please enter a title")
      return
    }

    if (!formData.description.trim()) {
      setError("Please enter a description")
      return
    }

    if (!formData.price.trim() || isNaN(Number(formData.price))) {
      setError("Please enter a valid price")
      return
    }

    if (!formData.category) {
      setError("Please select a category")
      return
    }

    try {
      setIsLoading(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      setSuccess(true)

      // Reset form after 2 seconds and redirect
      setTimeout(() => {
        router.push("/services/buy-sell")
      }, 2000)
    } catch (err) {
      setError("Failed to post listing. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isLoggedIn) {
    return null // Don't render anything if not logged in
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 mx-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/services/buy-sell"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-200 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Buy & Sell</span>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Post a Listing</h1>
          <p className="text-gray-600 dark:text-gray-300">Fill out the form below to create your book listing.</p>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Listing Posted Successfully!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your listing has been created and is now visible to other users.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Redirecting you back to the listings page...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-md">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2" />
                    <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                  </div>
                </div>
              )}

              {/* Listing Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Listing Type</label>
                <div className="flex rounded-md overflow-hidden border border-gray-300 dark:border-gray-600">
                  <button
                    type="button"
                    className={`flex-1 px-4 py-2 text-sm font-medium ${
                      formData.type === "sell"
                        ? "bg-primary text-white"
                        : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                    onClick={() => setFormData((prev) => ({ ...prev, type: "sell" }))}
                  >
                    I'm Selling a Book
                  </button>
                  <button
                    type="button"
                    className={`flex-1 px-4 py-2 text-sm font-medium ${
                      formData.type === "buy"
                        ? "bg-primary text-white"
                        : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                    onClick={() => setFormData((prev) => ({ ...prev, type: "buy" }))}
                  >
                    I'm Looking for a Book
                  </button>
                </div>
              </div>

              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Book Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter the book title"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder={
                    formData.type === "sell"
                      ? "Describe the condition, edition, etc."
                      : "Describe what you're looking for, preferred edition, etc."
                  }
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {formData.type === "sell" ? "Selling Price (Rs.)" : "Budget (Rs.)"}
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter amount in Rupees"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Condition (only for selling) */}
              {formData.type === "sell" && (
                <div>
                  <label
                    htmlFor="condition"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Book Condition
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="like-new">Like New</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>
              )}

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Upload Images (Max 3)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                      <label
                        htmlFor="images"
                        className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                      >
                        <span>Upload files</span>
                        <input
                          id="images"
                          name="images"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          multiple
                          onChange={handleImageUpload}
                          disabled={formData.images.length >= 3}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>

                {/* Image Previews */}
                {previewUrls.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {previewUrls.map((url, index) => (
                      <div key={index} className="relative">
                        <img
                          src={url || "/placeholder.svg"}
                          alt={`Preview ${index + 1}`}
                          className="h-24 w-full object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                          aria-label="Remove image"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center"
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
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Posting...
                    </>
                  ) : (
                    "Post Listing"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
