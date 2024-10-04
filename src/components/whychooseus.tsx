'use client'
import Image from "next/image"
import { FadeText } from "./ui/fade-text"
import { useState } from "react";
import { motion } from "framer-motion";
import NumberTicker from "./ui/number-ticker"
import { MinusCircle, PlusCircle } from "lucide-react";

export const WhyChooseUs = () => {
   const [expandedSection, setExpandedSection] = useState<number | null>(null);

   const toggleSection = (index: number) => {
     setExpandedSection(expandedSection === index ? null : index);
   };

   const sections = [
      {
        header: (
          <h6 className="hover:cursor-custom-hover text-lg md:text-3xl font-semibold flex gap-2 md:gap-8 items-center">
            <span><NumberTicker value={10} />+ Years of Experience</span>
            <span>{expandedSection === 0 ? <MinusCircle/> : <PlusCircle />}</span>
          </h6>
        ),
        content: (
          <p className="opacity-80 w-[80%]">
            Expertise in Vastu, Feng Shui, tarot reading, and holistic healing.
          </p>
        ),
      },
      {
        header: (
          <h6 className="hover:cursor-custom-hover text-xl md:text-3xl font-semibold flex gap-8 items-center">
            <span><NumberTicker value={50000} />+ Happy Clients</span>
            <span>{expandedSection === 1 ? <MinusCircle/> : <PlusCircle />}</span>
          </h6>
        ),
        content: (
          <p className="opacity-80">
            Proven track record of client satisfaction worldwide.
          </p>
        ),
      },
      {
        header: (
          <h6 className="hover:cursor-custom-hover text-xl md:text-3xl font-semibold flex gap-8 items-center">
            <span>Global Reach</span>
            <span>{expandedSection === 2 ? <MinusCircle/> : <PlusCircle />}</span>
          </h6>
        ),
        content: (
          <p className="opacity-80">
            We offer tailored solutions globally, working online, offline,
            and onsite, and adapting to diverse cultural needs to ensure
            relevant and impactful services.
          </p>
        ),
      },
      {
        header: (
          <h6 className="hover:cursor-custom-hover text-xl md:text-3xl font-semibold flex gap-8 items-center">
            <span>ISO Certified</span>
            <span>{expandedSection === 3 ? <MinusCircle/> : <PlusCircle />}</span>
          </h6>
        ),
        content: (
          <p className="opacity-80">
            Adherence to top industry standards for quality and reliability.
          </p>
        ),
      },
      {
        header: (
          <h6 className="hover:cursor-custom-hover text-xl md:text-3xl font-semibold flex gap-8 items-center">
            <span>Comprehensive Service</span>
            <span>{expandedSection === 4 ? <MinusCircle/> : <PlusCircle />}</span>
          </h6>
        ),
        content: (
          <p className="opacity-80">
            From tarot and card readings to meditation and holistic healing,
            our wide range of services supports your overall well-being and
            personal growth.
          </p>
        ),
      },
    ];
   return(
      <section className="w-[95%] xl:w-[80%] mx-auto md:p-10 mt-20 mb-10">
         <FadeText
           classNameDiv="flex items-center justify-center"
           className="text-4xl md:text-7xl font-bold text-center w-full"
           direction="up"
           framerProps={{
             show: { transition: { duration : 1,  delay: 1 } },
           }}
           text="Why Choose Us"
         />

      <div className="md:w-[70%] mx-auto relative mt-20 flex items-center justify-center">
         <Image
            src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/whyusbg.png`}
            unoptimized 
            loading="lazy"
            alt="Thrive holistic Why Choose Us"
            fill
            style={{
              objectFit: "fill",
              filter: "drop-shadow(0px 0px 10px rgba(255, 215, 0, 1))",
              zIndex: -5
            }}
         />
         <Image
            src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/tree.png`}
            unoptimized 
            loading="lazy"
            alt="Thrive holistic Why Choose Us Tree"
            width={550} // Set the width of the image
            height={80}
            style={{
               objectFit: "contain",
              filter: "drop-shadow(0px 0px 10px rgba(255, 215, 0, 1))",
              zIndex: -4
            }}
            className="absolute top-24 md:top-10 "
         />
         <div className="absolute top-4 md:top-0 -right-2 md:right-8 h-20 w-20 md:h-28 md:w-28">
            <Image
               unoptimized
               loading="lazy"
               src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/iso/ISOOuter.png`}
               alt="Thrive holistic ISO Certified"
               fill
               style={{
                  objectFit: "contain",
               }}
               className="rotateSun"
            />
            <Image
               unoptimized
               loading="lazy"
               src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/iso/ISOInner.png`}
               alt="Thrive holistic ISO Certified"
               fill
               style={{
                  objectFit: "contain",
               }}
            />
         </div>
         <div className="w-full p-4 pt-10 md:p-10 text-xl font-medium">
         {sections.map((section, index) => (
          <div key={index} className="mb-12 z-20">
            <div
              className="cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              {section.header}
            </div>
            {expandedSection === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                {section.content}
              </motion.div>
            )}
          </div>
        ))}
        </div>
      </div>     

      </section>
   )
}