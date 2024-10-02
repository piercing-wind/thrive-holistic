import { Star } from "lucide-react"
import Image from "next/image"
import { FadeText } from "./ui/fade-text"
import Link from "next/link"

export const MakingLivesbetterSection = () => {
   return(
      <section className="w-[95%] xl:w-[80%] mx-auto relative mt-24 flex gap-y-24 flex-col md:flex-row items-center justify-between pt-40 pb-14 px-10">
         <Image
            src='/decoration/stars.png'
            alt="Thrive Holistic stars"
            height={400}
            width={800}
            className=" absolute -top-2 -right-[10%] -z-10"
         />
         <div className="relative">
            <Star size={50} className="absolute -top-14 left-6" />
            <FadeText
              className="text-3xl md:text-4xl font-bold text-nowrap"
              direction="up"
              framerProps={{
                show: { transition: { duration: 1, delay: 0.2 } },
              }}
              text="Making Lives Better"
            />
            <Star size={30}  className=" absolute -bottom-6 -left-6"/>            
         </div>
         <Link href="" className="bg-[#F2E8C6] px-16 py-4 font-medium text-xl rounded-md hover:scale-105 transition-all duration-300"
         style={{boxShadow: "0px 0px 10px 2px rgba(255, 215, 0, 1)"}}
         >Contact Now</Link>
         <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-pink-600 blur-3xl -z-10 opacity-20"/>
      </section>
   )
}