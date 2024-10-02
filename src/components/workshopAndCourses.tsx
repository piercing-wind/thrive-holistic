'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import TypingAnimation from './ui/typing-animation';
import { useRef } from 'react';

const WorkshopAndCourseCard = ({ image, title, description, link }: { image: string, title: string, description: string, link: string }) => {
   const ref = useRef(null)
   const inView = useInView(ref, { once: false })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-[22rem] sm:w-[36rem] rounded-3xl overflow-hidden relative flex-shrink-0"
      style={{ boxShadow: "0px 0px 10px 5px rgba(255, 215, 0, 1)" }}
    >
      <motion.div
        className="relative h-[16rem] w-[22rem] sm:h-[24rem] sm:w-[36rem] shadow-lg rounded-3xl overflow-hidden"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          src={image}
          alt="Thrive Holistic Workshop and Courses"
          fill
          style={{
            objectFit: 'fill',
            backgroundColor: 'rgba(255, 255, 255, 1)',
          }}
          className="hover:scale-105 transition-all duration-500"
        />
        <span
          className="py-1 px-4 rounded-full absolute bottom-4 left-2 text-white font-bold text-lg border-2 border-white"
          style={{ boxShadow: "0px 0px 10px 2px rgba(255, 215, 0, 1)" }}
        >
          Workshop
        </span>
      </motion.div>
      <motion.div
        className="p-4 px-8 flex flex-col gap-4 items-start justify-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      >
        <h4 className="text-2xl font-bold">{title}</h4>
        <TypingAnimation
          className="text-base font-medium mb-4 text-left h-24"
          text={description}
        />
        <Link href={link} target="_blank" className="bg-[#FFF622] text-lg py-2 w-full px-4 text-nowrap shadow-md rounded-full flex items-center justify-center font-semibold hover:bg-opacity-50 transition-all duration-200"> Attend Now</Link>
      </motion.div>
    </motion.div>
  );
};


export const WorkshopAndCourses=()=>{

   const workshopAndCoursesList = [
      {
        image: '/workshops/cardreading.jpg',
        title: 'Card Reading',
        description: 'Master the art of Tarot reading, learn card meanings, spreads, and develop your intuition to gain deeper insights and guidance for yourself and others.',
        link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20attending%20the%20*Card%20Reading*%20workshop.%20Could%20you%20please%20share%20the%20availability%20and%20timing%20details?'
      },
      {
        image: '/workshops/oracle-card-reading.jpg',
        title: 'Oracle Reading',
        description: 'Learn the art of oracle card reading, tap into spiritual guidance, and develop your intuition for personalized insights and clarity.',
        link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20attending%20the%20*Oracle%20Reading*%20workshop.%20Could%20you%20please%20share%20the%20availability%20and%20timing%20details?'
      },
      {
        image: '/workshops/angel-therapy.png',
        title: 'Angel Therapy',
        description: 'Learn to connect with angels, recognize their signs, understand angel numbers, and explore karma, energy bodies, and intuition in this comprehensive guide to spiritual healing.',
        link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20attending%20the%20*Angel%20Therapy*%20workshop.%20Could%20you%20please%20share%20the%20availability%20and%20timing%20details?'
      },
      {
        image: '/workshops/pendulum-healing.jpg',
        title: 'Pendulum Healing',
        description: 'Explore the power of pendulum healing to balance energy, enhance intuition, and promote emotional and spiritual well-being.',
        link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20attending%20the%20*Pendulum%20Healing*%20workshop.%20Could%20you%20please%20share%20the%20availability%20and%20timing%20details?'
      },
      {
        image: '/workshops/self-healing.png',
        title: 'Self Healing',
        description: 'Empower yourself to heal, reduce stress, boost spiritual growth, enhance creativity, and attract prosperity by balancing and uplifting your energy.',
        link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20attending%20the%20*Self%20Healing*%20workshop.%20Could%20you%20please%20share%20the%20availability%20and%20timing%20details?'
      },
      {
        image: '/workshops/law-of-attraction.png',
        title: 'Law of Attraction',
        description: 'Master the Law of Attraction, learn manifestation techniques, and discover how to attract abundance, with steps to manifest and the power of detachment.',
        link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20am%20interested%20in%20attending%20the%20*Law%20of%20Attraction*%20workshop.%20Could%20you%20please%20share%20the%20availability%20and%20timing%20details?'
      }
    ];



   return(
      <section className="mx-auto flex items-center flex-wrap gap-10 mt-14 sm:pt-14 justify-center">
         {workshopAndCoursesList.map((workshop, index) => (
            <WorkshopAndCourseCard
               key={index}
               image={workshop.image}
               title={workshop.title}
               description={workshop.description}
               link={workshop.link}
            />
         )) }
      </section>
   )
}

export default WorkshopAndCourses;