"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import LoginForm from "@/components/auth/LoginForm"

export default function ResultStorageLoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <Link
            href="/services/result-storage"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Result Storage</span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Access Result Storage</h1>
            <p className="text-gray-600">Please sign in to access your academic results and transcripts</p>
          </div>

          <LoginForm />

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden md:block w-1/2 bg-primary relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-900 opacity-90"></div>
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="UBIT Result Storage"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-12 text-white">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4">Track Your Academic Journey</h2>
            <p className="text-white/80">
              Access your results, calculate your GPA, and monitor your academic progress all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
