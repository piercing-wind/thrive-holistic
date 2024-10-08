import FlipText from "@/components/ui/flip-text";
import { FadeText } from "@/components/ui/fade-text";
import TypingAnimation from "@/components/ui/typing-animation";
import Image from "next/image";
import { User } from "lucide-react";
import Link from "next/link";

export const Bio=()=>{
   return(
      <section className="w-[95%] xl:w-[80%] flex flex-col md:flex-row items-center justify-between mx-auto mt-28 pt-10 mb-20">
         <div className="relative h-96 w-96  flex-shrink-0 flex items-center justify-center md:hidden">
               <Image
                  unoptimized
                  loading="lazy"
                  src="/halo.png"
                  alt="Thrive Holistic Halo for Haridya Mahajan" 
                  fill
                  style={{
                     objectFit: "contain",
                     zIndex: -1
                  }}
                  className="rotateSun"
               />
               <User className="h-[65%] w-[65%]"/>
         </div>

         <div className="flex flex-col items-start justify-center w-[95%] md:w-[60%]">
            <FlipText
            className="text-4xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-none"
            word="Hridaya Mahajan"
            />
            <FadeText
              className="text-xl italic w-[90%] flex my-4"
              direction="up"
              framerProps={{
                show: { transition: {duration: 0.8,  delay: 0.3 } },
              }}
              text="Vastu & Feng Shui Expert, Healer, Astrologist & psychic"
            />
            <TypingAnimation
              className="text-xl font-medium text-start my-4"
              text="Founder of Thrive Holistic, a holistic healer specializing in Vaastu, Feng Shui, therapy sessions, and energy healing, dedicated to fostering balance and well-being."
            />
            <Link href='' className="px-5 bg-yellow-50 shadow-md shadow-[#8900006d]  py-1 rounded-sm my-2 hover:scale-105 hover:bg-yellow-200 transition-all duration-150 flex items-center justify-center">Reach Me</Link>
         </div>
              <div className="relative h-96 w-96 flex-shrink-0 md:flex items-center justify-center hidden">
               <Image
                  unoptimized
                  loading="lazy"
                  src="/halo.png"
                  alt="Thrive Holistic Halo for Haridya Mahajan" 
                  fill
                  style={{
                     objectFit: "contain",
                     zIndex: -1
                  }}
                  className="rotateSun"
               />
               <User className="h-[65%] w-[65%]"/>
              </div>

      </section>
   )
}