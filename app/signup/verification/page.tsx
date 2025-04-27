import Link from "next/link"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"

export default function VerificationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h1>
              <p className="text-gray-600">
                We've sent a verification link to your email address. Please check your inbox and click the link to
                verify your account.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">What happens next?</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    After verifying your email, your account will be reviewed by our administrators. This process
                    typically takes 1-2 business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-sm text-gray-500">
                Didn't receive the email? Check your spam folder or request a new verification link in
                <span className="font-medium"> 05:00</span>
              </p>
              <button
                type="button"
                className="mt-2 text-primary hover:underline text-sm font-medium disabled:text-gray-400 disabled:no-underline"
                disabled
              >
                Resend verification link
              </button>
            </div>

            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
