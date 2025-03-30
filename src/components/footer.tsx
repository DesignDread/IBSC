
"use client";
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import WhiteLogo from "../../public/ibsc logo _white.svg";

export default function BankingFooter() {
  return (
    <footer className="w-full">
      {/* Main footer section with gradient background */}
      <div className="bg-gradient-to-r pt-12 from-[#004165] to-[#00893B]  text-white p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and about */}
          <div className="space-y-4">
            {/* <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full border-2 border-white flex items-center justify-center">
                <div className="h-6 w-6 rounded-full border border-white"></div>
              </div>
              <div className="text-sm">
                <div className="font-bold">INSTITUTE OF BANKING<sup>®</sup></div>
                <div>SKILLS AND CAREER</div>
              </div>
            </div>
             */}
             <Image src={WhiteLogo} alt="IBSC Logo" className="" priority></Image>        
            <p className="text-sm">
              IBSC: shaping the future of banking with accredited courses and expert career support. Join us today!
            </p>
            
            <div className="space-y-2">
              <p className="text-sm">Follow us on:</p>
              <div className="flex space-x-3">
                <Instagram size={20} className="cursor-pointer" />
                <Facebook size={20} className="cursor-pointer" />
                <Twitter size={20} className="cursor-pointer" />
                <Youtube size={20} className="cursor-pointer" />
              </div>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Courses</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
          
          {/* Column 3: Useful Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Explore</a></li>
              <li><a href="#" className="hover:underline">Hire From Us</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
            </ul>
          </div>
          
          {/* Column 4: Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>+91 77106-05505</li>
              <li>info@ibscedu.com</li>
              <li>E-272, Ground Floor, Phase 8A, Sector 75, Mohali</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
    <div className="h-[0px] bg-white opacity-20 my-[0.5px]"></div>
      <div className=" bg-gradient-to-r text-white from-[#004165] to-[#00893B]  p-4 text-center text-sm">
        © Copyright 2025 Job Jaro. All Rights Reserved.
      </div>
    </footer>
  );
}