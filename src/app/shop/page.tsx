import { Footer } from "@/components/footer";
import { Header } from "@/components/header"
import { ShopPageContent } from "@/components/ShopPageContent";
import { Metadata } from "next";
import { Suspense } from 'react'

export const metadata: Metadata = {
   title: "Thrive Holistic Shop | Holistic Healing Services | Vastu | Feng Shui | Astrology | Card Reading",
   description: "Discover Thrive Holistic's shop featuring healing crystals, Feng Shui items, Vastu remedies, tarot cards, and spiritual tools. Enhance your energy, balance, and well-being with premium holistic products.",
   metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEBSITE_URL!}/shop`),
   applicationName: "Thrive Holistic", 
   authors: [
     {
       name: "Sourabh",
       url: "https://www.linkedin.com/in/sourabh-sharma-8987451a2/",
     },
   ],
   generator: "Thrive Holistic",

   keywords:  [
      "Thrive Holistic shop",
      "healing crystals",
      "Feng Shui items",
      "Vastu remedies",
      "tarot cards",
      "spiritual tools",
      "holistic products",
      "energy balance tools",
      "holistic healing shop",
      "spiritual healing items",
      "well-being products",
      "crystal healing items",
      "holistic remedies",
      "spiritual growth products",
      "chakra healing tools"
    ],
   referrer: "origin",
   creator: "Sourabh",
   icons : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/favicon.ico`,
   publisher: "Thrive Holistic",
   robots: {
     index: true,
     follow: true,
   },
   alternates: { canonical: "/" },
   twitter:{
      card : 'summary_large_image'
   },
   openGraph:{
      type : 'website',
      url : process.env.NEXT_PUBLIC_WEBSITE_URL!,
      title : "Thrive Holistic | Hridaya Mahajan Trarot Reader, Card Reader, Vastu & Feng Shui Expert",
      siteName : "Thrive Holistic Shop",
      images:[
         {
            url : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/opengraph-image.jpg`,
            height : 630,  
            width : 1200,
            alt : "Welcome to Thrive Holistic SHop"
         }
      ],
      description : "Discover Thrive Holistic's shop featuring healing crystals, Feng Shui items, Vastu remedies, tarot cards, and spiritual tools. Enhance your energy, balance, and well-being with premium holistic products.",
   },  
   other:{
      ["bingbot"]: "noarchive",
   },
   
 };
const ShopPage = () => {

   return (
      <main className="">
         <Header/>
         <Suspense fallback={<div>Loading...</div>}>
          <ShopPageContent />
         </Suspense>
         <Footer/>
      </main>
   )
}

export default ShopPage;