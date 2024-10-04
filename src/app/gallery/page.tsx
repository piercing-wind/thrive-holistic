import { Header } from "@/components/header";
import { getUploadsPlaylistId, getYoutubePlaylists, getChannelIdFromUsername } from "@/lib/youtube";
import { playlist } from "@/lib/example";
import { YoutubeVideoCard } from "@/components/youtubeVideoCard";
import { Footer } from "@/components/footer";
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