"use client";
import React from 'react';
import Certificate from '../../public/Certificate.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BankingCertificateAd() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.3,
        duration: 0.5 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };




  const bulletPointVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 0px 8px rgba(0, 137, 59, 0.6)" 
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className='max-w-6xl mx-auto pt-12 text-[#012245]' variants={itemVariants}>
        <motion.h1 
          className='text-3xl lg:text-[70px]'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get Certified & Secure Your Future in Banking
        </motion.h1>
        <motion.p 
          className='text-lg lg:text-[20px] mt-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Yes! Upon successful completion of our Professional Certificate Program in Retail Banking, you will receive a prestigious certification from IBSC, in association with BFSI-Sector Skills Council (Banking, Financial Services & Insurance Sector Skill Council).
        </motion.p>
      </motion.div>
      <div className="flex flex-col md:flex-row p-4 rounded-lg mx-auto">
        {/* Left side - Certificate image */}
        <div className="md:w-1/2 flex justify-center items-center p-2">
          <motion.div
            initial="initial"
            animate="animate"
            // variants={floatVariants}
            whileHover={{ 
              rotate: [0, 2, 0, -2, 0],
              transition: { duration: 0.5 }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src={Certificate} alt="Certificate" className="w-full h-auto max-w-sm" priority />
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Information */}
        <motion.div 
          className="md:w-1/2 p-4 flex flex-col justify-between"
          variants={itemVariants}
        >
          <div>
            <motion.h2 
              className="text-lg lg:text-[30px] font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Why IBSC Certification?
            </motion.h2>
            <motion.ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="mr-2 font-bold"
                  variants={bulletPointVariants}
                  initial="initial"
                  animate="animate"
                >
                  •
                </motion.div>
                <div>
                  <motion.span 
                    className="font-semibold lg-text-[22px]"
                    initial={{ color: "#012245" }}
                    whileHover={{ color: "#00893B" }}
                  >
                    Recognition by BFSI-SSC
                  </motion.span>
                  {" – Get a recognized certification."}
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="mr-2 font-bold"
                  variants={bulletPointVariants}
                  initial="initial"
                  animate="animate"
                >
                  •
                </motion.div>
                <div>
                  <motion.span 
                    className="font-semibold lg-text-[22px]"
                    initial={{ color: "#012245" }}
                    whileHover={{ color: "#00893B" }}
                  >
                    Boost Your Employability
                  </motion.span>
                  {" – Stand out in the banking job market."}
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="mr-2 font-bold"
                  variants={bulletPointVariants}
                  initial="initial"
                  animate="animate"
                >
                  •
                </motion.div>
                <div>
                  <motion.span 
                    className="font-semibold lg-text-[22px]"
                    initial={{ color: "#012245" }}
                    whileHover={{ color: "#00893B" }}
                  >
                    Industry-Relevant Training
                  </motion.span>
                  {" – Practical learning designed for real-world banking careers."}
                </div>
              </motion.li>
            </motion.ul>
            
            <motion.p 
              className="mt-6 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Your journey to a secure banking career starts here!
            </motion.p>
          </div>
          
          <div className="mt-4">
            <motion.button 
              className="bg-gradient-to-r from-[#004165] to-[#00893B] text-white py-2 px-6 rounded-full font-medium transition duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                backgroundSize: "200% 200%",
              }}
              initial="initial"
              animate="animate"
            >
              Get Certified. Secure Your Future!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}