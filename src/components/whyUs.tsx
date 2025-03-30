"use client"

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
  return (
    <div className="w-full">
      {/* Alumni Section */}
      <div className="py-8 bg-white text-center">
        <h3 className="text-lg font-medium text-center mb-6">Our Alumni Works In</h3>
        <div className="flex justify-center items-center space-x-4 flex-wrap px-4">
          <Image src={Alumni1} alt="First Bank"  className=" object-contain" />
          <Image src={Alumni2} alt="Bandhan Bank"  className=" object-contain" />
          <Image src={Alumni3} alt="Kotak"  className=" object-contain" />
          <Image src={Alumni4} alt="WNS"  className=" object-contain" />
          <Image src={Alumni5} alt="Axis Bank"  className=" object-contain" />
          <Image src={Alumni6} alt="Indusind"  className=" object-contain" />
          <Image src={Alumni7} alt="Mastercard" className=" object-contain" />
        </div>
      </div>

      {/* Why Choose IBSC Section */}
      <div className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-12">Why Choose IBSC?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <Image src={Why1} alt=""></Image>
            <h3 className="lg:text-[28px] font-medium mb-2"><span className="bg-gradient-to-r from-[#004165] to-[#00893B] bg-clip-text text-transparent ">Industry-Relevant</span>  Training</h3>
            <p className="text-sm text-gray-600">Gain practical knowledge and hands-on experience to thrive in the banking sector.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
          <Image src={Why2} alt=""></Image>

          <h3 className="lg:text-[28px] font-medium mb-2"><span className="bg-gradient-to-r from-[#004165] to-[#00893B] bg-clip-text text-transparent ">Prestigious</span> Certfication</h3>
          <p className="text-sm text-gray-600">Earn a certificate that validates your expertise and helps you stand in the job market.</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
          <Image src={Why3} alt=""></Image>
          <h3 className="lg:text-[23px] font-medium mb-2"><span className="bg-gradient-to-r from-[#004165] to-[#00893B] bg-clip-text text-transparent ">100 Day Career</span> Oriented Program</h3>

            <p className="text-sm text-gray-600">A structured curriculum designed to make you job-ready in just 100 days.</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
          <Image src={Why4} alt=""></Image>
          <h3 className="lg:text-[23px] font-medium mb-2"><span className="bg-gradient-to-r from-[#004165] to-[#00893B] bg-clip-text text-transparent ">100% Placement</span> Support</h3>

            <p className="text-sm text-gray-600">Get access to job opportunities and guidance to kickstart your banking career.</p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center text-center">
          <Image src={Why5} alt=""></Image>
          <h3 className="lg:text-[23px] font-medium mb-2"><span className="bg-gradient-to-r from-[#004165] to-[#00893B] bg-clip-text text-transparent ">Expert Faculty</span>  & Mentorship</h3>

            <p className="text-sm text-gray-600">Learn from experienced banking professionals and receive continuous career support.</p>
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col items-center text-center">
          <Image src={Why6} alt=""></Image>
          <h3 className="lg:text-[23px] font-medium mb-2"><span className="bg-gradient-to-r from-[#004165] to-[#00893B] bg-clip-text text-transparent ">Affiliation</span>  with Top Banks</h3>
            <p className="text-sm text-gray-600">Benefit from strong industry connections and placement tie-ups with leading banks.</p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Button className="bg-teal-700 hover:bg-teal-800 rounded-full px-8 py-2 text-white">Join Now</Button>
        </div>
      </div>

      {/* Who Is IBSC For Section */}
      <div className="py-12 bg-gradient-to-r from-[#004165] to-[#00893B] text-white">
        <h2 className="text-2xl font-bold text-center mb-12">Who Is IBSC For?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {/* Card 1 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg">
            <div className="flex flex-col items-start mb-4 ">
              {/* <div className="p-2 bg-teal-100 rounded-full mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-700">
                  <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div> */}
              <Image src={Who1} alt=""></Image>
              <h3 className="font-medium lg:text-[28px]">Fresh Graduates</h3>
            </div>
            <p className="text-sm lg:tex-[20px] text-gray-600">Struggling to land a job? Get the skills and knowledge to kickstart your career in banking.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg">
            <div className="flex flex-col items-start mb-4">
            <Image src={Who2} alt=""></Image>
              <h3 className="font-medium lg:text-[28px]">Aspiring Bankers</h3>
            </div>
            <p className="text-sm text-gray-600">Turn your ambition into a reality with expert-led training in all aspects of modern banking.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg">
            <div className="flex flex-col items-start mb-4">
            <Image src={Who3} alt=""></Image>
              <h3 className="font-medium lg:text-[28px]">Students Seeking Practical Learning</h3>
            </div>
            <p className="text-sm text-gray-600">Get hands-on experience in real-world banking regimes that employers value.</p>
          </div>
          {/* card-4 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg">
            <div className="flex flex-col items-start mb-4">
            <Image src={Who4} alt=""></Image>
              <h3 className="font-medium lg:text-[28px]">Students Seeking Practical Learning</h3>
            </div>
            <p className="text-sm text-gray-600">Get hands-on experience in real-world banking regimes that employers value.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg">
            <div className="flex flex-col items-start mb-4">
            <Image src={Who5} alt=""></Image>
              <h3 className="font-medium lg:text-[28px]">Career Changers</h3>
            </div>
            <p className="text-sm text-gray-600">Looking to switch industries? Our structured program makes transitioning into banking seamless.</p>
          </div>

          {/* card 6 */}
          <div className=" text-gray-800 p-2 rounded-lg">
          <div className="flex flex-col h-full w-full items-start gap-32  justify-between px-4">
          <div className="text-white mb-4 md:mb-0 md:mr-6 max-w-xs">
            <p className="text-sm lg:text-[25px]">Bridge the gap between education and employment with <span className="font-bold">IBSC!</span> </p>
          </div>
          <Button className="bg-white hover:bg-gray-100 text-teal-700 rounded-full px-8 py-2">Apply Now</Button>
        </div>
            {/* <p className="text-sm text-gray-600">Looking to switch industries? Our structured program makes transitioning into banking seamless.</p> */}
          </div>
        </div>

      
      </div>
    </div>
  )
}