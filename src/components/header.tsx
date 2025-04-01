"use client"
import React from 'react';
import { Mail, Phone, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import Ibsc from "../../public/Ibsc_expanded.svg"
import Image from 'next/image';
import Partner from "../../public/Partner.svg"

export default function BankingHeader() {
  return (
    <header className="w-full z-20 relative">
      {/* Top bar - dark teal with contact info and BFSI logo */}
      <div className="bg-gradient-to-r from-[#004165] to-[#00893B]  text-white  flex justify-between items-center text-sm">
        <div className="ml-4 md:ml-32">
          {/* <span className="hidden md:inline">Approved Training Partner of BFSI-SSC</span> */}
          <Image src={Partner} alt=""></Image>
        </div>
        <div className="flex items-center space-x-4 mr-4 md:mr-32">
          <a href="mailto:info@ibscedu.com" className="flex items-center gap-1">
            <Mail size={16} />
            <span className="hidden md:inline">info@ibscedu.com</span>
          </a>
          <a href="tel:+917710505505" className="flex items-center gap-1">
            <Phone size={16} />
            <span className="hidden md:inline">+91 7710505505</span>
          </a>
          <div>
            {/* <img src="/api/placeholder/40/20" alt="BFSI Logo" className="h-6" /> */}
          </div>
        </div>
      </div>
      
      {/* Main navigation bar - white */}
      <div className="bg-white shadow-md  px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Image src={Ibsc} alt='' />

          
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 items-center text-sm">
            <a href="#" className="font-semibold hover:text-blue-700">HOME</a>
            <a href="#" className="hover:text-blue-700">Courses</a>
            <a href="#" className="hover:text-blue-700">About Us</a>
            <a href="#" className="hover:text-blue-700 flex items-center">
              Explore <span className="ml-1">▼</span>
            </a>
            <a href="#" className="hover:text-blue-700">Hire From Us</a>
            <a href="#" className="hover:text-blue-700 flex items-center">
              Contact Us <span className="ml-1">▼</span>
            </a>
          </nav>
          
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center gap-3 text-gray-600">
            <span className="text-sm">Follow us:</span>
            <Facebook size={16} className="cursor-pointer hover:text-blue-700" />
            <Linkedin size={16} className="cursor-pointer hover:text-blue-700" />
            <Twitter size={16} className="cursor-pointer hover:text-blue-700" />
            <Instagram size={16} className="cursor-pointer hover:text-blue-700" />
          </div>
          
          {/* Mobile menu button - only shown on small screens */}
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}