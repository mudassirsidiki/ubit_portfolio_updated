import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-gray-900 dark:bg-black/90 backdrop-blur-sm text-white w-full border-t border-gray-600 dark:border-gray-500"
      role="contentinfo"
    >
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 bg-white/10 rounded-full p-1">
                <Image src="/images/logo.jpg" alt="UBIT Logo" fill className="object-contain rounded-full" />
              </div>
              <span className="text-xl font-bold text-white">UBIT</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm font-medium">
              Empowering students with cutting-edge education in computer science and information technology since 1999.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <nav aria-label="Primary footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:underline font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:underline font-medium"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:underline font-medium"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:underline font-medium"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <nav aria-label="Services footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/blogs"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:underline font-medium"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/events"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:underline font-medium"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/result-storage"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:underline font-medium"
                  >
                    Result Storage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/portfolio-generation"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:underline font-medium"
                  >
                    Portfolio Generation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/alumni-network"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:underline font-medium"
                  >
                    Alumni Network
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/buy-sell-books"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:underline font-medium"
                  >
                    Buy & Sell Books
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <address className="not-italic">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-200 mt-1" aria-hidden="true" />
                  <span className="text-gray-200 font-medium">
                    University of Karachi, Main University Road, Karachi
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-200" aria-hidden="true" />
                  <a
                    href="tel:+922199261300"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:underline font-medium"
                  >
                    +92 21 9926 1300
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-200" aria-hidden="true" />
                  <a
                    href="mailto:info@ubit.edu.pk"
                    className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:underline font-medium"
                  >
                    info@ubit.edu.pk
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 font-medium">&copy; {currentYear} UBIT. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-gray-200 font-medium hover:text-white transition-colors focus:outline-none focus:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-200 font-medium hover:text-white transition-colors focus:outline-none focus:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
