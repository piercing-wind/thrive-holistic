import { Bio } from "@/components/bio";
import { Fengshui } from "@/components/fengshui";
import { FlexibleServiceSection } from "@/components/flexibleServiceSection";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HolisticOffering } from "@/components/holisticOffering";
import { Facebook, InstagramIcon, Linkedin, TwitterIcon, WhatsAppIcon, YoutubeIcon } from "@/components/icons";
import { MakingLivesbetterSection } from "@/components/makingLivesBetterSection";
import { TarrotGuidance } from "@/components/tarrotGuidance";
import { FadeText } from "@/components/ui/fade-text";
import Marquee from "@/components/ui/marquee";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import TypingAnimation from "@/components/ui/typing-animation";
import { UserReviewCard } from "@/components/userReviewCard";
import { VastuShastra } from "@/components/vastuShastra";
import { WhyChooseUs } from "@/components/whychooseus";
import { userReviews } from "@/data/userReviews";
import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main className="w-full overflow-x-hidden">
         <Header/>
         <section className="w-full relative h-[70vh] flex my-10 mb-20 items-start md:items-center ">
 
            <div className="mx-2 sm:mx-8 lg:ml-20 md:w-[50%] flex flex-col items-start gap-4">
               <FadeText
                 className="font-medium text-lg -z-50 relative"
                 direction="down"
                 framerProps={{
                   show: { transition: { duration: 1, delay: 0.2 } },
                 }}
                 text="Reveal what the universe has in store"
               />
               <FadeText
                 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight my-4 -z-50 relative"
                 direction="left"
                 framerProps={{
                   show: { transition: { duration: 1, delay: 0.2 } },
                 }}
                 text="Transform Your Life with Tarrot Wisdom"
               />
              <TypingAnimation
                 className="text-lg font-medium text-left my-4 mb-8 -z-40"
                 text="Experience the trans formative power of tarot readings. Learn more about yourself and the energies that shape your life’s journey."
               />
               <Link href="" className="relative flex z-40 items-center justify-center w-48 gap-5 px-8 p-2 bg-[#F2E8C6] shadow-lg my-4 rounded-md font-semibold text-lg text-nowrap hover:scale-105 hover:bg-[#800000] hover:text-[#F2E8C6] transition-all duration-300" ><p>Book Now</p><WhatsAppIcon size={22}/></Link>
            </div>
            <div className="absolute -bottom-[15rem] sm:-bottom-[70%] left-14 sm:left-[15%] md:left-auto md:bottom-auto md:top-0 md:-right-64 ">
               <div className="relative h-[20rem] w-[20rem] sm:h-[34rem] sm:w-[34rem] md:h-[30rem] md:w-[30rem] lg:h-[34rem] lg:w-[34rem] flex flex-col md:flex-row items-center  ">
                  <Image
                     unoptimized
                     loading="lazy"
                     src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/sun.png`}
                     alt="Thrive Holistic sun"
                     fill
                     style={{
                        objectFit: "cover",
                     }}
                     className=" -z-50"
                  />
    
                  <Link href="https://www.linkedin.com/in/hridaya-mahajan-b26120198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="-mt-14 mb-4 md:mt-auto md:mb-auto md:-ml-14 md:mr-16 z-10 animated_icon1 hover:cursor-custom-hover">
                        <Linkedin />
                  </Link>
                  <div className="relative w-[60%] mb-8 sm:mb-14 md:mb-auto md:w-auto md:h-[60%] my-auto flex md:flex-col justify-between md:-ml-16 md:mr-16  z-10">
                     <Link href="https://x.com/MahajanHri38264" target="_blank" className="animated_icon2 hover:cursor-custom-hover">
                        <TwitterIcon />
                     </Link>
                     <Link href="https://wa.me/919914939308?text=Hi%20Hridaya%2C%20I%20came%20from%20your%20website%20and%20I%20am%20interested%20in%20your%20services" target="_blank" className="animated_icon3 hover:cursor-custom-hover">
                        <WhatsAppIcon />
                     </Link>
                  </div>
                  <div className="relative w-[98%] mb-8 sm:mb-16 md:mb-auto md:w-auto md:h-[98%] my-auto flex md:flex-col justify-between md:mr-20  z-10">
                     <Link href="https://www.facebook.com/share/7Ajd1vK5yKX1QyRP/?mibextid=LQQJ4d" target="_blank" className="animated_icon4 hover:cursor-custom-hover">
                        <Facebook />
                     </Link>
                     <Link href="https://www.instagram.com/thrive__holistic/" target="_blank" className="animated_icon1 hover:cursor-custom-hover">
                        <InstagramIcon />
                     </Link>
                  </div>
                  <div className="relative w-[23.5rem] sm:w-[40rem] mb-auto md:mb-0 md:h-[36rem] lg:h-[40rem] flex flex-row md:flex-col justify-between md:w-full flex-grow md:mr-auto  z-10 ">
                     <Link href="https://pin.it/7zs3EQzVo" target="_blank" className="relative h-8 w-8 animated_icon2 hover:cursor-custom-hover">
                        <Image
                           unoptimized
                           loading="lazy"
                           src="/pintrestmedia.png"
                           alt="Thrive Holistic pintrest"
                           fill
                           style={{
                              objectFit: "contain",
                           }}
                         />
                     </Link>
                     <Link href="https://www.youtube.com/@Hridaya_mahajan" target="_blank" className="animated_icon3 hover:cursor-custom-hover">
                        <YoutubeIcon />
                     </Link>
                  </div>

               </div>

            </div>
         </section>
         <section className="w-full pt-32 mb-10 relative bg-white z-40">
            <div className="border border-white rounded-lg h-56 relative w-[80%] mx-auto flex items-start justify-center pt-6 font-semibold"
            style={{boxShadow: "0px 0px 10px 5px rgba(255, 215, 0, 1)"}}
            >
               <h2 className="text-2xl md:text-4xl">What Our Client&apos;s Says</h2>
            </div>
              <div className="w-full absolute -bottom-6 md:-bottom-16 flex items-center">
               <Marquee pauseOnHover>
                  {userReviews.map((user,index)=>(
                     <UserReviewCard
                        key={index}
                        name={user.name}
                        userName={user.userName}
                        // img={user.img}
                        link={user.link}
                        review={user.review}
                     />
                  ))}
               </Marquee>
              </div>
         </section>
         <Bio/>
         <VastuShastra />
         <Fengshui />
         <HolisticOffering />
         <WhyChooseUs />
         <FlexibleServiceSection />
         <TarrotGuidance />
         <MakingLivesbetterSection />
         <Footer />
      </main>
  );
}
