"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Clock, Tag, ChevronLeft, User, Share2, CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for events (same as in the events page)
const MOCK_EVENTS = [
  {
    id: 1,
    title: "Annual Tech Symposium 2023",
    description:
      "Join us for a day of tech talks, workshops, and networking opportunities with industry professionals.",
    date: "2023-12-15",
    time: "09:00 AM - 05:00 PM",
    location: "UBIT Main Auditorium",
    image: "/placeholder.svg?height=300&width=600",
    category: "Conference",
    organizer: "UBIT Computer Science Department",
    featured: true,
    fullDescription: `
      The Annual Tech Symposium 2023 is UBIT's premier technology event of the year, bringing together students, faculty, industry professionals, and tech enthusiasts for a day of learning, innovation, and networking.
      
      This year's symposium will feature keynote speeches from industry leaders, panel discussions on emerging technologies, hands-on workshops, and a showcase of student projects. The event aims to bridge the gap between academic learning and industry practices, providing attendees with insights into the latest trends and developments in the tech world.
      
      ### Schedule:
      
      - 09:00 AM - 09:30 AM: Registration and Welcome Coffee
      - 09:30 AM - 10:30 AM: Opening Ceremony and Keynote Speech
      - 10:45 AM - 12:15 PM: Panel Discussion: "The Future of AI in Education"
      - 12:15 PM - 01:30 PM: Lunch Break and Networking
      - 01:30 PM - 03:00 PM: Parallel Workshop Sessions
      - 03:15 PM - 04:30 PM: Student Project Showcase
      - 04:30 PM - 05:00 PM: Closing Remarks and Certificate Distribution
      
      ### Speakers:
      
      - Dr. Sarah Johnson, CTO at TechInnovate
      - Prof. Michael Chen, AI Research Lead at UBIT
      - Eng. Fatima Ahmed, Senior Software Engineer at Google
      - Mr. David Wilson, Founder of StartupHub
      
      Don't miss this opportunity to expand your knowledge, network with professionals, and get inspired by the latest innovations in technology!
    `,
    contactEmail: "tech.symposium@ubit.edu",
    contactPhone: "+92-21-9999999",
    registrationLink: "https://ubit.edu/events/tech-symposium-2023/register",
    registrationDeadline: "2023-12-10",
    maxAttendees: 300,
    cost: "Free for UBIT students, PKR 500 for others",
  },
  {
    id: 2,
    title: "Hackathon: Code for Change",
    description: "A 24-hour coding competition to develop solutions for social problems. Open to all UBIT students.",
    date: "2023-11-25",
    time: "10:00 AM - 10:00 AM (Next Day)",
    location: "UBIT Lab Complex",
    image: "/placeholder.svg?height=300&width=600",
    category: "Competition",
    organizer: "UBIT Programming Club",
    featured: true,
    fullDescription: `
      Code for Change is a 24-hour hackathon where participants will work in teams to develop innovative solutions for real-world social problems. This event is designed to encourage creative thinking, problem-solving, and collaboration among UBIT students.
      
      ### Theme:
      
      This year's hackathon focuses on developing solutions for environmental sustainability, healthcare accessibility, and education technology. Teams will choose one of these areas and create a working prototype within the 24-hour timeframe.
      
      ### Prizes:
      
      - 1st Place: PKR 100,000 and internship opportunities
      - 2nd Place: PKR 50,000 and tech gadgets
      - 3rd Place: PKR 25,000
      - People's Choice Award: PKR 15,000
      
      ### Requirements:
      
      - Teams of 3-5 members
      - At least one team member must be a UBIT student
      - Participants should bring their own laptops and necessary equipment
      - Basic knowledge of programming is required
      
      Meals, snacks, and beverages will be provided throughout the event. Technical mentors will be available to guide teams and provide assistance when needed.
      
      Join us for an exciting 24 hours of coding, learning, and making a difference!
    `,
    contactEmail: "hackathon@ubit.edu",
    contactPhone: "+92-21-8888888",
    registrationLink: "https://ubit.edu/events/code-for-change/register",
    registrationDeadline: "2023-11-20",
    maxAttendees: 150,
    cost: "Free",
  },
  {
    id: 3,
    title: "Workshop: Introduction to Machine Learning",
    description: "Learn the basics of machine learning algorithms and their applications in this hands-on workshop.",
    date: "2023-11-18",
    time: "02:00 PM - 05:00 PM",
    location: "Room 201, CS Building",
    image: "/placeholder.svg?height=300&width=600",
    category: "Workshop",
    organizer: "AI Research Group",
    featured: false,
    fullDescription: `
      This workshop is designed for beginners who want to understand the fundamentals of machine learning and get hands-on experience with basic ML algorithms. No prior knowledge of machine learning is required, but basic programming skills in Python are recommended.
      
      ### What You'll Learn:
      
      - Introduction to machine learning concepts and terminology
      - Understanding supervised and unsupervised learning
      - Working with common ML algorithms (linear regression, decision trees, k-means clustering)
      - Data preprocessing and feature engineering
      - Model evaluation and validation techniques
      - Practical applications of machine learning
      
      ### Workshop Format:
      
      The workshop will combine theoretical explanations with practical exercises. Participants will work on real-world datasets and implement machine learning algorithms using Python and popular libraries such as scikit-learn and pandas.
      
      ### Prerequisites:
      
      - Basic knowledge of Python programming
      - Laptop with Python 3.7+ installed
      - Familiarity with Jupyter Notebooks (recommended but not required)
      
      All participants will receive a certificate of completion and access to workshop materials for future reference.
    `,
    contactEmail: "ai.workshop@ubit.edu",
    contactPhone: "+92-21-7777777",
    registrationLink: "https://ubit.edu/events/ml-workshop/register",
    registrationDeadline: "2023-11-15",
    maxAttendees: 50,
    cost: "PKR 200 for UBIT students, PKR 500 for others",
  },
  {
    id: 4,
    title: "Guest Lecture: Cybersecurity Trends",
    description: "Industry expert will discuss the latest trends and challenges in cybersecurity.",
    date: "2023-11-10",
    time: "03:00 PM - 04:30 PM",
    location: "Virtual (Zoom)",
    image: "/placeholder.svg?height=300&width=600",
    category: "Lecture",
    organizer: "UBIT Information Security Department",
    featured: false,
    fullDescription: `
      Join us for an insightful guest lecture on the latest trends and challenges in cybersecurity. This virtual session will provide valuable knowledge about emerging threats, defense strategies, and career opportunities in the cybersecurity field.
      
      ### Speaker:
      
      Dr. Ahmed Khan, Chief Information Security Officer at SecureTech Solutions, with over 15 years of experience in cybersecurity. Dr. Khan has worked with major financial institutions and tech companies to develop robust security frameworks and has published numerous research papers on network security and threat intelligence.
      
      ### Topics to be Covered:
      
      - Evolution of cyber threats in the post-pandemic world
      - Zero-trust architecture and its implementation
      - Cloud security challenges and solutions
      - The role of AI and machine learning in cybersecurity
      - Career pathways and skills needed for cybersecurity professionals
      
      ### Format:
      
      The lecture will be 60 minutes long, followed by a 30-minute Q&A session where participants can interact with the speaker and ask questions.
      
      A recording of the lecture will be available for registered participants who cannot attend the live session.
    `,
    contactEmail: "cybersecurity.lecture@ubit.edu",
    contactPhone: "+92-21-6666666",
    registrationLink: "https://ubit.edu/events/cybersecurity-lecture/register",
    registrationDeadline: "2023-11-09",
    maxAttendees: 200,
    cost: "Free",
  },
  {
    id: 5,
    title: "Career Fair: Tech Opportunities",
    description: "Connect with top tech companies looking to hire UBIT graduates and interns.",
    date: "2023-12-05",
    time: "10:00 AM - 04:00 PM",
    location: "UBIT Main Hall",
    image: "/placeholder.svg?height=300&width=600",
    category: "Career",
    organizer: "UBIT Career Services",
    featured: true,
    fullDescription: `
      The UBIT Career Fair is your gateway to exciting opportunities in the tech industry. This event brings together leading technology companies, startups, and organizations looking to recruit talented UBIT students and graduates for internships, fresh graduate positions, and experienced roles.
      
      ### Participating Companies:
      
      - Systems Limited
      - 10Pearls
      - Netsol Technologies
      - IBM Pakistan
      - P@SHA
      - Folio3
      - TRG Tech
      - And many more!
      
      ### What to Expect:
      
      - One-on-one interactions with company representatives
      - On-the-spot interviews for suitable candidates
      - Information sessions about company culture and work environment
      - Resume review and career counseling
      - Networking opportunities with industry professionals and alumni
      
      ### How to Prepare:
      
      - Bring multiple copies of your updated resume
      - Dress professionally
      - Research participating companies beforehand
      - Prepare a brief introduction about yourself
      - Have questions ready for potential employers
      
      This is a valuable opportunity to explore career options, understand industry requirements, and potentially secure internships or job offers. Don't miss it!
    `,
    contactEmail: "career.fair@ubit.edu",
    contactPhone: "+92-21-5555555",
    registrationLink: "https://ubit.edu/events/career-fair/register",
    registrationDeadline: "2023-12-03",
    maxAttendees: 500,
    cost: "Free",
  },
  {
    id: 6,
    title: "Research Symposium",
    description: "Undergraduate and graduate students present their research projects.",
    date: "2023-12-10",
    time: "01:00 PM - 06:00 PM",
    location: "Research Center, UBIT",
    image: "/placeholder.svg?height=300&width=600",
    category: "Research",
    organizer: "UBIT Research Committee",
    featured: false,
    fullDescription: `
      The UBIT Research Symposium provides a platform for undergraduate and graduate students to showcase their research projects and findings. This event celebrates academic excellence and innovation while fostering a culture of research and inquiry among students.
      
      ### Event Format:
      
      - Oral Presentations: Selected students will present their research in 15-minute sessions followed by 5 minutes of Q&A.
      - Poster Sessions: Students will display their research posters and interact with attendees to explain their work.
      - Panel Discussions: Faculty members and industry researchers will discuss current trends and future directions in various research domains.
      
      ### Research Categories:
      
      - Artificial Intelligence and Machine Learning
      - Data Science and Big Data Analytics
      - Computer Networks and Security
      - Software Engineering and Development
      - Human-Computer Interaction
      - Emerging Technologies (IoT, Blockchain, etc.)
      
      ### Awards:
      
      - Best Undergraduate Research Project
      - Best Graduate Research Project
      - Most Innovative Research
      - Best Poster Presentation
      - People's Choice Award
      
      The symposium will conclude with a networking reception where students, faculty, and industry representatives can interact and discuss potential collaborations.
      
      This event is open to all UBIT students, faculty, and invited guests from other academic institutions and industry.
    `,
    contactEmail: "research.symposium@ubit.edu",
    contactPhone: "+92-21-4444444",
    registrationLink: "https://ubit.edu/events/research-symposium/register",
    registrationDeadline: "2023-12-01",
    maxAttendees: 200,
    cost: "Free",
  },
]

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const [event, setEvent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate fetching event data
    const fetchEvent = () => {
      try {
        const eventId = Number.parseInt(params.id)
        const foundEvent = MOCK_EVENTS.find((e) => e.id === eventId)

        if (foundEvent) {
          setEvent(foundEvent)
        } else {
          setError("Event not found")
        }
      } catch (err) {
        setError("Failed to load event details")
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [params.id])

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Loading event details...</p>
        </div>
      </div>
    )
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="text-red-500 text-5xl mb-4">
            <CalendarIcon className="h-16 w-16 mx-auto" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Event Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {error || "The event you're looking for doesn't exist or has been removed."}
          </p>
          <Link href="/services/events">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Breadcrumb */}
      <div className="bg-primary text-white border-b border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/80 hover:text-white">
              Home
            </Link>
            <ChevronLeft className="w-4 h-4 text-white/60" />
            <Link href="/services" className="text-white/80 hover:text-white">
              Services
            </Link>
            <ChevronLeft className="w-4 h-4 text-white/60" />
            <Link href="/services/events" className="text-white/80 hover:text-white">
              Events
            </Link>
            <ChevronLeft className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">{event.title}</span>
          </div>
        </div>
      </div>

      {/* Event Header */}
      <div className="relative">
        <div className="h-64 md:h-96 w-full relative">
          <Image
            src={event.image || "/placeholder.svg?height=600&width=1200"}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24 z-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  <Tag className="h-3 w-3 mr-1" />
                  {event.category}
                </span>
                {event.featured && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500">
                    Featured Event
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{event.title}</h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                    <p className="font-medium text-gray-900 dark:text-white">{formatDate(event.date)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Time</p>
                    <p className="font-medium text-gray-900 dark:text-white">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">{event.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Organized by</p>
                  <p className="font-medium text-gray-900 dark:text-white">{event.organizer}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About This Event</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {event.fullDescription.split("\n").map((paragraph: string, index: number) => {
                    if (paragraph.trim().startsWith("###")) {
                      return (
                        <h3 key={index} className="text-lg font-semibold mt-6 mb-2">
                          {paragraph.replace("###", "").trim()}
                        </h3>
                      )
                    }
                    return paragraph.trim() ? (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ) : null
                  })}
                </div>
              </div>

              {/* Event Details */}
              <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Event Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.registrationDeadline && (
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Registration Deadline</p>
                      <p className="text-gray-900 dark:text-white">{formatDate(event.registrationDeadline)}</p>
                    </div>
                  )}

                  {event.maxAttendees && (
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Maximum Attendees</p>
                      <p className="text-gray-900 dark:text-white">{event.maxAttendees}</p>
                    </div>
                  )}

                  {event.cost && (
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Cost</p>
                      <p className="text-gray-900 dark:text-white">{event.cost}</p>
                    </div>
                  )}

                  {event.contactEmail && (
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Contact Email</p>
                      <a href={`mailto:${event.contactEmail}`} className="text-primary hover:underline">
                        {event.contactEmail}
                      </a>
                    </div>
                  )}

                  {event.contactPhone && (
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Contact Phone</p>
                      <a href={`tel:${event.contactPhone}`} className="text-primary hover:underline">
                        {event.contactPhone}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Register for Event
                  </a>
                )}

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    alert("Event link copied to clipboard!")
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Event
                </button>

                <Link href="/services/events">
                  <Button variant="outline" className="px-6 py-3 h-auto">
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    Back to Events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
