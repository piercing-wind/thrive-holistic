import Link from "next/link"
import { FadeText } from "./ui/fade-text"

export const Footer=()=>{
   return (
      <section className="w-[95%] mx-auto mt-20 ">
         <FadeText
              className="text-4xl font-bold ml-20"
              direction="up"
              framerProps={{
                show: { transition: { duration: 1, delay: 0.2 } },
              }}
              text="Our Presence"
            />
         <div className="w-full flex flex-wrap items-center justify-center gap-10 mt-16 text-sm relative">
         <div className="absolute bottom-0 right-10 h-28 w-56 rounded-full bg-red-600 blur-3xl -z-10 opacity-20"/>
         <div className="absolute bottom-0 left-10 h-28 w-28 rounded-full bg-purple-600 blur-3xl -z-10 opacity-30"/>
         <div className="absolute top-0 left-[50%] h-28 w-28 rounded-full bg-pink-600 blur-3xl -z-10 opacity-30"/>
            <div>
               <p><strong>Address : </strong>1/5 B Block Ranjit Avenue, Amritsar </p>
               <p><strong>Pincode : </strong> 143001</p>
               <p><strong>City : </strong> Amritsar</p>
               <p><strong>State : </strong> Punjab</p>
               <p><strong>Phone : </strong> 9876543210</p>
               <p><strong>Email : </strong> <Link href="mailto:hridayamahajan@gmail.com">hridayamahajan@gmail.com</Link></p>
            </div>
            <div>
               <p><strong>Address : </strong>1/5 B Block Ranjit Avenue, Amritsar </p>
               <p><strong>Pincode : </strong> 143001</p>
               <p><strong>City : </strong> Amritsar</p>
               <p><strong>State : </strong> Punjab</p>
               <p><strong>Phone : </strong> 9876543210</p>
               <p><strong>Email : </strong> <Link href="mailto:hridayamahajan@gmail.com">hridayamahajan@gmail.com</Link></p>
            </div>
            <div>
               <p><strong>Address : </strong>1/5 B Block Ranjit Avenue, Amritsar </p>
               <p><strong>Pincode : </strong> 143001</p>
               <p><strong>City : </strong> Amritsar</p>
               <p><strong>State : </strong> Punjab</p>
               <p><strong>Phone : </strong> 9876543210</p>
               <p><strong>Email : </strong> <Link href="mailto:hridayamahajan@gmail.com">hridayamahajan@gmail.com</Link></p>
            </div>
            <div>
               <p><strong>Address : </strong>1/5 B Block Ranjit Avenue, Amritsar </p>
               <p><strong>Pincode : </strong> 143001</p>
               <p><strong>City : </strong> Amritsar</p>
               <p><strong>State : </strong> Punjab</p>
               <p><strong>Phone : </strong> 9876543210</p>
               <p><strong>Email : </strong> <Link href="mailto:hridayamahajan@gmail.com">hridayamahajan@gmail.com</Link></p>
            </div>
         </div>
         <div className="w-full border-t border-[#800000] text-xs flex items-center justify-center py-4 mt-10">
              <p className="text-center py-4">© 2024 Thrive Holistic. All Rights Reserved.</p>
         </div>
      </section>
   )
}