import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import LoginForm from "@/components/auth/LoginForm"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-500 mb-2">Welcome back</h1>
            <p className="text-gray-600">Please enter your credentials to access your account</p>
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
        <Image src="/campus-students.jpg" alt="UBIT Campus" fill className="object-cover mix-blend-overlay" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-12 text-white">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4">Empowering Education Through Technology</h2>
            <p className="text-white/80">
              Access your academic records, generate professional portfolios, and connect with the UBIT community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
