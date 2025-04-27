import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft, ExternalLink, Bookmark } from "lucide-react"

export default function AlumniPage() {
  const successStories = [
    {
      name: "Ahmed Khan",
      batch: "Class of 2015",
      company: "Google",
      position: "Senior Software Engineer",
      image: "/testimonial-1.jpg",
      quote:
        "UBIT provided me with the knowledge and skills that have been instrumental in my career at Google. The faculty's dedication to excellence is unmatched.",
      achievements: [
        "Led a team of 5 engineers to develop Google's internal analytics tool",
        "Recipient of Google's Peer Bonus Award for exceptional performance",
        "Contributed to open-source projects including TensorFlow",
      ],
    },
    {
      name: "Fatima Ali",
      batch: "Class of 2017",
      company: "Microsoft",
      position: "UX Designer",
      image: "/testimonial-2.jpg",
      quote:
        "The practical approach to education at UBIT prepared me for real-world challenges. The portfolio generation service helped me showcase my skills to potential employers.",
      achievements: [
        "Redesigned key features of Microsoft Teams, improving user satisfaction by 25%",
        "Speaker at UX Design Conference 2022",
        "Mentor for junior designers at Microsoft",
      ],
    },
    {
      name: "Zain Ahmed",
      batch: "Class of 2016",
      company: "Amazon",
      position: "Data Scientist",
      image: "/testimonial-3.jpg",
      quote:
        "The alumni network has been invaluable for my professional growth. I've connected with industry leaders and found mentors who have guided my career path.",
      achievements: [
        "Developed machine learning models for Amazon's recommendation system",
        "Published research paper on data optimization techniques",
        "Awarded the Amazon Star Employee recognition",
      ],
    },
    {
      name: "Sara Malik",
      batch: "Class of 2018",
      company: "Facebook",
      position: "Frontend Engineer",
      image: "/placeholder.svg?height=150&width=150",
      quote:
        "At UBIT, I learned not just to code, but to think critically about the user experience. This perspective has been crucial in my role at Facebook.",
      achievements: [
        "Core contributor to Facebook's React component library",
        "Led the accessibility improvements initiative",
        "Mentored 15+ junior engineers",
      ],
    },
    {
      name: "Usman Farooq",
      batch: "Class of 2014",
      company: "Oracle",
      position: "Database Architect",
      image: "/placeholder.svg?height=150&width=150",
      quote:
        "The database coursework at UBIT was challenging, but it gave me a solid foundation. I still apply those principles in my daily work at Oracle.",
      achievements: [
        "Key contributor to Oracle's cloud database migration tools",
        "Developed performance optimization techniques that reduced query times by 40%",
        "Oracle Certified Master",
      ],
    },
    {
      name: "Ayesha Khan",
      batch: "Class of 2019",
      company: "Twitter",
      position: "Software Developer",
      image: "/placeholder.svg?height=150&width=150",
      quote:
        "The collaborative projects at UBIT taught me how to work effectively in teams, a skill that's essential in my role at Twitter.",
      achievements: [
        "Contributed to Twitter's real-time notification system",
        "Developed tools to improve code review efficiency",
        "Active mentor in Twitter's Women in Tech program",
      ],
    },
  ]

  const startups = [
    {
      name: "TechNest",
      founder: "Imran Ali",
      batch: "Class of 2012",
      description: "A tech incubator providing resources and mentorship to early-stage startups in Pakistan.",
      logo: "/placeholder.svg?height=80&width=80",
      website: "#",
    },
    {
      name: "DataSift",
      founder: "Sana Kazmi",
      batch: "Class of 2016",
      description: "An AI-powered analytics platform helping businesses make data-driven decisions.",
      logo: "/placeholder.svg?height=80&width=80",
      website: "#",
    },
    {
      name: "CodeCraft",
      founder: "Hassan Ahmed",
      batch: "Class of 2015",
      description: "A software development company specializing in custom enterprise solutions.",
      logo: "/placeholder.svg?height=80&width=80",
      website: "#",
    },
    {
      name: "EduTech Solutions",
      founder: "Nadia Malik",
      batch: "Class of 2017",
      description: "An educational technology platform providing interactive learning resources for students.",
      logo: "/placeholder.svg?height=80&width=80",
      website: "#",
    },
  ]

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
            <span>Alumni Success Stories</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary dark:text-primary-200 mb-4">Alumni Success Stories</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how UBIT graduates have made their mark in the tech industry and beyond. Our alumni network spans
            across global tech giants and innovative startups.
          </p>
        </div>

        {/* Alumni Success Stories */}
        <div className="space-y-16 mb-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Notable Alumni</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((alumni, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all dark:border dark:border-gray-800"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                      <Image
                        src={alumni.image || "/placeholder.svg"}
                        alt={alumni.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold dark:text-white">{alumni.name}</h3>
                      <p className="text-primary dark:text-primary-200">{alumni.position}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {alumni.company} • {alumni.batch}
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4 text-sm">
                    "{alumni.quote}"
                  </blockquote>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Bookmark className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {alumni.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Startups by UBIT Alumni */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Startups Founded by UBIT Alumni</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {startups.map((startup, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-xl shadow-sm p-6 hover:shadow-md transition-all dark:border dark:border-gray-800"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden flex items-center justify-center">
                    <Image
                      src={startup.logo || "/placeholder.svg"}
                      alt={startup.name}
                      width={48}
                      height={48}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white">{startup.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Founded by {startup.founder} • {startup.batch}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">{startup.description}</p>

                <a
                  href={startup.website}
                  className="inline-flex items-center gap-1 text-primary dark:text-primary-200 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Join Alumni Network */}
        <div className="mt-16 bg-primary/10 dark:bg-primary/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Join Our Alumni Network</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with fellow graduates, access exclusive resources, and stay updated on alumni events.
              </p>
            </div>
            <Link
              href="/signup"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              Register Now
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
