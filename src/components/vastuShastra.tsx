'use client'
import BlurIn from "@/components/ui/blur-in";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TypingAnimation from "./ui/typing-animation";

export const VastuShastra = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isInView1 = useInView(ref1, { once: false });
  const isInView2 = useInView(ref2, { once: false });
  const isInView3 = useInView(ref3, { once: false });
  const isInView4 = useInView(ref4, { once: false });

  return (
    <section className="w-[95%] 2xl:w-[80%] mx-auto mt-20 py-10">
      <div className="flex items-center justify-center lg:items-end lg:justify-end lg:mr-10 2xl:mr-0">
        <div className="relative lg:ml-auto z-30">
          <BlurIn word="Vastu Shastra" className="text-4xl md:text-7xl font-bold text-right" />
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="absolute top-0 -right-16"
          >
            <Image
              src="/decoration/toran.png"
              alt="Thrive Holistic Flowers"
              height={200}
              width={50}
              className="z-10"
            />
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="absolute top-0 -left-16"
          >
            <Image
              src="/decoration/toran.png"
              alt="Thrive Holistic Flowers"
              height={120}
              width={30}
            />
          </motion.div>
        </div>
      </div>
      <div className="w-full my-24 flex flex-col lg:flex-row items-center gap-10 2xl:gap-x-20 lg:px-20 2xl:px-0 justify-between">
         <motion.div className="relative h-[22rem] md:h-[25rem] md:w-[30rem] flex items-center justify-center px-10 flex-shrink-0 -z-50"
                ref={ref3}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
            >
            <Image
               src='/vastushastracard.png'
               alt="Thrive Holistic Vastu Shastra Card"
               fill
               className="-z-10"
               style={{
                  objectFit: "contain",
               }}
            />
            <TypingAnimation
              className="text-lg font-medium text-left"
              text="Vastu is an ancient Indian practice that aligns architecture and design with natural elements and directional principles to promote harmony, prosperity, and well-being in a space."
            />
         </motion.div>
         <motion.div className="relative h-[25rem] w-[30rem] flex items-center justify-center px-10 flex-shrink-0"
                ref={ref4}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 1 }}
            >
            <Image
               src='/vastuShastra.jpg'
               alt="Thrive Holistic Vastu Shastra Card"
               fill
               className="-z-20"
               style={{
                  objectFit: "contain",
               }}
            />
         </motion.div>
      </div>
      
    </section>
  );
};