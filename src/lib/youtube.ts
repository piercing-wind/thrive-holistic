'use server'
export const getChannelIdFromUsername = async (username: string, apiKey: string) => {
   const url = `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${username}&key=${apiKey}`;
   const response = await fetch(url);
   const data = await response.json();
   console.log(JSON.stringify(data))
   if (data.pageInfo && data.pageInfo.totalResults > 0) {
     return data.items[0].id;
   } else {
     console.log(new Error("Channel not found"));
   }
 };

export const getYoutubePlaylists = async (channelId : string, apiKey : string) => {
   try {
     const playlistsUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=50&key=${apiKey}`;
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