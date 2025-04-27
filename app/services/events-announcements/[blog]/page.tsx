import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft, Calendar, User, Clock } from "lucide-react"

// Define the blog data
const blogData = {
  "academic-processes": {
    title: "Understanding Academic Processes",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Academic processes are the backbone of any educational institution. They provide structure and ensure that all students receive a standardized education while also allowing for personalization and growth.</p>
      
      <h2>Key Academic Processes</h2>
      
      <p>There are several key academic processes that every student should be familiar with:</p>
      
      <ul>
        <li><strong>Course Registration</strong>: The process of selecting and enrolling in courses for the upcoming semester.</li>
        <li><strong>Add/Drop Period</strong>: A designated time when students can adjust their course schedules without academic penalty.</li>
        <li><strong>Withdrawal Process</strong>: The procedure for officially withdrawing from a course after the add/drop period.</li>
        <li><strong>Grade Appeals</strong>: The process for contesting a grade that a student believes was assigned incorrectly.</li>
        <li><strong>Degree Audit</strong>: A review of a student's academic record to ensure they have met all requirements for graduation.</li>
      </ul>
      
      <h2>Understanding the Academic Calendar</h2>
      
      <p>The academic calendar is a crucial tool for navigating university life. It outlines important dates and deadlines, including:</p>
      
      <ul>
        <li>Start and end dates for each semester</li>
        <li>Registration periods</li>
        <li>Add/drop deadlines</li>
        <li>Withdrawal deadlines</li>
        <li>Examination periods</li>
        <li>Holidays and breaks</li>
      </ul>
      
      <p>By familiarizing yourself with the academic calendar, you can plan your semester effectively and avoid missing important deadlines.</p>
      
      <h2>Academic Advising</h2>
      
      <p>Academic advisors play a crucial role in helping students navigate academic processes. They can provide guidance on:</p>
      
      <ul>
        <li>Course selection</li>
        <li>Degree requirements</li>
        <li>Academic policies and procedures</li>
        <li>Career planning</li>
        <li>Graduate school preparation</li>
      </ul>
      
      <p>It's recommended that students meet with their academic advisor at least once per semester to ensure they are on track to meet their academic goals.</p>
      
      <h2>Conclusion</h2>
      
      <p>Understanding academic processes is essential for success in higher education. By familiarizing yourself with these processes and seeking guidance when needed, you can navigate your academic journey with confidence.</p>
    `,
    relatedBlogs: [
      {
        title: "Tips for Effective Course Registration",
        href: "/services/events-announcements/course-registration-tips",
      },
      {
        title: "How to Appeal a Grade Successfully",
        href: "/services/events-announcements/grade-appeal-guide",
      },
      {
        title: "Understanding Your Degree Audit",
        href: "/services/events-announcements/degree-audit-explained",
      },
    ],
  },
  "course-registration-tips": {
    title: "Tips for Effective Course Registration",
    author: "Prof. Michael Chen",
    date: "February 28, 2024",
    readTime: "4 min read",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Course registration can be a stressful time for many students. With limited spots in popular courses and the pressure to create a balanced schedule, it's important to approach registration strategically.</p>
      
      <h2>Before Registration</h2>
      
      <p>Preparation is key to a successful registration experience. Here are some steps to take before registration opens:</p>
      
      <ul>
        <li><strong>Review degree requirements</strong>: Understand what courses you need to take to fulfill your degree requirements.</li>
        <li><strong>Create a graduation plan</strong>: Map out all the courses you need to take each semester until graduation.</li>
        <li><strong>Check prerequisites</strong>: Ensure you have completed all prerequisites for the courses you plan to take.</li>
        <li><strong>Consult with your advisor</strong>: Meet with your academic advisor to discuss your course selection and get their recommendations.</li>
        <li><strong>Prepare backup options</strong>: Have alternative courses ready in case your first choices are full.</li>
      </ul>
      
      <h2>During Registration</h2>
      
      <p>When registration opens, time is of the essence. Here's how to make the most of your registration window:</p>
      
      <ul>
        <li><strong>Register as early as possible</strong>: Log in to the registration system as soon as your registration window opens.</li>
        <li><strong>Prioritize required courses</strong>: Register for required courses first, especially those with limited sections.</li>
        <li><strong>Check for waitlists</strong>: If a course is full, join the waitlist if available.</li>
        <li><strong>Balance your schedule</strong>: Avoid scheduling multiple demanding courses on the same day.</li>
        <li><strong>Consider time management</strong>: Leave enough time between classes for travel, meals, and study breaks.</li>
      </ul>
      
      <h2>After Registration</h2>
      
      <p>Your work isn't done once you've registered for courses. Here are some post-registration steps:</p>
      
      <ul>
        <li><strong>Verify your schedule</strong>: Double-check your registration to ensure you're enrolled in all the courses you intended.</li>
        <li><strong>Monitor waitlists</strong>: Keep an eye on your position on any waitlists and be prepared to add the course if a spot opens up.</li>
        <li><strong>Attend the first week of classes</strong>: Some professors drop students who don't attend the first week, which can open up spots for waitlisted students.</li>
        <li><strong>Utilize the add/drop period</strong>: If you're not satisfied with a course, take advantage of the add/drop period to make changes.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Effective course registration requires planning, preparation, and quick action. By following these tips, you can create a schedule that meets your academic needs and sets you up for success in the upcoming semester.</p>
    `,
    relatedBlogs: [
      {
        title: "Understanding Academic Processes",
        href: "/services/events-announcements/academic-processes",
      },
      {
        title: "How to Balance Work and Study",
        href: "/services/events-announcements/work-study-balance",
      },
      {
        title: "Making the Most of Your Academic Advisor",
        href: "/services/events-announcements/academic-advising",
      },
    ],
  },
  "grade-appeal-guide": {
    title: "How to Appeal a Grade Successfully",
    author: "Dr. Emily Rodriguez",
    date: "April 5, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Receiving a grade that you believe doesn't accurately reflect your performance can be frustrating. However, most universities have a grade appeal process that allows students to contest grades they believe were assigned incorrectly.</p>
      
      <h2>When to Appeal a Grade</h2>
      
      <p>Grade appeals should not be made simply because you're disappointed with your grade. Valid reasons for appealing a grade include:</p>
      
      <ul>
        <li><strong>Calculation error</strong>: The professor made a mathematical error when calculating your grade.</li>
        <li><strong>Deviation from syllabus</strong>: The grading criteria used differed from what was stated in the syllabus.</li>
        <li><strong>Unequal application of standards</strong>: Grading standards were applied inconsistently across students.</li>
        <li><strong>Grading based on non-academic criteria</strong>: The grade was influenced by factors unrelated to academic performance.</li>
      </ul>
      
      <h2>Steps in the Grade Appeal Process</h2>
      
      <p>While the specific process may vary by institution, here are the general steps involved in appealing a grade:</p>
      
      <ol>
        <li><strong>Review the work in question</strong>: Carefully review the assignment or exam to understand where you lost points.</li>
        <li><strong>Consult the syllabus</strong>: Ensure that the grading criteria used align with what was stated in the syllabus.</li>
        <li><strong>Speak with the professor</strong>: Schedule a meeting with your professor to discuss your concerns. Approach this conversation respectfully and with specific questions.</li>
        <li><strong>Gather evidence</strong>: Collect any evidence that supports your case, such as the original assignment, grading rubric, syllabus, and any relevant communication with the professor.</li>
        <li><strong>Submit a formal appeal</strong>: If the issue isn't resolved through discussion with the professor, submit a formal appeal following your institution's procedures.</li>
        <li><strong>Follow up</strong>: Stay engaged in the process and respond promptly to any requests for additional information.</li>
      </ol>
      
      <h2>Tips for a Successful Appeal</h2>
      
      <p>To increase your chances of a successful grade appeal, consider the following tips:</p>
      
      <ul>
        <li><strong>Act quickly</strong>: Most institutions have a deadline for initiating grade appeals, often within a few weeks of receiving the grade.</li>
        <li><strong>Be professional</strong>: Maintain a respectful and professional tone in all communications related to your appeal.</li>
        <li><strong>Focus on facts</strong>: Base your appeal on objective facts rather than emotions or opinions.</li>
        <li><strong>Be specific</strong>: Clearly identify the specific aspects of the grading that you believe were incorrect.</li>
        <li><strong>Know the policies</strong>: Familiarize yourself with your institution's grade appeal policy and follow it carefully.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>While appealing a grade can be a challenging process, it's an important option for students who believe they have been graded unfairly. By understanding the process and approaching it professionally, you can advocate for yourself effectively and potentially achieve a more accurate reflection of your academic performance.</p>
    `,
    relatedBlogs: [
      {
        title: "Understanding Academic Processes",
        href: "/services/events-announcements/academic-processes",
      },
      {
        title: "How to Communicate Effectively with Professors",
        href: "/services/events-announcements/professor-communication",
      },
      {
        title: "Understanding Your Rights as a Student",
        href: "/services/events-announcements/student-rights",
      },
    ],
  },
}

export default function BlogPage({
  params,
}: {
  params: { blog: string }
}) {
  const blog = params.blog
  const blogInfo = blogData[blog as keyof typeof blogData]

  // Check if blog exists
  if (!blogInfo) {
    return (
      <div className="min-h-screen bg-secondary/30 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-primary mb-8">Blog not found</h1>
          <Link href="/services/events-announcements" className="text-primary hover:underline">
            Return to Events & Announcements
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary/30 pt-24 pb-16">
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
            <Link href="/services/events-announcements" className="hover:underline">
              Events & Announcements
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Blog</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/services/events-announcements" className="flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Events & Announcements
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-primary mb-4">{blogInfo.title}</h1>

            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{blogInfo.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{blogInfo.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{blogInfo.readTime}</span>
              </div>
            </div>

            <div className="mb-8">
              <Image
                src={blogInfo.image || "/placeholder.svg"}
                alt={blogInfo.title}
                width={1200}
                height={600}
                className="rounded-lg w-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: blogInfo.content }} />

            <div className="border-t border-gray-200 pt-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blogInfo.relatedBlogs.map((relatedBlog, index) => (
                  <Link
                    key={index}
                    href={relatedBlog.href}
                    className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-sm transition-all"
                  >
                    <h3 className="font-medium text-lg hover:text-primary transition-colors">{relatedBlog.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-4">About the Author</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt={blogInfo.author}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{blogInfo.author}</p>
                  <p className="text-sm text-gray-600">Faculty Member</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-4">Latest Posts</h3>
              <div className="space-y-4">
                {Object.entries(blogData)
                  .slice(0, 3)
                  .map(([key, value]) => (
                    <Link
                      key={key}
                      href={`/services/events-announcements/${key}`}
                      className="block hover:bg-gray-50 p-2 rounded transition-colors"
                    >
                      <h4 className="font-medium hover:text-primary transition-colors">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.date}</p>
                    </Link>
                  ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Subscribe to Newsletter</h3>
              <p className="text-gray-600 text-sm mb-4">
                Stay updated with the latest news, events, and announcements from UBIT.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
