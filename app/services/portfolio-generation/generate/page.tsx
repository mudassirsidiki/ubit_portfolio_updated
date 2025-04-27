"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  ArrowLeft,
  Upload,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  X,
  Plus,
  Trash2,
} from "lucide-react"
import { Check } from "lucide-react"
import { Globe } from "lucide-react"

export default function PortfolioGeneratorPage() {
  // Add resumeFile and resumeFileName to the formData state
  const [formData, setFormData] = useState({
    // Personal Info
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    photo: null,
    photoPreview: null,

    // Resume
    resumeFile: null,
    resumeFileName: "",

    // Social Links
    socialLinks: [{ platform: "", url: "" }],

    // Skills
    skills: ["", "", ""],

    // Education
    education: [{ institution: "", degree: "", year: "" }],

    // Experience
    experience: [{ company: "", position: "", duration: "", description: "" }],

    // Projects
    projects: [{ title: "", description: "", technologies: "", link: "", image: null, imagePreview: null }],

    // Theme
    theme: "blue", // default theme

    // Layout
    layout: "modern", // default layout
  })

  const [step, setStep] = useState(1)
  const [generatedPortfolio, setGeneratedPortfolio] = useState(null)
  const [showFullWebsite, setShowFullWebsite] = useState(false)
  const [errors, setErrors] = useState({})

  // Available social platforms
  const socialPlatforms = [
    { id: "github", name: "GitHub", icon: <Github className="w-5 h-5" /> },
    { id: "linkedin", name: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
    { id: "twitter", name: "Twitter", icon: <Twitter className="w-5 h-5" /> },
    { id: "facebook", name: "Facebook", icon: <Facebook className="w-5 h-5" /> },
    { id: "instagram", name: "Instagram", icon: <Instagram className="w-5 h-5" /> },
    { id: "website", name: "Website", icon: <Globe className="w-5 h-5" /> },
  ]

  // After the useState declarations, add these CSS animations
  useEffect(() => {
    // Add CSS animations to the document
    const style = document.createElement("style")
    style.textContent = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes float-delay {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes float-slow {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(5deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    
    @keyframes float-delay-slow {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(-5deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    
    @keyframes slideDown {
      from { transform: translateY(-10px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-delay {
      animation: float-delay 7s ease-in-out infinite;
    }
    
    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
    }
    
    .animate-float-delay-slow {
      animation: float-delay-slow 9s ease-in-out infinite;
    }
    
    .animate-fadeIn {
      animation: fadeIn 1s ease-out forwards;
    }
    
    .animate-fadeInUp {
      animation: fadeInUp 1s ease-out forwards;
    }
    
    .animate-fadeInLeft {
      animation: fadeInLeft 1s ease-out forwards;
    }
    
    .animate-fadeInRight {
      animation: fadeInRight 1s ease-out forwards;
    }
    
    .animate-slideUp {
      animation: slideUp 1s ease-out forwards;
    }
    
    .animate-slideDown {
      animation: slideDown 0.3s ease-out forwards;
    }
    
    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }
    
    .animation-delay-200 {
      animation-delay: 200ms;
    }
    
    .animation-delay-400 {
      animation-delay: 400ms;
    }
    
    .animation-delay-600 {
      animation-delay: 600ms;
    }
    
    .animation-delay-800 {
      animation-delay: 800ms;
    }
  `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  // Handle nested form input changes
  const handleNestedChange = (category, index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev[category]]
      if (category === "skills") {
        // For skills, we're directly updating the array with strings
        updated[index] = value || ""
      } else {
        // For other categories, we're updating objects
        updated[index] = { ...updated[index], [field]: value }
      }
      return { ...prev, [category]: updated }
    })

    // Clear error for this field if it exists
    const errorKey = `${category}.${index}.${field}`
    if (errors[errorKey]) {
      setErrors((prev) => ({ ...prev, [errorKey]: null }))
    }
  }

  // Handle social link changes
  const handleSocialLinkChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedLinks = [...prev.socialLinks]
      updatedLinks[index] = { ...updatedLinks[index], [field]: value }
      return { ...prev, socialLinks: updatedLinks }
    })

    // Clear error for this field if it exists
    const errorKey = `socialLinks.${index}.${field}`
    if (errors[errorKey]) {
      setErrors((prev) => ({ ...prev, [errorKey]: null }))
    }
  }

  // Add new item to arrays (skills, education, experience, projects)
  const addItem = (category) => {
    setFormData((prev) => {
      let newItem

      switch (category) {
        case "skills":
          return { ...prev, skills: [...prev.skills, ""] }
        case "education":
          newItem = { institution: "", degree: "", year: "" }
          return { ...prev, education: [...prev.education, newItem] }
        case "experience":
          newItem = { company: "", position: "", duration: "", description: "" }
          return { ...prev, experience: [...prev.experience, newItem] }
        case "projects":
          newItem = { title: "", description: "", technologies: "", link: "", image: null, imagePreview: null }
          return { ...prev, projects: [...prev.projects, newItem] }
        case "socialLinks":
          newItem = { platform: "", url: "" }
          return { ...prev, socialLinks: [...prev.socialLinks, newItem] }
        default:
          return prev
      }
    })
  }

  // Remove item from arrays
  const removeItem = (category, index) => {
    setFormData((prev) => {
      const updated = [...prev[category]]
      updated.splice(index, 1)
      return { ...prev, [category]: updated }
    })
  }

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: file,
        photoPreview: URL.createObjectURL(file),
      }))
    }
  }

  // Handle project image upload
  const handleProjectImageUpload = (index, e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => {
        const updatedProjects = [...prev.projects]
        updatedProjects[index] = {
          ...updatedProjects[index],
          image: file,
          imagePreview: URL.createObjectURL(file),
        }
        return { ...prev, projects: updatedProjects }
      })
    }
  }

  // Generate portfolio
  const generatePortfolio = (e) => {
    e.preventDefault()

    // Validate final step before generating
    if (validateStep(step)) {
      setGeneratedPortfolio(formData)
    }
  }

  // Validate current step
  const validateStep = (stepNumber) => {
    let isValid = true
    const newErrors = {}

    switch (stepNumber) {
      case 1: // Personal Information
        if (!formData.name.trim()) {
          newErrors.name = "Name is required"
          isValid = false
        }

        if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address"
          isValid = false
        }
        break

      case 3: // Skills
        // Require at least one skill
        if (!formData.skills.some((skill) => skill.trim() !== "")) {
          newErrors.skills = "Please add at least one skill"
          isValid = false
        }
        break

      case 4: // Projects
        // Require at least one project with title
        if (!formData.projects.some((project) => project.title.trim() !== "")) {
          newErrors.projects = "Please add at least one project with a title"
          isValid = false
        }

        // Validate each project
        formData.projects.forEach((project, index) => {
          if (project.title.trim() && !project.description.trim()) {
            newErrors[`projects.${index}.description`] = "Project description is required"
            isValid = false
          }
        })
        break
    }

    setErrors(newErrors)
    return isValid
  }

  // Navigation between steps
  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const prevStep = () => setStep(step - 1)

  // Set theme color
  const handleThemeChange = (theme) => {
    setFormData((prev) => ({
      ...prev,
      theme,
    }))
  }

  // Add a function to handle resume file upload
  const handleResumeUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resumeFile: file,
        resumeFileName: file.name,
      }))
    }
  }

  // Get theme colors
  const getThemeColors = () => {
    switch (formData.theme) {
      case "blue":
        return {
          primary: "#4a90e2",
          secondary: "#5fb0e5",
          gradient: "linear-gradient(135deg, #4a90e2 0%, #5fb0e5 100%)",
        }
      case "green":
        return {
          primary: "#10b981",
          secondary: "#34d399",
          gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
        }
      case "purple":
        return {
          primary: "#8b5cf6",
          secondary: "#a78bfa",
          gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
        }
      case "orange":
        return {
          primary: "#f59e0b",
          secondary: "#fbbf24",
          gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
        }
      case "red":
        return {
          primary: "#ef4444",
          secondary: "#f87171",
          gradient: "linear-gradient(135deg, #ef4444 0%, #f87171 100%)",
        }
      default:
        return {
          primary: "#4a90e2",
          secondary: "#5fb0e5",
          gradient: "linear-gradient(135deg, #4a90e2 0%, #5fb0e5 100%)",
        }
    }
  }

  // Full Website Component (Hashir Shoaib style)
  const FullWebsitePortfolio = () => {
    const themeColors = getThemeColors()
    const [activeSection, setActiveSection] = useState("home")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Handle navigation click
    const handleNavClick = (section) => {
      setActiveSection(section)
      setIsMenuOpen(false)

      // Smooth scroll to section
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }

    // Get social icon component by platform ID
    const getSocialIcon = (platformId) => {
      switch (platformId) {
        case "github":
          return <Github className="w-7 h-7" />
        case "linkedin":
          return <Linkedin className="w-7 h-7" />
        case "twitter":
          return <Twitter className="w-7 h-7" />
        case "facebook":
          return <Facebook className="w-7 h-7" />
        case "instagram":
          return <Instagram className="w-7 h-7" />
        case "website":
          return <Globe className="w-7 h-7" />
        default:
          return <Globe className="w-7 h-7" />
      }
    }

    return (
      <div className="min-h-screen font-sans">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="#home" className="text-xl font-bold" onClick={() => handleNavClick("home")}>
              &lt;{formData.name.split(" ")[0]} /&gt;
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => handleNavClick("projects")}
                className={`${activeSection === "projects" ? "text-blue-500" : "text-gray-700"} hover:text-blue-500`}
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick("skills")}
                className={`${activeSection === "skills" ? "text-blue-500" : "text-gray-700"} hover:text-blue-500`}
              >
                Skills
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className={`${activeSection === "about" ? "text-blue-500" : "text-gray-700"} hover:text-blue-500`}
              >
                About
              </button>
              {formData.resumeFileName && (
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-500"
                  onClick={(e) => {
                    e.preventDefault()
                    alert("In a real environment, this would download or open your resume file.")
                  }}
                >
                  Resume
                </a>
              )}
              <button
                onClick={() => handleNavClick("contact")}
                className={`${activeSection === "contact" ? "text-blue-500" : "text-gray-700"} hover:text-blue-500`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-md text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="space-y-1">
                  <div className="w-6 h-0.5 bg-gray-700"></div>
                  <div className="w-6 h-0.5 bg-gray-700"></div>
                  <div className="w-6 h-0.5 bg-gray-700"></div>
                </div>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 transition-all duration-300 animate-slideDown">
              <button
                onClick={() => handleNavClick("projects")}
                className={`block w-full text-left py-3 px-4 ${
                  activeSection === "projects" ? "text-blue-500" : "text-gray-700"
                } hover:bg-gray-100 rounded-lg mb-1`}
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick("skills")}
                className={`block w-full text-left py-3 px-4 ${
                  activeSection === "skills" ? "text-blue-500" : "text-gray-700"
                } hover:bg-gray-100 rounded-lg mb-1`}
              >
                Skills
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className={`block w-full text-left py-3 px-4 ${
                  activeSection === "about" ? "text-blue-500" : "text-gray-700"
                } hover:bg-gray-100 rounded-lg mb-1`}
              >
                About
              </button>
              {formData.resumeFileName && (
                <a
                  href="#"
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg mb-1"
                  onClick={(e) => {
                    e.preventDefault()
                    alert("In a real environment, this would download or open your resume file.")
                  }}
                >
                  Resume
                </a>
              )}
              <button
                onClick={() => handleNavClick("contact")}
                className={`block w-full text-left py-3 px-4 ${
                  activeSection === "contact" ? "text-blue-500" : "text-gray-700"
                } hover:bg-gray-100 rounded-lg mb-1`}
              >
                Contact
              </button>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden pt-16"
          style={{
            background: themeColors.gradient,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Particle effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="stars"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{formData.name || "Your Name"}</h1>

            {formData.title && <p className="text-xl md:text-2xl text-white/90 mb-8">{formData.title}</p>}

            <div className="flex justify-center space-x-6 mb-10">
              {formData.socialLinks.map(
                (link, index) =>
                  link.platform &&
                  link.url && (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/80"
                    >
                      {getSocialIcon(link.platform)}
                    </a>
                  ),
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleNavClick("about")}
                className="px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-white/90 transition-all"
              >
                More about me
              </button>

              {formData.resumeFileName && (
                <a
                  href="#"
                  className="px-8 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition-all flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault()
                    alert("In a real environment, this would download or open your resume file.")
                  }}
                >
                  <span>View Resume</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {formData.photoPreview && (
                  <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-500">
                    <Image
                      src={formData.photoPreview || "/placeholder.svg"}
                      alt={formData.name}
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}

                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {formData.bio ||
                      "This is where your bio will appear. Write about yourself, your background, interests, and goals."}
                  </p>

                  <div className="mt-6 space-y-2">
                    {formData.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-blue-500" />
                        <a href={`mailto:${formData.email}`} className="text-gray-700 hover:text-blue-500">
                          {formData.email}
                        </a>
                      </div>
                    )}

                    {formData.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-700">{formData.phone}</span>
                      </div>
                    )}

                    {formData.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-700">{formData.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {formData.skills.map(
                (skill, index) =>
                  skill.trim() !== "" && (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <span className="text-lg font-medium text-gray-800">{skill}</span>
                    </div>
                  ),
              )}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {formData.projects.map(
                (project, index) =>
                  project.title.trim() !== "" && (
                    <div
                      key={index}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="h-48 bg-gray-200 relative">
                        {project.imagePreview ? (
                          <Image
                            src={project.imagePreview || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full bg-blue-100 text-blue-500">
                            <span className="text-lg font-medium">{project.title}</span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                        {project.technologies && (
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.split(",").map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                                  {tech.trim()}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-500 hover:text-blue-700"
                          >
                            View Project <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

            <div className="max-w-lg mx-auto text-center">
              <p className="text-lg text-gray-700 mb-8">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>

              <div className="flex justify-center space-x-6 mb-8">
                {formData.socialLinks.map(
                  (link, index) =>
                    link.platform &&
                    link.url && (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-500"
                      >
                        {getSocialIcon(link.platform)}
                      </a>
                    ),
                )}
              </div>

              {formData.email && (
                <a
                  href={`mailto:${formData.email}`}
                  className="px-8 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors inline-block"
                >
                  Email Me
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} {formData.name || "Your Name"}. All rights reserved.
            </p>
          </div>
        </footer>

        {/* CSS for stars effect */}
        <style jsx>{`
          .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            background-image: radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0, 0, 0, 0)),
                              radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0, 0, 0, 0)),
                              radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0, 0, 0, 0)),
                              radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0, 0, 0, 0)),
                              radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0, 0, 0, 0)),
                              radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0, 0, 0, 0));
            background-repeat: repeat;
            background-size: 200px 200px;
            opacity: 0.3;
            animation: stars 5s linear infinite;
          }

          @keyframes stars {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-200px);
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="bg-primary text-white py-3">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services/portfolio-generation" className="hover:underline">
              Portfolio Generation
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Generate</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/services/portfolio-generation" className="flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio Generation
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Create Your Portfolio Website</h1>

        {!generatedPortfolio ? (
          <>
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between max-w-3xl mx-auto">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step >= i ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step > i ? <Check className="w-5 h-5" /> : i}
                    </div>
                    <span className="text-xs mt-2 text-gray-500">
                      {i === 1 ? "Personal" : i === 2 ? "Social" : i === 3 ? "Skills" : i === 4 ? "Projects" : "Theme"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full max-w-3xl mx-auto mt-4">
                <div className="absolute h-2 bg-primary rounded-full" style={{ width: `${(step - 1) * 25}%` }}></div>
              </div>
            </div>

            <form onSubmit={generatePortfolio}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2 flex flex-col items-center justify-center mb-4">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-4">
                          {formData.photoPreview ? (
                            <Image
                              src={formData.photoPreview || "/placeholder.svg"}
                              alt="Profile preview"
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full text-gray-400">
                              <Upload className="w-8 h-8" />
                            </div>
                          )}
                        </div>
                        <label className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/90">
                          Upload Photo
                          <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                        </label>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-2 rounded-lg border ${
                            errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary`}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Professional Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="e.g. Software Engineer"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="e.g. Karachi, Pakistan"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Bio / About Me
                        </label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Write a short bio about yourself..."
                        ></textarea>
                      </div>

                      {/* Resume Upload */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Resume / CV
                        </label>
                        <div className="flex items-center gap-3">
                          <label className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/90 flex items-center gap-2">
                            <Upload className="w-4 h-4" /> Upload Resume
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              className="hidden"
                              onChange={handleResumeUpload}
                            />
                          </label>
                          {formData.resumeFileName && (
                            <span className="text-sm text-gray-600 dark:text-gray-400">{formData.resumeFileName}</span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Social Links */}
                {step === 2 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Social Links</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Add your social media profiles. You can add as many as you want.
                    </p>

                    {formData.socialLinks.map((link, index) => (
                      <div key={index} className="mb-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Platform
                            </label>
                            <select
                              value={link.platform}
                              onChange={(e) => handleSocialLinkChange(index, "platform", e.target.value)}
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                            >
                              <option value="">Select a platform</option>
                              {socialPlatforms.map((platform) => (
                                <option key={platform.id} value={platform.id}>
                                  {platform.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              URL
                            </label>
                            <input
                              type="url"
                              value={link.url}
                              onChange={(e) => handleSocialLinkChange(index, "url", e.target.value)}
                              placeholder={`e.g. https://${link.platform || "example"}.com/username`}
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                          </div>

                          {formData.socialLinks.length > 1 && (
                            <div className="flex items-end">
                              <button
                                type="button"
                                onClick={() => removeItem("socialLinks", index)}
                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => addItem("socialLinks")}
                      className="mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" /> Add Social Link
                    </button>
                  </div>
                )}

                {/* Step 3: Skills */}
                {step === 3 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Skills</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Add your technical and soft skills that are relevant to your field.
                    </p>

                    {errors.skills && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">{errors.skills}</div>}

                    {formData.skills.map((skill, index) => (
                      <div key={index} className="flex gap-2 mb-3">
                        <input
                          type="text"
                          value={skill}
                          onChange={(e) => handleNestedChange("skills", index, "", e.target.value)}
                          placeholder={`Skill ${index + 1} (e.g. JavaScript, Project Management)`}
                          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          required={index === 0} // At least one skill is required
                        />
                        {formData.skills.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeItem("skills", index)}
                            className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => addItem("skills")}
                      className="mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" /> Add Skill
                    </button>
                  </div>
                )}

                {/* Step 4: Projects */}
                {step === 4 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Projects</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Add your notable projects to showcase your work.
                    </p>

                    {errors.projects && (
                      <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">{errors.projects}</div>
                    )}

                    {formData.projects.map((project, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Project Title *
                            </label>
                            <input
                              type="text"
                              value={project.title}
                              onChange={(e) => handleNestedChange("projects", index, "title", e.target.value)}
                              placeholder="e.g. E-commerce Website"
                              className={`w-full px-4 py-2 rounded-lg border ${
                                errors[`projects.${index}.title`]
                                  ? "border-red-500"
                                  : "border-gray-300 dark:border-gray-600"
                              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary`}
                              required={index === 0} // At least one project title is required
                            />
                            {errors[`projects.${index}.title`] && (
                              <p className="mt-1 text-sm text-red-500">{errors[`projects.${index}.title`]}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Technologies Used
                            </label>
                            <input
                              type="text"
                              value={project.technologies}
                              onChange={(e) => handleNestedChange("projects", index, "technologies", e.target.value)}
                              placeholder="e.g. React, Node.js, MongoDB"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Description *
                            </label>
                            <textarea
                              value={project.description}
                              onChange={(e) => handleNestedChange("projects", index, "description", e.target.value)}
                              rows={3}
                              placeholder="Describe your project..."
                              className={`w-full px-4 py-2 rounded-lg border ${
                                errors[`projects.${index}.description`]
                                  ? "border-red-500"
                                  : "border-gray-300 dark:border-gray-600"
                              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary`}
                              required={project.title.trim() !== ""} // Description is required if title is provided
                            />
                            {errors[`projects.${index}.description`] && (
                              <p className="mt-1 text-sm text-red-500">{errors[`projects.${index}.description`]}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Project Link
                            </label>
                            <input
                              type="url"
                              value={project.link}
                              onChange={(e) => handleNestedChange("projects", index, "link", e.target.value)}
                              placeholder="e.g. https://github.com/username/project"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Project Image
                            </label>
                            <div className="flex items-center gap-4">
                              {project.imagePreview ? (
                                <div className="relative w-16 h-16 rounded overflow-hidden bg-gray-200">
                                  <Image
                                    src={project.imagePreview || "/placeholder.svg"}
                                    alt="Project preview"
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded">
                                  <Upload className="w-6 h-6 text-gray-400" />
                                </div>
                              )}
                              <label className="bg-primary text-white px-3 py-1 rounded cursor-pointer hover:bg-primary/90 text-sm">
                                Upload Image
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => handleProjectImageUpload(index, e)}
                                />
                              </label>
                            </div>
                          </div>
                        </div>

                        {formData.projects.length > 1 && (
                          <div className="mt-4 flex justify-end">
                            <button
                              type="button"
                              onClick={() => removeItem("projects", index)}
                              className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                            >
                              Remove
                            </button>
                          </div>
                        )}
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => addItem("projects")}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" /> Add Project
                    </button>
                  </div>
                )}

                {/* Step 5: Theme Selection */}
                {step === 5 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Choose Theme</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Select a color theme for your portfolio website.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div
                        className={`cursor-pointer rounded-lg p-4 flex flex-col items-center ${formData.theme === "blue" ? "ring-2 ring-blue-500" : "hover:bg-gray-50"}`}
                        onClick={() => handleThemeChange("blue")}
                      >
                        <div className="w-16 h-16 rounded-full bg-blue-500 mb-2"></div>
                        <span className="text-sm font-medium">Blue</span>
                      </div>

                      <div
                        className={`cursor-pointer rounded-lg p-4 flex flex-col items-center ${formData.theme === "green" ? "ring-2 ring-green-500" : "hover:bg-gray-50"}`}
                        onClick={() => handleThemeChange("green")}
                      >
                        <div className="w-16 h-16 rounded-full bg-green-500 mb-2"></div>
                        <span className="text-sm font-medium">Green</span>
                      </div>

                      <div
                        className={`cursor-pointer rounded-lg p-4 flex flex-col items-center ${formData.theme === "purple" ? "ring-2 ring-purple-500" : "hover:bg-gray-50"}`}
                        onClick={() => handleThemeChange("purple")}
                      >
                        <div className="w-16 h-16 rounded-full bg-purple-500 mb-2"></div>
                        <span className="text-sm font-medium">Purple</span>
                      </div>

                      <div
                        className={`cursor-pointer rounded-lg p-4 flex flex-col items-center ${formData.theme === "orange" ? "ring-2 ring-orange-500" : "hover:bg-gray-50"}`}
                        onClick={() => handleThemeChange("orange")}
                      >
                        <div className="w-16 h-16 rounded-full bg-orange-500 mb-2"></div>
                        <span className="text-sm font-medium">Orange</span>
                      </div>

                      <div
                        className={`cursor-pointer rounded-lg p-4 flex flex-col items-center ${formData.theme === "red" ? "ring-2 ring-red-500" : "hover:bg-gray-50"}`}
                        onClick={() => handleThemeChange("red")}
                      >
                        <div className="w-16 h-16 rounded-full bg-red-500 mb-2"></div>
                        <span className="text-sm font-medium">Red</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 ${
                    step === 1 ? "invisible" : ""
                  }`}
                >
                  Previous
                </button>

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                  >
                    Next
                  </button>
                ) : (
                  <button type="submit" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                    Generate Portfolio Website
                  </button>
                )}
              </div>
            </form>
          </>
        ) : (
          // Generated Portfolio Website Preview
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Your Portfolio Website is Ready!</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Your professional portfolio website has been generated. You can preview it below or view it in full
                  screen.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <button
                    onClick={() => setShowFullWebsite(true)}
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-4 h-4" /> <span>View Full Website</span>
                  </button>
                  <button
                    onClick={() => setGeneratedPortfolio(null)}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    Edit Portfolio
                  </button>
                </div>
              </div>

              {/* Website Preview Frame */}
              <div className="border-t border-gray-200 dark:border-gray-700">
                <div className="bg-gray-100 dark:bg-gray-700 p-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 text-center text-sm text-gray-500 dark:text-gray-400">
                    {formData.name}'s Portfolio
                  </div>
                </div>
                <div className="h-[600px] overflow-y-auto border border-gray-200 dark:border-gray-700">
                  <FullWebsitePortfolio />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Full Website Modal */}
      {showFullWebsite && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setShowFullWebsite(false)}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="h-screen overflow-y-auto">
            <FullWebsitePortfolio />
          </div>
        </div>
      )}
    </div>
  )
}
