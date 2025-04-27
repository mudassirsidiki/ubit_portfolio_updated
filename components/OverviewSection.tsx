import Image from "next/image"
import Link from "next/link"

export default function OverviewSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Explore Our Services <br className="md:hidden" /> to Simplify Your Academic Journey
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* First Image - Full Display with max width control */}
          <div className="w-full md:w-1/2 max-w-sm md:max-w-full">
            <Image
              src="/images/logo.jpg"
              alt="University Building"
              width={600}
              height={320}
              className="rounded-2xl w-full h-auto"
            />
          </div>

          {/* UBIT Logo - Adjusted Size & Scaling */}
          <div className="relative hidden md:block w-20 h-20 md:w-32 md:h-32 -mx-6 md:-mx-12 z-10">
            <div className="bg-white rounded-full p-2 shadow-lg flex justify-center items-center">
              <Image
                src="/ubit3.png"
                alt="UBIT Logo"
                width={80}
                height={80}
                className="rounded-full scale-110 md:scale-125"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-4 max-w-sm md:max-w-full">
            {/* Second Image - Full Display with max width control */}
            <div className="w-full">
              <Image
                src="/ubit2.png"
                alt="University Campus"
                width={600}
                height={320}
                className="rounded-2xl w-full h-auto"
              />
            </div>

            <p className="text-xl md:text-2xl mb-8 text-gray-800">
              A student-driven platform to streamline academics—manage records, access resources, and connect with
              opportunities effortlessly.
            </p>

            <div className="flex justify-center">
              <Link href="/faculty" className="inline-block btn-primary text-base text-center">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
