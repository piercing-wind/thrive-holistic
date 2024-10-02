export const getYoutubeVideos = async (uploadsPlaylistId: string, apiKey: string) => {
   const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=10&key=${apiKey}`;
   const response = await fetch(url);
   const data = await response.json();
   if (data.items) {
     return data.items;
   } else {
     throw new Error("No videos found");
   }
 };

export const getYoutubePlaylists = async (uploadsPlaylistId : string, apiKey : string) => {
   try {
     const playlistsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${apiKey}`;
     const response = await fetch(playlistsUrl);
     const data = await response.json();
     console.log(JSON.stringify(data));
     return data.items; // Returns the list of playlists
   } catch (error) {
     console.error("Error fetching YouTube playlists:", error);
     return [];
   }
 };

 export const getUploadsPlaylistId = async (channelId: string, apiKey: string) => {
   const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`;
   const response = await fetch(url);
   const data = await response.json();
   if (data.items && data.items.length > 0) {
     return data.items[0].contentDetails.relatedPlaylists.uploads;
   } else {
     throw new Error("Uploads playlist not found");
   }
 };