import { Header } from "@/components/header";
import { getUploadsPlaylistId, getYoutubePlaylists, getChannelIdFromUsername } from "@/lib/youtube";
import { playlist } from "@/lib/example";
import { YoutubeVideoCard } from "@/components/youtubeVideoCard";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Thrive Holistic Gallery | Client Testimonials | Vastu & Feng Shui | Astrology | Card Reading",
   description: "Watch expert Vastu and Feng Shui tips, spiritual guidance, and client reviews at Thrive Holistic's gallery. Explore videos to enhance harmony, well-being, and positive energy in your life.",
   metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEBSITE_URL!}/gallery`),
   applicationName: "Thrive Holistic", 
   authors: [
     {
       name: "Sourabh",
       url: "https://www.linkedin.com/in/sourabh-sharma-8987451a2/",
     },
   ],
   generator: "Thrive Holistic",

   keywords:  [
      "Thrive Holistic gallery",
      "Vastu tips videos",
      "Feng Shui tips videos",
      "spiritual guidance videos",
      "client reviews",
      "holistic healing videos",
      "energy balance tips",
      "Vastu and Feng Shui advice",
      "well-being videos",
      "spiritual tips",
      "holistic wellness gallery",
      "client testimonials",
      "healing energy videos",
      "Vastu Shastra guidance",
      "Feng Shui expert tips"
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
      description : "Watch expert Vastu and Feng Shui tips, spiritual guidance, and client reviews at Thrive Holistic's gallery. Explore videos to enhance harmony, well-being, and positive energy in your life.",
   },  
   other:{
      ["bingbot"]: "noarchive",
   },
   
 };


const GalleryPage = () => {
   const playlistName_1_Id = playlist.items[1].id 
   const playlistName_1_Name = playlist.items[1].snippet.title 
   const playlistName_2_Id = playlist.items[0].id 
   const playlistName_2_Name = playlist.items[0].snippet.title 
   return (
      <main>
         <Header/>
         <section className=" mx-auto">
          <div className="mt-14 w-[95%] mx-auto">
          <h1 className="text-2xl font-semibold ml-8 mb-8">{playlistName_1_Name}</h1>
          
          <YoutubeVideoCard
            playlistId={playlistName_1_Id}
            title={playlistName_1_Name}
          />
        
        
          </div>  
          <div className="mt-14 w-[95%] mx-auto">
          <h1 className="text-2xl font-semibold ml-8 mb-8">{playlistName_2_Name}</h1>
          
          <YoutubeVideoCard
            playlistId={playlistName_2_Id}
            title={playlistName_2_Name}
          />
        
        
          </div>  
      
         </section>
         <Footer/>
      </main>
   );
}
export default GalleryPage;