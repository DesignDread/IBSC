"use client";
import React, { useState } from 'react';
import { Book, Award, Building } from 'lucide-react';
import Hero from "../../public/Hero.svg"
import Image from 'next/image';
import Home1 from "../../public/Home1.svg"
import Home2 from "../../public/Home2.svg"
import Home3 from "../../public/Home3.svg"
export default function BankingCareerHero() {
  const [videoOpen, setVideoOpen] = useState(false);
  
  return (
    <div className="relative w-full">
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
      <div className="relative z-10 py-8   mx-auto">
        {/* Heading and subheading */}
        <div className="text-center mb-8 bg-white bg-opacity-90 py-8 rounded-lg">
          <h1 className="text-3xl lg:text-[48px] font-bold text-[#012245] mb-4">
            Launch Your Banking Career in <span className="text-green-600">Just 100 Days</span>
          </h1>
          
          <p className="text-xl lg:text-[48px] text-[#012245] mb-8  mx-auto">
            Industry-recognized training + BFSI-SSC Certification + <br/>
            Guaranteed Placement Support
          </p>
          
          {/* Feature icons */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Image src={Home1} alt=''></Image>
              <span className='lg:text-[20px] text-[#012245]'>100-Day Comprehensive Course</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
            <Image src={Home2} alt=''></Image>
              <span className='lg:text-[20px] text-[#012245]'>Complete Placement Support</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
            <Image src={Home3} alt=''></Image>
              <span className='lg:text-[20px] text-[#012245]'>Alumni in Top Banks</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-6'>
        {/* Video thumbnail */}
        <div className='flex flex-col gap-5 w-[552px]'>
        <div className='h-[24px] w-full bg-gradient-to-r from-[#004165] to-[#00893B]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r from-[#004165] to-[#00893B]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r from-[#004165] to-[#00893B]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r from-[#004165] to-[#00893B]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r from-[#004165] to-[#00893B]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r from-[#004165] to-[#00893B]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r from-[#004165] to-[#00893B]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r from-[#262b2f] to-[#00893B]'></div>
        
        
    </div>
        <div className="relative mx-auto max-w-2xl rounded-lg overflow-hidden cursor-pointer shadow-lg" 
             onClick={() => setVideoOpen(true)}>
                
          <Image
            src={Hero}
            alt="Banking career students"
            className="w-full object-cover"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent border-l-12 border-l-green-600 ml-1"></div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 w-[552px]'>
        <div className='h-[24px] w-full bg-gradient-to-r  from-[#00893B] to-[#004165]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r  from-[#00893B] to-[#004165]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r  from-[#00893B] to-[#004165]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r  from bg-[#00893B] to-[#004165]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r  from-[#00893B] to-[#004165]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r  from-[#00893B] to-[#004165]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r  from-[#00893B] to-[#004165]'></div>
        <div className='h-[24px] w-full bg-gradient-to-r  from-[#00893B] to-[#004165]'></div>
        
    </div>
    </div>
        {/* Bottom text */}
        <div className="text-center mt-6 max-w-xl mx-auto bg-white bg-opacity-90 p-4 rounded-lg">
          <p className="text-[#102245] font-medium lg:text-[20px]">
            Upskill, grow, and get hired — land your first job and build a 
            stable, successful, and future-ready career in banking.
          </p>
        </div>
      </div>
      
      {/* Video popup modal */}
      {videoOpen && (
        <div className="fixed inset-0  bg-opacity-75 flex items-center justify-center z-50" onClick={() => setVideoOpen(false)}>
          <div className="relative bg-black w-4/5 max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-10 right-0 text-white text-xl font-bold"
              onClick={() => setVideoOpen(false)}
            >
              Close &times;
            </button>
            {/* This would be your actual video player in production */}
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <p className="text-white text-center p-4">Video player would appear here.<br/>.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}