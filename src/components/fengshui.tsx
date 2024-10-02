'use client'
import BlurIn from "@/components/ui/blur-in";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TypingAnimation from "./ui/typing-animation";

export const Fengshui = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: false });
  const isInView2 = useInView(ref2, { once: false });
  const isInView3 = useInView(ref3, { once: false });
  const isInView4 = useInView(ref4, { once: false });

  return (
    <section className="w-[95%] xl:w-[80%] mx-auto py-10">
      <div className="flex items-center justify-center lg:items-start lg:justify-start lg:ml-10 2xl:ml-0 z-30">
        <div className="relative lg:mr-auto">
          <BlurIn word="Fengshui" className="text-4xl md:text-7xl font-bold text-right" />
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="absolute top-0 -left-16"

          >
            <Image
              unoptimized
              loading="lazy"
              src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/decoration/riboon.png`}
              alt="Thrive Holistic Ribbons"
              height={200}
              width={50}
            />
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="absolute top-0 -right-16"
          >
            <Image
              unoptimized
              loading="lazy"
              src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/decoration/riboon.png`}
              alt="Thrive Holistic Ribbons"
              height={120}
              width={30}
            />
          </motion.div>
        </div>
      </div>
      <div className="w-full my-24 flex flex-col lg:flex-row items-center gap-10 2xl:gap-x-20 justify-between -z-20">
         <motion.div className="relative h-[22rem] w-[22rem] md:h-[25rem] md:w-[30rem] flex items-center justify-center px-10 flex-shrink-0 -z-50"
                ref={ref3}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 1 }}
            >
            <Image
               unoptimized
               loading="lazy"
               src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/fengshui-bagua.png`}
               alt="Thrive Holistic Vastu Shastra Card"
               fill
               className="-z-10"
               style={{
                  objectFit: "contain",
               }}
            />
         </motion.div>
         <motion.div className="relative h-[22rem] md:h-[25rem] md:w-[30rem] flex items-center justify-center px-6 sm:px-10 flex-shrink-0"
                ref={ref4}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
            >
            <Image
               unoptimized
               loading="lazy"
               src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/fengshuiCard.png`}
               alt="Thrive Holistic Vastu Shastra Card"
               fill
               className="-z-10"
               style={{
                  objectFit: "contain",
               }}
            />
            <TypingAnimation
              className="text-lg font-medium text-left"
              text="Feng Shui emphasizes the importance of light and water to create balance and harmony. Light enhances positive energy, while water promotes calmness and abundance, transforming your space into a peaceful sanctuary."
            />
         </motion.div>

      </div>
      
    </section>
  );
};