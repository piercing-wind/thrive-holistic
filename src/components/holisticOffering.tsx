'use client'
import LetterPullup from "@/components/ui/letter-pullup";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { OfferingCard } from "./offeringCard";

export const HolisticOffering = () => {
   const ref1 = useRef(null);
   const ref2 = useRef(null);
   const isInView1 = useInView(ref1, { once: false });
   const isInView2 = useInView(ref2, { once: false });
   const cardData=[
      {
         img: "/cards/house.png",
         title: "Vastu Shastra & Fengshui",
         description: "Harmonize your home and life with our expert Vastu Shastra and Feng Shui services. Achieve balance, prosperity, and well-being today.",
         link: "/services",
      },
      {
         img: "/cards/healing.png",
         title: "Healings & Remedies",
         description: "Avail personalized remedies and holistic healing to restore balance, reduce stress, and rejuvenate your body, mind, and spirit.",
         link: "/services",
      },
      {
         img: "/cards/title-feng-shui-theme-for-home.jpg",
         title: "Spiritual Essentials Items",
         description: "Explore our holistic products designed to enrich your environment, boost energy, and support your journey towards inner peace and balance.",
         link: "/services",
      },
     ];
   return(
      <section className="md:w-[95%] lg:w-[80%] mx-auto relative">
         <LetterPullup words={"Holistic  Offerings"} className="my-5 text-4xl md:text-7xl" delay={0.05} />
         <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="absolute -top-10 right-0 -z-10"

          >
            <Image
               unoptimized
               loading="lazy"
               src='/decoration/sparkels.png'
               alt="Thrive Holistic Sparkels"
               width={500}
               height={100}
            />
          </motion.div>
         <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}  
            className="absolute -top-10 left-1 md:left-20 -z-10"
          >
            <div className=" relative h-40 w-8 md:h-80 md:w-16">
               <Image
                  unoptimized
                  loading="lazy"
                  src='/decoration/nazarbattu.png'
                  alt="Thrive Holistic Nazr Battu"
                  fill 
                  style={{
                     objectFit : "contain"
                  }}
               />
            </div>
          </motion.div>

         <div className="w-full flex flex-wrap gap-10 mt-24 items-center justify-center">
         {cardData.map((card, index) => (
            <OfferingCard key={index} img={card.img} title={card.title} description={card.description} link={card.link} />
         ))}

         </div>

      </section>
   )
}