"use client" 
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Map from "../../public/map2.svg"  

export default function OurPresenceMap() {
  // State to track if component is in view
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after component mounts
    setIsVisible(true);
    
    // Optional: Use Intersection Observer for scroll-based animation
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const component = document.getElementById('our-presence-map');
    if (component) observer.observe(component);
    
    return () => {
      if (component) observer.disconnect();
    };
  }, []);

  return (
    <div 
      id="our-presence-map"
      className="w-full py-16 bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col  items-center gap-12">
        {/* Left content section */}
        <div 
          className="w-full  space-y-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
          }}
        >
          <h2 className="text-4xl font-bold text-[#012245]">
            Our Presence
          </h2>
          
          <p className="text-gray-700 leading-relaxed">
            Explore the wide network of the Institute of Banking Skills and Careers (IBSC), strategically positioned across major Indian cities including Chandigarh, Amritsar, Patiala, Noida, Pune, and Jaipur. Each center reflects our commitment to bridging the gap between banking skills and career opportunities, ensuring widespread access to exceptional education and training for aspiring professionals.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Our expansive presence across these key locations helps cultivate a robust network of skilled individuals, poised to meet the evolving demands of the banking industry. This network is pivotal in enhancing career prospects for our students nationwide.
          </p>
        </div>

        {/* Right map section */}
        <div 
          className="w-full lg:w-fullative h-[600px]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'opacity 1s ease 0.4s, transform 1s ease 0.4s'
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={Map}
              alt="IBSC Locations Map"
              fill
              style={{ objectFit: "contain" }}
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}