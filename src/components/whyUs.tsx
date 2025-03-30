"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Who1 from "../../public/Who1.svg"
import Who2 from "../../public/Who2.svg"
import Who3 from "../../public/Who3.svg"
import Who4 from "../../public/Who4.svg"
import Who5 from "../../public/Who5.svg"
import Why1 from "../../public/Why1.svg"
import Why2 from "../../public/Why2.svg"
import Why3 from "../../public/Why3.svg"
import Why4 from "../../public/Why4.svg"
import Why5 from "../../public/Why5.svg"
import Why6 from "../../public/Why6.svg"
import Alumni1 from "../../public/Alumni1.svg"
import Alumni2 from "../../public/Alumni2.svg"
import Alumni3 from "../../public/Alumni3.svg"
import Alumni4 from "../../public/Alumni4.svg"
import Alumni5 from "../../public/Alumni5.svg"
import Alumni6 from "../../public/Alumni6.svg"
import Alumni7 from "../../public/Alumni7.svg"

export default function IBSCFeatures() {
  const alumniRef = useRef<HTMLDivElement | null>(null);
  const whyRef = useRef<HTMLDivElement | null>(null);
  const whoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element: HTMLElement | null): boolean => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when element is visible
            if (entry.target.classList.contains('alumni-section')) {
              entry.target.classList.add('animate-section');
              const logos = entry.target.querySelectorAll('.alumni-logo');
              logos.forEach((logo, index) => {
                setTimeout(() => {
                  logo.classList.add('animate-logo');
                }, index * 150);
              });
            }
            
            if (entry.target.classList.contains('why-feature')) {
              const index = parseInt((entry.target as HTMLElement).dataset.index || "0");
              setTimeout(() => {
                entry.target.classList.add('animate-feature');
              }, index * 100);
            }
            
            if (entry.target.classList.contains('who-card')) {
              const index = parseInt((entry.target as HTMLElement).dataset.index || "0");
              setTimeout(() => {
                entry.target.classList.add('animate-card');
              }, index * 150);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Get all elements to animate
    const animElements = document.querySelectorAll('.animate-on-scroll');
    animElements.forEach((el) => {
      observer.observe(el);
    });

    // Scroll trigger handler
    const handleScroll = () => {
      const sections = [
        { ref: alumniRef.current, class: 'alumni-section' },
        { ref: whyRef.current, class: 'why-section' },
        { ref: whoRef.current, class: 'who-section' }
      ];

      sections.forEach((section) => {
        if (isInViewport(section.ref as HTMLElement)) {
          section.ref?.classList.add('section-visible');
        }
      });
    };

    // Initial check and scroll listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // Adding hover animations
    const buttons = document.querySelectorAll('.animated-button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.classList.add('button-hover');
      });
      button.addEventListener('mouseleave', () => {
        button.classList.remove('button-hover');
      });
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Styling for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes floatAnimation {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 137, 59, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(0, 137, 59, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 137, 59, 0);
          }
        }
        
        .animate-section {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-logo {
          opacity: 0;
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .animate-feature {
          opacity: 0;
          animation: fadeInUp 0.7s ease-out forwards;
        }
        
        .animate-card {
          opacity: 0;
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .section-visible .section-title {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .floating-animation {
          animation: floatAnimation 6s ease-in-out infinite;
        }
        
        .gradient-text {
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }
        
        .button-hover {
          animation: pulseGlow 1.5s infinite;
          transform: scale(1.05);
          transition: all 0.3s ease;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Alumni Section */}
      <div ref={alumniRef} className="py-4 sm:py-6 md:py-8 bg-white text-center alumni-section animate-on-scroll relative overflow-hidden">
        {/* <div className="absolute w-full h-2 top-0 left-0 bg-gradient-to-r from-[#004165] to-[#00893B] opacity-20"></div> */}
        <h3 className="text-base sm:text-lg lg:text-lg font-medium text-center mb-3 sm:mb-4 md:mb-6 px-4 section-title opacity-0 lg:text-[32px]" style={{ animation: "fadeInUp 0.8s ease-out 0.2s forwards" }}>Our Alumni Works In</h3>
        <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:space-x-4 md:flex-nowrap">
          {[Alumni1, Alumni2, Alumni3, Alumni4, Alumni5, Alumni6, Alumni7].map((logo, index) => (
            <div key={index} className="alumni-logo opacity-0 transition-all duration-300 hover:scale-110" style={{ transitionDelay: `${index * 0.1}s` }}>
              <Image src={logo} alt={`Alumni logo ${index + 1}`} className="h-8 sm:h-9 md:h-auto w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose IBSC Section */}
      <div ref={whyRef} className="py-6 sm:py-8 md:py-12 bg-white why-section animate-on-scroll">
        <div className="section-title opacity-0" style={{ animation: "fadeInUp 0.8s ease-out 0.4s forwards" }}>
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-center mb-6 sm:mb-8 md:mb-12 lg:text-[48px] px-4 gradient-text bg-gradient-to-r from-[#004165] to-[#00893B] bg-clip-text text-transparent">Why Choose IBSC?</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
          {[
            { img: Why1, title: "Industry-Relevant", subtitle: "Training", text: "Gain practical knowledge and hands-on experience to thrive in the banking sector.", size: "lg:text-[28px]" },
            { img: Why2, title: "Prestigious", subtitle: "Certification", text: "Earn a certificate that validates your expertise and helps you stand in the job market.", size: "lg:text-[28px]" },
            { img: Why3, title: "100 Day Career", subtitle: "Oriented Program", text: "A structured curriculum designed to make you job-ready in just 100 days.", size: "lg:text-[23px]" },
            { img: Why4, title: "100% Placement", subtitle: "Support", text: "Get access to job opportunities and guidance to kickstart your banking career.", size: "lg:text-[23px]" },
            { img: Why5, title: "Expert Faculty", subtitle: "& Mentorship", text: "Learn from experienced banking professionals and receive continuous career support.", size: "lg:text-[23px]" },
            { img: Why6, title: "Affiliation", subtitle: "with Top Banks", text: "Benefit from strong industry connections and placement tie-ups with leading banks.", size: "lg:text-[23px]" }
          ].map((feature, index) => (
            <div key={index} className="why-feature animate-on-scroll card-hover p-3 sm:p-4 md:p-0 flex flex-col items-center justify-center" data-index={index}>
              <div className="mb-2 sm:mb-3 md:mb-4 floating-animation" style={{ animationDelay: `${index * 0.5}s` }}>
                <Image src={feature.img} alt={feature.title} className="h-12 sm:h-14 md:h-auto mx-auto w-auto object-contain transform transition-transform duration-700" />
              </div>
              <h3 className={`text-lg sm:text-xl ${feature.size} font-medium mb-1 sm:mb-2`}>
                <span className="bg-gradient-to-r from-[#004165] to-[#00893B] bg-clip-text text-transparent gradient-text">{feature.title}</span> {feature.subtitle}
              </h3>
              <p className="text-xs sm:text-sm lg:text-sm text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 px-4">
          <Button className="bg-teal-700 hover:bg-teal-800 rounded-full px-6 sm:px-7 md:px-8 py-2 text-sm md:text-base text-white animated-button relative overflow-hidden transition-all duration-300">
            <span className="relative z-10">Join Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#004165] to-[#00893B] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          </Button>
        </div>
      </div>

      {/* Who Is IBSC For Section */}
      <div ref={whoRef} className="py-6 sm:py-8 md:py-12 bg-gradient-to-r from-[#004165] to-[#00893B] text-white who-section animate-on-scroll">
        <div className="section-title opacity-0" style={{ animation: "fadeInUp 0.8s ease-out 0.6s forwards" }}>
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-center mb-6 sm:mb-8 md:mb-12 px-4 lg:text-[48px]">Who Is IBSC For?</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto px-4 sm:px-6">
          {[
            { img: Who1, title: "Fresh Graduates", text: "Struggling to land a job? Get the skills and knowledge to kickstart your career in banking." },
            { img: Who2, title: "Aspiring Bankers", text: "Turn your ambition into a reality with expert-led training in all aspects of modern banking." },
            { img: Who3, title: "Students Seeking Practical Learning", text: "Get hands-on experience in real-world banking regimes that employers value." },
            { img: Who4, title: "Job Seekers", text: "Enhance your resume with relevant skills and certification to stand out in banking interviews." },
            { img: Who5, title: "Career Changers", text: "Looking to switch industries? Our structured program makes transitioning into banking seamless." }
          ].map((card, index) => (
            <div key={index} className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 rounded-lg who-card animate-on-scroll card-hover" data-index={index}>
              <div className="flex flex-col items-start mb-2 sm:mb-3 md:mb-4">
                <div className="mb-1 sm:mb-2 floating-animation" style={{ animationDelay: `${index * 0.3}s` }}>
                  <Image src={card.img} alt={card.title} className="h-8 sm:h-10 md:h-auto w-auto object-contain" />
                </div>
                <h3 className="font-medium text-lg sm:text-xl lg:text-[28px]">{card.title}</h3>
              </div>
              <p className="text-xs sm:text-sm lg:text-sm text-gray-600">{card.text}</p>
            </div>
          ))}

          {/* Card 6 (Special) */}
          <div className="p-2 sm:p-2 md:p-2 rounded-lg who-card animate-on-scroll" data-index="5">
            <div className="flex flex-col h-full w-full items-start gap-6 sm:gap-16 md:gap-32 justify-between px-4">
              <div className="text-white mb-0 md:mb-0 md:mr-6 max-w-xs floating-animation" style={{ animationDelay: "1.5s" }}>
                <p className="text-sm sm:text-base lg:text-[25px]">
                  Bridge the gap between education and employment with <span className="font-bold">IBSC!</span>
                </p>
              </div>
              <Button className="bg-white hover:bg-gray-100 text-teal-700 rounded-full px-5 sm:px-6 md:px-8 py-2 text-sm md:text-base animated-button relative overflow-hidden transition-all duration-300">
                <span className="relative z-10">Apply Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#004165] to-[#00893B] opacity-0 transition-opacity duration-300 hover:opacity-10"></span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}