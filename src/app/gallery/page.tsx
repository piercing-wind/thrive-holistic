'use client'
import { getUploadsPlaylistId, getYoutubePlaylists, getYoutubeVideos } from "@/lib/youtube";
const GalleryPage = () => {
   return (
      <div>
         <h1 onClick={async ()=>console.log(await getYoutubeVideos(process.env.NEXT_PUBLIC_UPLOAD_PLAYLIST as string, process.env.NEXT_PUBLIC_YOUTUBE_API as string))}>Gallery Page</h1>
      </div>
   );
}
export default GalleryPage;