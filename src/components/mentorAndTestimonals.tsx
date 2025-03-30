"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Logo from "../../public/kotakLogo.svg"
import TestimonalPerson from "../../public/TestimonalPerson.svg"
import TestimonalHero from "../../public/TestimonalHero.svg"
import Mentor1 from "../../public/Mentor1.svg"
import Mentor2 from "../../public/Mentor2.svg"
import Mentor3 from "../../public/Mentor3.svg"
import MainLogo from "../../public/IBSC_logo.svg"

export default function TopMentors() {
  // Sample data for the mentors
  const mentorsData = [
    {
      name: "Aakash Sharma",
      title: "Banking Operations Expert",
      description:
        "Over 15 years of experience in banking operations and financial management across multiple banking sectors.",
      image: Mentor1,
      achievements: "Led digital transformation at HDFC Bank",
      expertise: ["Risk Management", "Digital Banking", "Regulatory Compliance"],
    },
    {
      name: "Priya Patel",
      title: "Investment Banking Specialist",
      description:
        "Former VP at Goldman Sachs with expertise in investment banking, portfolio management, and financial analysis.",
      image: Mentor2,
      achievements: "Managed portfolios worth ₹500+ crores",
      expertise: ["Portfolio Management", "Financial Analysis", "Investment Strategy"],
    },
    {
      name: "Vikram Malhotra",
      title: "Risk Management Expert",
      description:
        "Certified risk manager with experience in regulatory compliance, fraud detection, and risk mitigation strategies.",
      image: Mentor3,
      achievements: "Reduced fraud incidents by 40% at Axis Bank",
      expertise: ["Fraud Detection", "Risk Mitigation", "Compliance"],
    },
    {
      name: "Sunita Reddy",
      title: "Digital Banking Consultant",
      description: "Pioneered digital transformation initiatives at major banks and fintech companies across Asia.",
      image:Mentor1,
      achievements: "Launched 3 successful fintech products",
      expertise: ["UX Design", "Mobile Banking", "Payment Systems"],
    },
    {
      name: "Rajesh Kumar",
      title: "Corporate Banking Advisor",
      description: "Specializes in corporate banking solutions, trade finance, and business lending structures.",
      image: Mentor3,
      achievements: "Facilitated loans worth ₹1000+ crores",
      expertise: ["Trade Finance", "Business Lending", "Corporate Solutions"],
    },
  ]

  // Sample data for testimonials
  const testimonialsData = [
    {
      name: "Ankit Verma",
      content:
        "The mentorship I received at IBSC transformed my career path. I gained practical skills and industry insights that helped me secure a position at HDFC Bank.",
      image: TestimonalPerson,
      position: "Assistant Manager, HDFC Bank",
      package: "8.5 LPA",
    },
    {
      name: "Meera Singh",
      content:
        "The structured curriculum and experienced mentors made a huge difference. I was able to transition from a non-finance background to banking seamlessly.",
      image: "/placeholder.svg?height=40&width=40",
      position: "Credit Analyst, ICICI Bank",
      package: "9.2 LPA",
    },
    {
      name: "Dev Patel",
      content:
        "IBSC's industry connections were invaluable. Their placement assistance helped me land my dream job at Axis Bank with a competitive package.",
      image: "/placeholder.svg?height=40&width=40",
      position: "Risk Analyst, Axis Bank",
      package: "10.1 LPA",
    },
    {
      name: "Neha Gupta",
      content:
        "The hands-on training modules prepared me for real banking scenarios. I now work at ICICI Bank and apply what I learned daily.",
      image: "/placeholder.svg?height=40&width=40",
      position: "Relationship Manager, ICICI Bank",
      package: "9.8 LPA",
    },
    {
      name: "Suresh Iyer",
      content:
        "The mentors were always available for doubt clearing and provided personalized guidance. This support system was crucial for my success.",
      image: "/placeholder.svg?height=40&width=40",
      position: "Banking Associate, Yes Bank",
      package: "8.9 LPA",
    },
  ]

  // Other configuration
  const title = "Our Top Mentors"
  const subtitle = "All our mentors are industry experts with 10+ years of banking experience"
  const buttonText = "Talk with mentors now"
//   const averageSalary = "9.6 LPA"
//   const salaryCardImage = "/placeholder.svg?height=100&width=100"
//   const salaryCardName = "Rahul Gupta"

  // Refs for scroll animations
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const headerControls = useAnimation()

  const mentorsRef = useRef(null)
  const mentorsInView = useInView(mentorsRef, { once: true, amount: 0.1 })
  const mentorsControls = useAnimation()

  const testimonialsRef = useRef(null)
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.1 })
  const testimonialsControls = useAnimation()

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible")
    }
    if (mentorsInView) {
      mentorsControls.start("visible")
    }
    if (testimonialsInView) {
      testimonialsControls.start("visible")
    }
  }, [headerInView, mentorsInView, testimonialsInView, headerControls, mentorsControls, testimonialsControls])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          },
        }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
      >
        <div>
          <h2 className="text-3xl font-bold lg:text-[48px] text-[#012245] mb-2">{title}</h2>
          <p className="text-sm text-[#012245] lg:text-[20px]  max-w-md">{subtitle}</p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="mt-4 md:mt-0 bg-gradient-to-r from-[#004165] to-[#00893B] p-4  text-white rounded-full px-6">
            {buttonText}
          </Button>
        </motion.div>
      </motion.div>

      {/* Mentors Grid */}
      <motion.div
        ref={mentorsRef}
        initial="hidden"
        animate={mentorsControls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {mentorsData.map((mentor, index) => (
          <div key={`mentor-wrapper-${index}`}>
            <MentorCard key={`mentor-${index}`} mentor={mentor} index={index} />
            <div className="p-3 bg-white rounded flex-1 flex flex-col">
              <h3 className="font-bold text-[#0a2240] text-lg">{mentor.name}</h3>
              <p className="text-sm text-gray-600 font-medium">{mentor.title}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Testimonials Section */}
      {testimonialsData.length > 0 && (
        <motion.div
          ref={testimonialsRef}
          initial="hidden"
          animate={testimonialsControls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
          className="mb-8"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-2xl lg:text-[30px] text-[#012245] mb-2">Hear it From Them</h2>
            <div className="flex items-center mb-8">
              <h3 className="text-lg font-bold text-[#012245] lg:text-[48px] mr-2">Ambitious People</h3>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 2, duration: 0.5 }}
              >
                <Heart className="w-10 h-10 fill-red-500 text-red-500" />
              </motion.div>
              <span className="font-bold text-[#012245] lg:text-[48px] ml-1">IBSC</span>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={`testimonial-${index}`} testimonial={testimonial} index={index} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Testimonial 4 */}
            {testimonialsData.length > 3 && <TestimonialCard testimonial={testimonialsData[3]} index={3} />}

            {/* LPA Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.4,
                  },
                },
              }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#0a5c7a] rounded-lg p-6 text-white flex flex-col relative"
              style={{
                backgroundImage: `url(${TestimonalHero.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}

            >
              
              
            </motion.div>

            {/* Testimonial 5 */}
            {testimonialsData.length > 4 && <TestimonialCard testimonial={testimonialsData[4]} index={4} />}
          </div>
        </motion.div>
      )}
    </div>
  )
}

