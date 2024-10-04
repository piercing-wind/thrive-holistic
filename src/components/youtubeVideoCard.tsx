'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import Modal from "./modal";
import { PlayCircle } from "lucide-react";
import Marquee from "./ui/marquee";

const fetchPlaylistVideos = async (playlistId: string, apiKey: string) => {
   const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${apiKey}`;
   const response = await fetch(url);
   const data = await response.json();
   return data.items;
};

const chunkArray = (array: any[], size: number) => {
   const chunkedArr = [];
   let i = 0;
 
   // Create chunks of the specified size
   while (i < array.length) {
     chunkedArr.push(array.slice(i, i + size));
     i += size;
   }
 
   // Check if the last chunk has fewer than 4 videos
   if (chunkedArr.length > 1 && chunkedArr[chunkedArr.length - 1].length < 4) {
     const lastChunk = chunkedArr.pop();
     if (lastChunk) {
       let j = 0;
 
       // Distribute the videos from the last chunk to the previous chunks
       while (lastChunk.length > 0) {
         chunkedArr[j % chunkedArr.length].push(lastChunk.shift());
         j++;
       }
     }
   }
 
   return chunkedArr;
 };

const VideoCard = ({ video, videoTitle, src, onClick }: { video: any, videoTitle: string, src: string, onClick: () => void }) => {
   return (
     <div className="w-72 h-64 border rounded-xl overflow-hidden cursor-custom-hover flex-shrink-0 m-2" onClick={onClick}
        style={{ boxShadow: "0px 0px 10px 2px rgba(255, 215, 0, 1)" }}
     >
       <div className="relative h-40 w-72">
          <Image
             loading="lazy"
             unoptimized
             src={`https://img.youtube.com/vi/${video.snippet.resourceId.videoId}/hqdefault.jpg`}
             alt={`Thrive Holistic ${videoTitle}`}
             fill
             style={{
                objectFit:"cover",
                zIndex: -10
             }}
          />
          <PlayCircle size={40} className="absolute top-[40%] left-[40%] z-10"/>
       </div>
       <div className="w-full p-2">
         <h2 className="font-medium text-xs">{videoTitle}</h2>
         <p className="opacity-70 text-xs mt-2">{video.snippet.channelTitle}</p>
       </div>
     </div>
   );
};

export const YoutubeVideoCard = ({ playlistId, title }: { playlistId: string, title: string }) => {
   const [videos, setVideos] = useState([]);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentVideoSrc, setCurrentVideoSrc] = useState<string | null>(null);

   useEffect(() => {
      const fetchVideos = async () => {
        const videoItems = await fetchPlaylistVideos(playlistId, process.env.NEXT_PUBLIC_YOUTUBE_API!);
        setVideos(videoItems);
      };
      fetchVideos();
   }, [playlistId]);

   // const chunkArray = (array: any[], size: number) => {
   //    const chunkedArr = [];
   //    for (let i = 0; i < array.length; i += size) {
   //      chunkedArr.push(array.slice(i, i + size));
   //    }
   //    return chunkedArr;
   // };

   const videoChunks = chunkArray(videos, 8);

   const handleOpenModal = (src: string) => {
      setCurrentVideoSrc(src);
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
      setCurrentVideoSrc(null);
   };

   return (
      <div>
         {videoChunks.map((chunk, index) => (
            <div key={index} className="flex flex-wrap items-center">
               <Marquee reverse={index % 2 !== 0} className="gap-5" >
                  {chunk.map((video: any) => (
                     <VideoCard
                        key={video.snippet.resourceId.videoId}
                        video={video}
                        videoTitle={video.snippet.title}
                        src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                        onClick={() => handleOpenModal(`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`)}
                     />
                  ))}
               </Marquee>
            </div>
         ))}

         <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <div className="w-full h-full flex items-center justify-center">
               {currentVideoSrc && (
                  <iframe
                     width="560"
                     height="315"
                     src={currentVideoSrc}
                     style={{ border: 'none' }}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  ></iframe>
               )}
            </div>
         </Modal>
      </div>
   );
};