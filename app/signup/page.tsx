import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import SignupForm from "@/components/auth/SignupForm"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary py-4">
        <div className="container-custom">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="flex-grow py-8 md:py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white-900 mb-2">Create Your UBIT Account</h1>
              <p className="text-white-600">Join the UBIT community to access exclusive services and resources</p>
            </div>

            <SignupForm />

            <div className="mt-8 text-center">
              <p className="text-white-600">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
