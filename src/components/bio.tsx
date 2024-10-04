import FlipText from "@/components/ui/flip-text";
import { FadeText } from "@/components/ui/fade-text";
import TypingAnimation from "@/components/ui/typing-animation";
import Image from "next/image";
import { User } from "lucide-react";
import Link from "next/link";

export const Bio=()=>{
   return(
      <section className="w-[95%] xl:w-[80%] flex flex-col md:flex-row items-center justify-between mx-auto mt-28 pt-10 mb-20">
         <div className="relative h-96 w-96  flex-shrink-0 flex items-center justify-center mb-8 md:hidden">
               <Image
                  unoptimized
                  loading="lazy"
                  src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/halo.png`}
                  alt="Thrive Holistic Halo for Haridya Mahajan" 
                  fill
                  style={{
                     objectFit: "contain",
                     zIndex: -1
                  }}
                  className="rotateSun"
               />
            <div className="relative h-64 w-64 ml-2">
               <Image
                  unoptimized
                  loading="lazy"
                  src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/hridaya.png`}
                  alt="Thrive Holistic Haridya Mahajan" 
                  fill
                  style={{
                     objectFit: "contain",
                     zIndex: -5
                  }}
               />
               </div>
         </div>

         <div className="flex flex-col items-start justify-center w-[95%] md:w-[60%]">
            <FlipText
            className="text-4xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-none"
            word="Hridaya Mahajan"
            />
            <FadeText
              className="text-md italic w-[90%] flex mt-1 my-4"
              direction="up"
              framerProps={{
                show: { transition: {duration: 0.8,  delay: 0.3 } },
              }}
              text="Vastu + Feng Shui Expert, Healer, Astrologist, Card Reader & psychic"
            />
            <TypingAnimation
              className="text-xl font-medium text-start my-4"
              text="Founder of Thrive Holistic, a holistic healer specializing in Vastu, Feng Shui, energy healing, Crystal Healing, Predictions, Remedies, Card Reading, Counselling Sessions and much more... dedicated to fostering balance and well-being."
            />
            <Link href='' className="px-5 bg-yellow-50 shadow-md shadow-[#8900006d]  py-1 rounded-sm my-2 hover:scale-105 hover:bg-yellow-200 transition-all duration-150 flex items-center justify-center">Reach Me</Link>
         </div>
              <div className="relative h-96 w-96 flex-shrink-0 md:flex items-center justify-center hidden">
               <Image
                  unoptimized
                  loading="lazy"
                  src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/halo.png`}
                  alt="Thrive Holistic Halo for Haridya Mahajan" 
                  fill
                  style={{
                     objectFit: "contain",
                     zIndex: -1
                  }}
                  className="rotateSun"
               />
               <div className="relative h-64 w-64 ml-2">
               <Image
                  unoptimized
                  loading="lazy"
                  src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/hridaya.png`}
                  alt="Thrive Holistic Haridya Mahajan" 
                  fill
                  style={{
                     objectFit: "contain",
                     zIndex: -5
                  }}
               />
               </div>
              </div>

      </section>
   )
}