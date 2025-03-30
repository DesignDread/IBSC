"use client";
import React, { useState, useEffect } from 'react';
import Hero from "../../public/Hero.svg"
import Image from 'next/image';
import Home1 from "../../public/Home1.svg"
import Home2 from "../../public/Home2.svg"
import Home3 from "../../public/Home3.svg"
import { motion, AnimatePresence } from 'framer-motion';

export default function BankingCareerHero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.6 + (i * 0.2),
        ease: "easeOut" 
      }
    })
  };
  
  const stripesVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: (i: number) => ({ 
      opacity: 1, 
      scaleX: 1,
      transition: { 
        duration: 0.8, 
        delay: 0.3 + (i * 0.05),
        ease: "easeInOut" 
      }
    })
  };
  
  const videoContainerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.7, 
        delay: 0.5,
        ease: "easeOut" 
      }
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    }
  };
  
  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const
    }
  };
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* Striped background pattern */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="flex flex-col h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex-1 flex">
            </div>
          ))}
        </div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 py-8 mx-auto px-4 md:px-6">
        {/* Heading and subheading */}
        <motion.div 
          className="text-center mb-8 bg-white bg-opacity-90 py-6 md:py-8 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl lg:text-[48px] font-bold text-[#012245] mb-4 px-2"
            variants={headingVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            Launch Your Banking Career in {" "}
            <motion.span 
              className="text-green-600"
              animate={{ 
                color: ["#00893B", "#00a347", "#00893B"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Just 100 Days
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-[48px] text-[#012245] mb-6 md:mb-8 px-2 mx-auto"
            variants={headingVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            Industry-recognized training + BFSI-SSC Certification + 
            <span className="hidden sm:inline"><br/></span>
            <span className="sm:hidden"> </span>
            Guaranteed Placement Support
          </motion.p>
          
          {/* Feature icons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 px-2">
            {[
              { icon: Home1, text: "100-Day Comprehensive Course", index: 0 },
              { icon: Home2, text: "Complete Placement Support", index: 1 },
              { icon: Home3, text: "Alumni in Top Banks", index: 2 }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2 text-sm"
                custom={feature.index}
                variants={featureVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + (index * 0.2), duration: 0.5 }}
                >
                  <Image src={feature.icon} alt='' className="w-6 h-6 sm:w-auto sm:h-auto" />
                </motion.div>
                <span className='text-base sm:text-lg lg:text-[20px] text-[#012245]'>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Responsive video section */}
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6'>
          {/* Left stripes - hidden on small screens */}
          <div className='hidden md:flex flex-col gap-5 w-[552px]'>
            {[...Array(8)].map((_, i) => (
              <motion.div 
                key={i}
                className='h-[24px] w-full bg-gradient-to-r from-[#004165] to-[#00893B]'
                custom={i}
                variants={stripesVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                style={{ originX: 0 }}
              ></motion.div>
            ))}
          </div>

          {/* Top stripes for mobile - shown only on small screens */}
          <motion.div 
            className='flex md:hidden w-full'
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0 }}
          >
            <div className='h-[12px] w-full bg-gradient-to-r from-[#004165] to-[#00893B]'></div>
          </motion.div>
          
          {/* Video thumbnail */}
          <motion.div 
            className="relative mx-auto w-full md:max-w-xl rounded-lg overflow-hidden cursor-pointer shadow-lg" 
            onClick={() => setVideoOpen(true)}
            variants={videoContainerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover="hover"
          >
            <Image
              src={Hero}
              alt="Banking career students"
              className="w-full object-cover"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center"
                animate={pulseAnimation}
              >
                <div className="w-0 h-0 border-t-6 sm:border-t-8 border-b-6 sm:border-b-8 border-t-transparent border-b-transparent border-l-10 sm:border-l-12 border-l-green-600 ml-1"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom stripes for mobile - shown only on small screens */}
          <motion.div 
            className='flex md:hidden w-full'
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 1 }}
          >
            <div className='h-[12px] w-full bg-gradient-to-r from-[#00893B] to-[#f4fbff]'></div>
          </motion.div>
          
          {/* Right stripes - hidden on small screens */}
          <div className='hidden md:flex flex-col gap-5 w-[552px]'>
            {[...Array(8)].map((_, i) => (
              <motion.div 
                key={i}
                className='h-[24px] w-full bg-gradient-to-r from-[#00893B] to-[#004165]'
                custom={i}
                variants={stripesVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                style={{ originX: 1 }}
              ></motion.div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <motion.div 
          className="text-center mt-6 max-w-xl mx-auto bg-white bg-opacity-90 p-4 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <p className="text-[#102245] font-medium text-base sm:text-lg lg:text-[20px]">
            Upskill, grow, and get hired — land your first job and build a 
            stable, successful, and future-ready career in banking.
          </p>
        </motion.div>
      </div>
      
      {/* Video popup modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setVideoOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative bg-black w-full sm:w-4/5 max-w-4xl aspect-video"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.button 
                className="absolute -top-8 sm:-top-10 right-0 text-white text-xl font-bold"
                onClick={() => setVideoOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Close &times;
              </motion.button>
              {/* This would be your actual video player in production */}
              <div className="w-full h-full flex items-center justify-center bg-gray-800">
                <p className="text-white text-center p-4">Video player would appear here.<br/>.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}