'use client'
import Image from "next/image"
import Link from "next/link"
import TypingAnimation from "./ui/typing-animation"
import { Gift } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ServiceCard = ({image, title, description, price, link, style = 'horizontal'}:{image : string, title : string, description : string, price : string, link : string, style?:string}) => {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: false })

   const vertical = "w-[22rem] flex flex-col items-center justify-start rounded-3xl relative overflow-hidden"
   const horizontal = "h-[12rem] w-full sm:h-[20rem] sm:w-[34rem] flex items-center justify-startw rounded-2xl relative overflow-hidden"
   const isHorizontal = style === 'horizontal'

   return(
      <motion.div 
         ref={ref}
         className={style === 'horizontal' ? horizontal : vertical}
         style={{boxShadow: "0px 0px 10px 5px rgba(255, 215, 0, 1)"}}
         initial={{ opacity: 0, y: 100 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.8 }}
      >
         <motion.div 
            className={`relative ${style === 'horizontal' ? 'w-[8rem] sm:w-[18rem] h-full' : 'w-full h-[18rem]'} flex-shrink-0 rounded-br-3xl overflow-hidden"`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1 }}
         >
            <Image
               unoptimized
               loading="lazy"
               src={image}
               alt={`Thrive Holistic ${title}`}
               fill
               style={{
                  objectFit: 'fill',
                  borderRadius: '0 0 3rem 0', 
                  backgroundColor: 'rgba(255, 255, 255, 1)'
               }}
               className="hover:scale-105 transition-all duration-500"
            />
         </motion.div>
         {style === 'horizontal' ?   
            <motion.span 
               className="absolute z-10 top-2 left-2 rounded-full px-2 sm:px-4 flex items-center gap-2 sm:text-lg font-medium sm:font-extrabold text-xs text_stroke"
               style={{
                  boxShadow: "0px 0px 10px 2px rgba(255, 215, 0, 1)",
               }}
               initial={{ opacity: 0, y: -50 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.9, delay: 0.2 }}
            >
               Best Seller <Gift size={20} style={{
                  color: '#800000'
               }}/>
            </motion.span> 
         : ''}
         <motion.div 
            className={`py-4 ${style === 'horizontal' ? 'px-4 gap-y-2' : 'px-8 gap-y-4'}  flex flex-col items-start justify-start sm:gap-y-4`}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
         >
            <h4 className="font-bold text-sm sm:text-2xl text-nowrap">{title}</h4>
            <TypingAnimation  
               className={`${isHorizontal ? 'text-[0.7rem]' : 'text-base' } sm:text-base font-medium sm:mb-4 text-left sm:h-24`}
               text={description}
            />
            <span className="text-sm sm:text-lg font-bold">{price}</span>
            <Link href={link} target="_blank" className={`bg-[#FFF622] ${isHorizontal? 'h-6': 'py-2'} hover:cursor-custom-hover sm:py-2 w-full px-1 text-[0.7rem] sm:text-base sm:px-4 text-nowrap shadow-md rounded-full flex items-center justify-center font-semibold hover:bg-opacity-50 transition-all duration-200`}> Schedule Your Session </Link>
         </motion.div>
      </motion.div>
   )
}

export const Services=()=>{
   const servicesList=[
      {
         image: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/vastuShastra.jpg`,
         title: 'Vastu & Fengshui',
         description: 'Transform your space with Vastu and Feng Shui to enhance harmony, attract positive energy, and foster prosperity.',
         price: '₹ 5550 /- Onwards',
         link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20the%20*Vastu%20and%20Fengshui*%20service.%20Let%20me%20know%20your%20availability.',
         style: 'horizontal'
       },
       {
         image: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/card-reading.png`,
         title: 'Card Reading',
         description: "Unlock your future with Tarot readings that provide deep insights, guidance, and clarity for life's journey.",
         price: '₹ 1111 /- Hour',
         link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20the%20*Card%20Reading*%20service.%20Let%20me%20know%20your%20availability.',
         style: 'horizontal'
       },
       {
         image: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/meditation.jpg`,
         title: 'Meditation',
         description: "Discover inner peace and balance with guided meditation sessions tailored to your needs.",
         price: '₹ 777 /- Onwards',
         link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20the%20*Meditation*%20service.%20Let%20me%20know%20your%20availability.',
         style: ''
       },
       {
         image: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/relationship-healing.jpg`,
         title: 'Relationship Healing',
         description: "Nurture deeper connections and resolve conflicts with gentle healing sessions aimed at restoring harmony and balance in your relationships.",
         price: '₹ 11111 /- Session',
         link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20the%20*Relationship%20Healing*%20service.%20Let%20me%20know%20your%20availability.',
         style: ''
       },
       {
         image: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/healing.jpg`,
         title: 'Healing',
         description: "Restore inner balance and well-being with spiritual healing sessions that nurture your mind, body, and spirit.",
         price: '₹ 5550 /- Hour',
         link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20the%20*Healing*%20service.%20Let%20me%20know%20your%20availability.',
         style: ''
       },
       {
         image: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/vedic-astrology.jpeg`,
         title: 'Vedic Astrology',
         description: "Gain clarity and direction through the ancient wisdom of Vedic astrology, guided by the stars and planets.",
         price: '₹ 1100 /- Hour',
         link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20the%20*Vedic%20Astrology*%20service.%20Let%20me%20know%20your%20availability.',
         style: ''
       },
       {
         image: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/counseling.png`,
         title: 'Counsellings',
         description: "Get caring support and guidance to help you navigate challenges, make decisions, and find clarity in your life.",
         price: '₹ 1100 /- Hour',
         link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20the%20*Counsellings*%20service.%20Let%20me%20know%20your%20availability.',
         style: ''
       },
       {
         image: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/predictions.jpg`,
         title: 'Predictions',
         description: "Uncover what the future holds with insightful predictions to guide your decisions and life choices.",
         price: '₹ 1500 /- Hour',
         link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20the%20*Predictions*%20service.%20Let%20me%20know%20your%20availability.',
         style: ''
       }
   ]




   return (
      <section className="flex flex-wrap gap-10 mt-14 sm:pt-14 items-center justify-center">
         {servicesList.map((service, index) => (
            <ServiceCard
               key={index}
               image={service.image}
               title={service.title}
               description={service.description}
               price={service.price}
               link={service.link}
               style={service.style}
            />
         ))}
      </section>
   )
}