"use client";
import React from 'react';
import  Certificate  from '../../public/Certificate.svg';
import Image from 'next/image';

export default function BankingCertificateAd() {
  return (
    <div>
      <div className='max-w-6xl mx-auto text-[#012245]'>
        <h1 className=' text-3xl lg:text-[48px]'>
        Get Certified & Secure Your Future in Banking
        </h1>
        <p className='text-lg lg:text-[20px] mt-4'>
        Yes! Upon successful completion of our Professional Certificate Program in Retail Banking, you will receive a prestigious certification from IBSC, in association with BFSI-Sector Skills Council (Banking, Financial Services & Insurance Sector Skill Council).
        </p>
      </div>
      <div className="flex flex-col md:flex-row  p-4 rounded-lg  mx-auto">
      {/* Left side - Certificate image */}
      <div className="md:w-1/2 flex justify-center items-center p-2"
      >
        <Image src={Certificate} alt="Certificate" className="w-full h-auto max-w-sm" priority>

        </Image>
        {/* <div className="relative">
          <div className="border-2 border-blue-700 p-4 rounded bg-white">
            <div className="text-center">
              <img src="/api/placeholder/150/50" alt="Institute Logo" className="mx-auto" />
              <div className="text-xl font-semibold text-blue-800 mt-4">Certificate</div>
              <div className="text-blue-500 text-sm my-2">$950</div>
              <div className="text-gray-600 my-4">Name De Future's Name</div>
              <div className="border-t border-gray-300 pt-2">
                <div className="text-xs font-semibold text-center">
                  Professional Certificate Program in Retail Banking
                </div>
                <div className="text-xs text-gray-500 text-center mt-1">
                  In collaboration with BFSI sector
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div> */}

        
      </div>

      {/* Right side - Information */}
      <div className="md:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg lg:text-[30px] font-bold  mb-4">Why IBSC Certification?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="mr-2   font-bold">•</div>
              <div>
                <span className="font-semibold lg-text-[22px]">Recognition by BFSI-SSC</span> – Get a recognized certification.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2   font-bold">•</div>
              <div>
                <span className="font-semibold lg-text-[22px]">Boost Your Employability</span> – Stand out in the banking job market.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2   font-bold">•</div>
              <div>
                <span className="font-semibold lg-text-[22px]">Industry-Relevant Training</span> – Practical learning designed for real-world banking careers.
              </div>
            </li>
          </ul>
          
          <p className="mt-6 font-semibold">Your journey to a secure banking career starts here!</p>
        </div>
        
        <div className="mt-4">
          <button className="bg-gradient-to-r from-[#004165] to-[#00893B]  text-white py-2 px-6 rounded-full font-medium hover:bg-teal-700 transition duration-300">
            Get Certified. Secure Your Future!
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}