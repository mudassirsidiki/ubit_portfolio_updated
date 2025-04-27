import Link from "next/link"

export default function RecruiterSection() {
  return (
    <section className="py-24 bg-gray-100 dark:bg-transparent">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
          Are You a Recruiter Looking to <br className="md:hidden" />
          Hire Talented Graduates?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Connect with UBIT to find the perfect candidates for your company. Our platform helps match talented graduates
          with the right opportunities.
        </p>
        <Link
          href="/recruiters"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl font-medium border-2 border-primary-200"
        >
          Hire Now
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
    </section>
  )
}
