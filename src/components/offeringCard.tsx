'use client'
import Image from "next/image";
import { Heart } from "@/components/icons";
import TypingAnimation from "@/components/ui/typing-animation";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const OfferingCard = ({img, title, description, link}:{img : string, title : string, description : string, link : string}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
  };



  return (
    <motion.div
      ref={ref}
      className="w-[95%] md:w-[18rem] 2xl:w-[22rem] p-4 rounded-xl flex items-center flex-col justify-start"
      style={{ boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)" }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <motion.div
        className="relative w-full h-[22rem] md:h-[16rem] md:w-[16rem] 2xl:h-[20rem] 2xl:w-[20rem] rounded-2xl overflow-hidden"
        style={{ boxShadow: "0px 0px 10px 5px rgba(255, 215, 0, 1)" }}
        variants={imageVariants}
      >
        <Image
          unoptimized
          loading="lazy"
          src={img}
          alt="Thrive Holistic House"
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <span className="px-4 py-1 backdrop-blur-md rounded-3xl absolute z-10 flex items-center justify-center bottom-2 left-2 bg-red-100 bg-opacity-40">
          Most Loved &nbsp; <Heart size={20} />
        </span>
      </motion.div>
      <motion.h6 className="font-semibold text-2xl mt-8 my-4 text-left w-full" variants={textVariants}>
       {title}
      </motion.h6>
      <motion.div variants={textVariants}>
        <TypingAnimation
          className="text-lg font-medium text-left h-32 my-4 mb-12"
          text={description}
        />
      </motion.div>
      <motion.div variants={linkVariants} className="mb-4">
        <Link
          href={link}
          className="bg-[#FFF622] text-center px-14 py-3 mx-auto font-medium text-xl rounded-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-300"
        >
          Explore More
        </Link>
      </motion.div>
    </motion.div>
  );
};