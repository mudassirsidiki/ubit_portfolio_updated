import Link from "next/link"
import { ChevronRight, ArrowLeft, BookOpen, BookMarked, DollarSign, CheckCircle } from "lucide-react"

export default function BuySellBooksPage() {
  return (
    <div className="min-h-screen bg-secondary/30 dark:bg-transparent pt-24 pb-16">
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
            <span>Buy & Sell Used Books</span>
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

        <h1 className="text-4xl font-bold text-primary dark:text-primary-200 mb-4">Buy & Sell Used Books</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl">
          A platform for UBIT students to buy and sell used textbooks, helping you save money while reducing waste
        </p>

        {/* How It Works */}
        <div className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-sm mb-12 dark:border dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">List Your Books</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upload details about the textbooks you want to sell, including condition, price, and course information.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <BookMarked className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Browse Available Books</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Search for the textbooks you need by course code, title, or author, and filter by condition and price.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Complete the Transaction</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with the seller/buyer through our secure messaging system and arrange a meeting on campus to
                exchange the book.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-sm mb-12 dark:border dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Save Money</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Buy used textbooks at a fraction of the cost of new ones, keeping more money in your pocket for other
                  expenses.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Recover Costs</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sell your used textbooks to recover some of your initial investment when you no longer need them.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Campus-Based</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Exchange books on campus, avoiding shipping costs and delays associated with online marketplaces.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Eco-Friendly</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Reduce waste by giving textbooks a second (or third) life instead of letting them gather dust on your
                  shelf.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary/10 dark:bg-primary/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ready to Buy or Sell?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Login to your account to start listing books or browsing the marketplace.
              </p>
            </div>
            <Link
              href="/login"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
