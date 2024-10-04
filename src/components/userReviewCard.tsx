import { User } from "lucide-react"
import Link from "next/link"

export const UserReviewCard=({review,name,userName, link}:{review : string,name : string,userName: string, link: string})=>{
   return(
      <Link href={link} target="_blank">
      <div className="w-52 h-36 md:w-64 md:h-44 rounded-lg shadow-md p-4 flex flex-col justify-between bg-gradient-to-b from-white via-white to-pink-100">
         <p className="font-medium  text-[10px] md:text-xs">
           {review}
         </p>
         <div className="w-full flex gap-5 items-center mt-1">
            <div className="rounded-full h-8 w-8 border relative flex items-center justify-center">
               <User/>
            </div>
            <div className="text-sm">
               <p className="font-semibold">{name}</p>
               <p className="text-xs -mt-1">{userName}</p>
            </div>
         </div>
      </div>
      </Link>
   )
}