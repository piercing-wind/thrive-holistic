'use client';
import Image from "next/image"
import { FadeText } from "./ui/fade-text"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe2 } from "lucide-react";

export const FlexibleServiceSection = () => {
   const ref = useRef(null);
   const ref2 = useRef(null);
   const ref3 = useRef(null);
   const isInView = useInView(ref, { once: false });
   const isInView2 = useInView(ref2, { once: false });
   const isInView3 = useInView(ref3, { once: false });

   const imageVariants = {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
    };
  
  
   return(
      <section className="w-[95%] xl:w-[80%] mx-auto p-4 md:p-10 mt-10">
      <FadeText
        classNameDiv="flex items-center justify-center"
        className="text-4xl md:text-7xl font-bold text-center w-full"
        direction="up"
        framerProps={{
          show: { transition: { duration : 1,  delay: 1 } },
        }}
        text="Flexible Service Options"
      />
      <h2 className="text-2xl font-bold text-center w-full my-8 flex items-center justify-center">Travels Globally &nbsp;&nbsp; <Globe2 className="mb-2"/></h2>

        <div className="flex flex-wrap items-center justify-center mt-20 gap-20">
         <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-2xl">Online Services</h1>
            <motion.div
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
            className="h-80 w-80 relative"
          >
            <Image
               unoptimized
               loading="lazy"
               src='/business-woman.png'
               alt="Thrive Holistic Online Services"
               fill
               style={{
                  objectFit: "cover",
                  zIndex: 10
               }}
            />
          </motion.div>
         </div>
         <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-2xl">Offline Services</h1>
            <motion.div
            ref={ref2}
            animate={isInView2 ? "visible" : "hidden"}
            variants={imageVariants}
            className="h-80 w-80 relative"
          >
            <Image
              unoptimized
              loading="lazy"
              src='/offlineWork.png'
              alt="Thrive Holistic Online Services"
               fill
               style={{
                  objectFit: "cover",
                  zIndex: 10
               }}
            />
          </motion.div>
         </div>
         <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-2xl">Onsite Services</h1>
            <motion.div
            ref={ref3}
            animate={isInView3 ? "visible" : "hidden"}
            variants={imageVariants}
            className="h-80 w-80 relative"
          >
            <Image
               unoptimized
               loading="lazy"
               src='/onsite.png'
               alt="Thrive Holistic Online Services"
               fill
               style={{
                  objectFit: "cover",
                  zIndex: 10
               }}
            />
          </motion.div>
         </div>

        </div>

      </section>
   )
}