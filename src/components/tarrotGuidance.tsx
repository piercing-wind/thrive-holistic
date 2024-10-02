import Image from "next/image";
import { FadeText } from "./ui/fade-text";
import TypingAnimation from "./ui/typing-animation";

export const TarrotGuidance = () => {
   return(
      <section className="w-[95%] xl:w-[80%] mx-auto flex flex-col gap-y-10 md:flex-row mt-20 pt-20 items-center justify-between">
         <div className="px-4 md:px-0 md:w-[60%]">
         <FadeText
           className="text-4xl md:text-6xl font-bold"
           direction="left"
           framerProps={{
             show: { transition: { duration: 1, delay: 0.4 } },
           }}
           text="Unveil Your Path with Tarot Guidance"
         />
         <TypingAnimation
           className="text-base md:text-2xl font-medium text-left mt-8 opacity-90"
           text="Unlock life's mysteries with a personalized tarot reading. Gain clarity and make empowered choices with insights into your past, present, and future. Let tarot guide your journey."
         />
         </div>
         <div className="flex-shrink-0 h-96 w-96 relative">
           <Image
            src='/tarot/tarotOuter.png'
            alt="Thrive Holistic Tarrot Guidance"
            fill
            style={{
               objectFit: "cover",
            }}
            className="rotateSun"
           />
           <Image
            src='/tarot/tarotMiddle.png'
            alt="Thrive Holistic Tarrot Guidance"
            fill
            style={{
               objectFit: "cover",
            }}
           />
           <Image
            src='/tarot/tarotInner.png'
            alt="Thrive Holistic Tarrot Guidance"
            fill
            style={{
               objectFit: "cover",
            }}
            className="rotateSun"
           />
         </div>
      </section>
   )
};