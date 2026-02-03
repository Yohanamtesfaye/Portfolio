import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BsFillMoonStarsFill, BsArrowUpCircle } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { FaGithub, FaTelegram, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegCopyright } from "react-icons/fa"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useInView } from "react-intersection-observer"

// Import your assets
import resume from "../public/Yohana-Mekuria.pdf"
import me from "../public/Me.png"
import design from "../public/design.png"
import code from "../public/code.png"
import voln from "../public/Voulenteer.png"
import tutor from "../public/tutor.png"
import doorlock from "../public/doorlock.jpg"
import askal from "../public/askal.jpg"
import logo from "../public/logo.jpg"
import hospitality from "../public/hospitality.png"
import lib from "../public/lib.png"
import dev from "../public/dev.png"
import health from "../public/health.jpg"
import zmall from "../public/Zmall.jpg"
import emmacare from "../public/emmacare.jpg"
import kuriftu from "../public/kuriftu.jpg"

// Particle background component
const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5" />
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-teal-500/20 dark:bg-teal-400/20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            animation: `float ${Math.random() * 10 + 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}

// Scroll to top button component
const ScrollToTop = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-teal-500 text-white shadow-lg
                 hover:bg-teal-600 transition-all duration-300 transform hover:scale-110"
    >
      <BsArrowUpCircle size={24} />
    </motion.button>
  )
}

// Loading animation component
const LoadingAnimation = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
          className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500"
        />
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-full mt-4 text-center w-full text-teal-500 font-medium"
        >
          Loading...
        </motion.div>
      </div>
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Initial loading
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  // Intersection observer for sections
  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const services = [
    {
      icon: design,
      title: "Web Development",
      description:
        "Crafting visually stunning digital experiences with React.js, Tailwind, and MERN Stack",
      technologies: ["React.js/ Next.js", "Django", "Node.js", "Express.js", "MongoDb", "MySQL"],
    },
    {
      icon: code,
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications using Dart and Flutter.",
      technologies: ["Dart", "Flutter", "Firebase"],
    },
    {
      icon: voln,
      title: "Volunteering",
      description: "Contributing to the community through various charitable organizations and initiatives.",
      places: ["Askal Charity", "AASTU Charity Club President", "HighSchool Charity"],
    },
    {
      icon: tutor,
      title: "Mentoring",
      description: "Sharing knowledge and guiding aspiring developers through their learning journey.",
      places: ["SheCodes AASTU", "GDG on campus"],
    },
  ]

  const projects = [
    {
      title: "Kuriftu MiniApp",
      image: kuriftu,
      description:
        "Worked on a full-stack Gena discount platform for Kuriftu Resorts, integrating Addis Pay payments, a transportation (ride) system, and an admin dashboard for ticket verification. The platform went live in production and successfully processed 2.5M+ ETB in transactions.",
      reverse: true,
      demo: "https://gwp.kurifturesorts.com/",
    },
    {
      title: "Zmall MiniApp",
      image: zmall,
      description:
        "Worked at ETTA Solutions redesigning the Zmall mini app integrated with Dashen Bank. I built the entire frontend, deployed it within three months, and it now handles several thousand daily users. You can see my work on the mini app.",
      reverse: false,
    },
    {
      title: "Askal Charity Website",
      image: askal,
      description:
        "Designed and developed the official website for Askal Charity to improve their online presence and make donating and information access easier. Implemented multilingual support for 7 languages, a volunteer management system, and a member management system with four distinct roles plus an admin dashboard to manage users, roles, and site content.",
      github: "https://github.com/Yohanamtesfaye/Askal-Charity-Website/",
      demo: "https://askalcharityassociation.org/",
      reverse: true,
    },
    {
      title: "Emma Care Wearable Device",
      image: emmacare,
      description:
        "Developed the complete software stack for a maternal wearable: an AI recommendation engine that advises based on mothers' vital signs, a machine‑learning model that predicts blood pressure from SpO2 and heart rate, a Node.js backend for telemetry, alerts and secure storage, plus Arduino firmware to collect sensor data and stream it in real time. Implemented cloud telemetry, realtime dashboards, and end-to-end secure transmission.",
      github: "",
      demo: "https://emma-care-five.vercel.app",
      reverse: false,
    },
    {
      title: "Health & Pharma",
      image: health,
      description:
        "Collaborated with a team of three to create the website for the Health & Pharma event organized by ALX.",
      github: "",
      demo: "https://healthandpharma.tech",
      reverse: true,
    },
    {
      title: "Hospitality Hackathon 2025",
      image: hospitality,
      description:
        "Worked with a small team to build the official site for Ethiopia's first Hospitality Hackathon, including participant registration and event details.",
      github: "https://github.com/Abrish-21/alx-hackathon-web",
      demo: "https://hospitalityhackathon.et/",
      reverse: false,
    },
    {
      title: "Dev Meetup Website",
      image: dev,
      description:
        "Developed the Dev Meetup website as part of a three-person team, focusing on a clear, user-friendly platform to showcase the event.",
      github: "https://github.com/devmeetup-et/Dev-meetup-3",
      demo: "https://devmeetup.et/",
      reverse: true,
    },
    {
      title: "AASTU Library Management",
      image: lib,
      description:
        "A full-featured library management system for AASTU with analytics, reporting, and bilingual support.",
      github: "https://github.com/Yohanamtesfaye/AASTU-Library-Managment_System.git",
      demo: "https://aastu-library-managment-system.vercel.app/",
      reverse: false,
    },

    {
      title: "Abugida Tutors",
      image: logo,
      description:
        "A platform connecting students with tutors and helping parents find educators for their children. Awarded third place at the GDSC AASTU hackathon.",
      github: "https://github.com/Yohanamtesfaye/Abogida-Tutors",
      demo: "https://abogida.vercel.app/",
      reverse: true,
    },
    {
      title: "AASTU Door Lock",
      image: doorlock,
      description:
        "An integrated door lock system combining Arduino hardware, a React frontend, and a MySQL backend to log entries/exits and support multiple languages.",
      github: "https://github.com/Yohanamtesfaye/AASTU-Door-lock",
      demo: "https://drive.google.com/file/d/1zqlVMF4N5WCNc58FPHCK37kkdhTrIKY-/view?usp=sharing",
      reverse: false,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    // Show success message
    const successMessage = document.createElement("div")
    successMessage.className =
      "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-out"
    successMessage.textContent = "Message sent successfully!"
    document.body.appendChild(successMessage)

    setTimeout(() => {
      successMessage.remove()
    }, 3000)

    // Email logic
    window.location.href = `mailto:yohanatesfaye24@gmail.com?subject=${encodeURIComponent(formData.get("subject"))}&body=${encodeURIComponent(formData.get("message"))}`
  }

  if (isLoading) {
    return <LoadingAnimation />
  }

  return (
    <AnimatePresence>
      <div className={darkMode ? "dark" : ""}>
        <ParticleBackground />
        <ScrollToTop isVisible={showScrollTop} />

        {/* Main content */}
        <main className="relative bg-white dark:bg-gray-900 min-h-screen transition-colors duration-500">
          {/* Navigation */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
          >
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex justify-between items-center">
                <motion.h1
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 text-transparent bg-clip-text"
                >
                  Portfolio
                </motion.h1>
                <div className="flex items-center gap-6">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <BsFillMoonStarsFill className="text-2xl text-gray-600 dark:text-gray-400" />
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={resume}
                    download="Yohana_Resume.pdf"
                    className="relative inline-flex items-center px-6 py-2 overflow-hidden text-white rounded-full
                             group bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-teal-500
                             transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    Download CV
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.nav>

          {/* Hero Section */}
          <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto px-6 text-center relative z-10"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-transparent bg-clip-text">
                  Yohana Mekuria
                </span>
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
              >
                Full-stack Developer Specializing in Front-End Development
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
              >
                Committed freelancer adept at developing innovative solutions. Specializing in frontend development with
                a strong focus on client satisfaction. Passionate about delivering quality.
              </motion.p>

              {/* Social Links */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex justify-center gap-8"
              >
                {[
                  { icon: <AiFillLinkedin size={32} />, href: "https://www.linkedin.com/in/yohana-mekuria-90607a2ab/" },
                  { icon: <FaGithub size={32} />, href: "https://github.com/Yohanamtesfaye" },
                  { icon: <FaTelegram size={32} />, href: "https://t.me/YohanaETH" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.2,
                      color: "#14b8a6",
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400
                             transition-colors duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.8,
                }}
                className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mt-16"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 animate-spin-slow" />
                <div className="absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-gray-900">
                  <img
                    src={me || "/placeholder.svg"}
                    alt="Yohana Mekuria"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-16"
              >
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-transparent bg-clip-text">
                  Services I Offer
                </span>
              </motion.h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden
                              hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-20 h-20 mx-auto mb-6"
                      >
                        <img
                          src={service.icon || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{service.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                      <div className="space-y-2">
                        <h5 className="text-teal-600 dark:text-teal-400 font-medium">
                          {service.technologies ? "Technologies" : "Places"}
                        </h5>
                        <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                          {(service.technologies || service.places).map((item, i) => (
                            <li key={i} className="flex items-center">
                              <span className="w-2 h-2 rounded-full bg-teal-500 mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-16"
              >
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-transparent bg-clip-text">
                  Featured Projects
                </span>
              </motion.h3>

              <div className="space-y-20">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className={`flex flex-col ${project.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} 
                               gap-8 items-center bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden
                               hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className="w-full lg:w-1/2 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 p-8">
                      <motion.h4
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-4"
                      >
                        {project.title}
                      </motion.h4>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-600 dark:text-gray-400 mb-8"
                      >
                        {project.description}
                      </motion.p>
                      <div className="flex gap-4">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full
                                   hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 shadow-lg"
                        >
                          View GitHub
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 border-2 border-teal-500 text-teal-500 rounded-full
                                   hover:bg-teal-500 hover:text-white transition-all duration-300"
                        >
                          Live Demo
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h3 className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-transparent bg-clip-text">
                    Contact Me
                  </span>
                </h3>
                <p className="text-xl text-teal-600 dark:text-teal-400">Get in touch</p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {[
                    { icon: <FaUser size={24} />, label: "Name", value: "Yohana Mekuria" },
                    { icon: <FaMapMarkerAlt size={24} />, label: "Address", value: "Addis Ababa, Ethiopia" },
                    { icon: <FaEnvelope size={24} />, label: "Email", value: "yohanatesfaye24@gmail.com" },
                    { icon: <FaPhone size={24} />, label: "Phone", value: "+251-900118533" },
                  ].map((item, index) => (
                    <motion.div key={index} whileHover={{ x: 10 }} className="flex items-center gap-6">
                      <div
                        className="w-12 h-12 flex items-center justify-center rounded-full
                                    bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                        <p className="text-lg text-gray-800 dark:text-white">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
                                 bg-white dark:bg-gray-900 text-gray-800 dark:text-white
                                 focus:ring-2 focus:ring-teal-500 outline-none transition-all duration-300"
                      />
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
                                 bg-white dark:bg-gray-900 text-gray-800 dark:text-white
                                 focus:ring-2 focus:ring-teal-500 outline-none transition-all duration-300"
                      />
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
                                 bg-white dark:bg-gray-900 text-gray-800 dark:text-white
                                 focus:ring-2 focus:ring-teal-500 outline-none transition-all duration-300"
                      />
                      <motion.textarea
                        whileFocus={{ scale: 1.02 }}
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
                                 bg-white dark:bg-gray-900 text-gray-800 dark:text-white
                                 focus:ring-2 focus:ring-teal-500 outline-none transition-all duration-300"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500
                               text-white font-medium rounded-lg shadow-lg
                               hover:from-cyan-500 hover:to-teal-500 transition-all duration-300"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-teal-500 to-cyan-500 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto px-6 flex items-center justify-center text-white gap-2"
          >
            <p>
              Created by{" "}
              <a
                href="https://www.linkedin.com/in/yohana-mekuria-90607a2ab/"
                className="font-medium hover:text-gray-100 transition-colors duration-300"
              >
                Yohana
              </a>{" "}
              |
            </p>
            <FaRegCopyright className="w-4 h-4" />
            <p>2024 All rights reserved</p>
          </motion.div>
        </footer>
      </div>
    </AnimatePresence>
  )
}

export default App

// Add these styles to your CSS
const styles = `
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-fade-in-out {
  animation: fadeInOut 3s ease-in-out;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(-20px); }
  15% { opacity: 1; transform: translateY(0); }
  85% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
}
`

