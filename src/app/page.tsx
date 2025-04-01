import MentorAndTestimonal from "@/components/mentorAndTestimonals"
import WhyUs from "@/components/whyUs"
import HomeHero from "@/components/home"
import CertficateSection from "@/components/certificate"
import OurPresenceMap from "@/components/ourPresence";
import Faq from "@/components/faq"
import Gradient from "../../public/gradient.svg"
import Image from "next/image";

export default function Home(){
  return (
   <div className="relative overflow-hidden" >
          <Image src={Gradient} alt='' className='absolute -left-96 -top-72'></Image>
          <Image src={Gradient} alt='' className='absolute -right-[45rem]'></Image>
    
    <HomeHero />
    <WhyUs />
    <CertficateSection/>
    <MentorAndTestimonal />
    <OurPresenceMap />
    <Faq/>
   </div>
  );
}