// Mentor Card Component with 3D Flip Animation
interface Mentor {
  name: string;
  title: string;
  description: string;
  image: string;
  achievements: string;
  expertise: string[];
}

function MentorCard({ mentor }: { mentor: Mentor; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        },
      }}
      className="perspective-1000 h-[350px] w-full"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div
          className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="bg-gradient-to-t from-[#004165] to-[#00893B]  h-full flex flex-col">
            <div className="relative h-full w-full mb-3">
              <Image src={mentor.image || "/placeholder.svg"} alt={mentor.name} fill className="object-cover rounded" />
            </div>
           
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute w-full h-full backface-hidden bg-[white] text-[#004165] border-6 border-[#00843D] p-6 rounded-lg shadow-lg flex flex-col justify-center items-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
       <Image src={MainLogo} alt=""
       ></Image>
          {/* <div className="mb-4">
            <p className="text-xs opacity-90">{mentor.description}</p>
          </div> */}
                <h1 className="bg-gradient-to-t  from-[#004165] to-[#00893B] bg-clip-text font-bold text-[20px] text-transparent">{mentor.title}</h1>
          <div className="flex-1">

            <ul className="text-[20px] space-y-1">
              {mentor.expertise.map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#00843D] rounded-full mr-1.5"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            {/* <Button size="sm" className="w-full bg-[#00843D] hover:bg-[#006e33] text-white">
              Connect Now
            </Button> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Testimonial Card Component
// Testimonial interface
interface Testimonial {
  name: string;
  content: string;
  image: string;
  position: string;
  package: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        },
      }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white h-[350px] flex flex-col justify-evenly items-center rounded-3xl border border-gray-200 p-4 relative"
    >
      <Image src={Logo} alt="logo" className="absolute right-0 top-0"></Image>
      <p className="text-[18px] text-gray-600 mb-4 mt-2">{testimonial.content}</p>
      <div className="flex items-center  w-full justify-between">
        <div className="flex items-center">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <span className="text-[20px] font-medium block">{testimonial.name}</span>
            <span className="text-[10px] text-gray-500">{testimonial.position}</span>
          </div>
        </div>
        <div className="bg-[#004165] text-white text-xs px-2 py-1 rounded">{testimonial.package}</div>
      </div>
    </motion.div>
  )
}

