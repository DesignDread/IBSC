'use client'

import React, { useState, useEffect, useRef } from 'react';

export default function ProfessionalFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeItems, setActiveItems] = useState<number[]>([]);
  const sectionRef = useRef(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const faqs = [
    {
      question: "Who can enroll in IBSC courses?",
      answer: "IBSC courses are open to anyone interested in banking and finance. Whether you are a beginner looking to start a career or a professional seeking to enhance your skills, our courses are designed to accommodate a variety of educational and professional backgrounds."
    },
    {
      question: "Is the certification recognized?",
      answer: "Yes, the IBSC certification is recognized by the banking industry and BFSI-SSC (Banking, Financial Services and Insurance Sector Skill Council). Our certifications are valued by employers across the banking and financial services sector."
    },
    {
      question: "How long is the Retail Banking course?",
      answer: "The Retail Banking course is a comprehensive 100-day program designed to equip you with all the necessary skills and knowledge required for a successful career in retail banking."
    },
    {
      question: "Does IBSC provide placement assistance?",
      answer: "Yes, IBSC provides complete placement assistance to all students. We have partnerships with top banks and financial institutions, and our dedicated placement cell works to connect students with suitable job opportunities."
    },
    {
      question: "Are classes online or offline?",
      answer: "IBSC offers both online and offline classes to accommodate different learning preferences. You can choose the mode that works best for your schedule and learning style."
    },
    {
      question: "How do I enroll in the program?",
      answer: "Enrolling in an IBSC program is simple. You can apply online through our website, call our admissions office, or visit our campus in person. Our team will guide you through the application process and answer any questions you may have."
    }
  ];

  // Setup intersection observer for the entire section
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          sectionObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Setup individual observers for each FAQ item
  useEffect(() => {
    const itemObservers: IntersectionObserver[] = [];
    
    faqRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setActiveItems(prev => [...prev, index]);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
      );
      
      observer.observe(ref);
      itemObservers.push(observer);
    });
    
    return () => {
      itemObservers.forEach((observer, index) => {
        if (faqRefs.current[index]) {
          observer.unobserve(faqRefs.current[index]);
        }
      });
    };
  }, [faqRefs.current.length]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="relative w-full py-16 px-4 overflow-hidden bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Heading with animation */}
        <h2 
          className={`text-2xl md:text-3xl lg:text-[70px] font-bold text-center text-[#012245] mb-10 relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'
          }`}
        >
          <span className="relative">
            Frequently Asked Questions
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-green-600 transition-all duration-1500 ease-out ${
              isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}></span>
          </span>
        </h2>
        
        {/* FAQ items with staggered entrance */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeItems.includes(index);
            const delay = `${index * 150}ms`;
            
            return (
              <div 
                key={index}
                ref={(el: HTMLDivElement | null) => { faqRefs.current[index] = el; }}
                className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index ? 'bg-blue-50 border-blue-200 shadow-md' : 'bg-white shadow-sm hover:shadow'
                } ${
                  isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
                }`}
                style={{ transitionDelay: delay }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`font-medium transition-colors duration-300 ${
                    openIndex === index ? 'text-[#012245]' : 'text-[#012245]'
                  }`}>{faq.question}</span>
                  
                  <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                    openIndex === index ? 'bg-blue-100 text-[#012245] rotate-180' : 'bg-gray-100 text-gray-600 rotate-0'
                  }`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                <div 
                  id={`faq-answer-${index}`}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? '300px' : '0px',
                    opacity: openIndex === index ? 1 : 0,
                    transform: openIndex === index ? 'translateY(0)' : 'translateY(-8px)'
                  }}
                >
                  <div className="px-6 pb-5 border-t border-gray-100 pt-3">
                    <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Decorative elements that animate into view */}
      {/* <div className={`absolute top-0 left-0 w-64 h-64 rounded-full bg-[#012245] opacity-5 transition-all duration-1500 ${
        isVisible ? 'transform translate-y-0 scale-100' : 'transform -translate-y-full scale-0'
      }`} style={{ transitionDelay: '200ms' }}></div>
      
      <div className={`absolute bottom-0 right-0 w-80 h-80 rounded-full bg-green-600 opacity-5 transition-all duration-1500 ${
        isVisible ? 'transform translate-y-0 scale-100' : 'transform translate-y-full scale-0'
      }`} style={{ transitionDelay: '500ms' }}></div>
      
      <div className={`absolute top-1/4 right-10 w-20 h-20 rounded-full bg-yellow-400 opacity-5 transition-all duration-1500 ${
        isVisible ? 'transform scale-100' : 'transform scale-0'
      }`} style={{ transitionDelay: '700ms' }}></div> */}
    </div>
  );
}