import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const currentDate = new Date().toISOString();
   const website = process.env.NEXT_PUBLIC_WEBSITE_URL;

   return [
    {
      url: `${website}/`,
      lastModified: new Date(currentDate),
      priority: 1,
      changeFrequency: "monthly",
    },
    {
      url: `${website}/shop`,
      lastModified: new Date(currentDate),
      priority: 1,
      changeFrequency: "monthly",
    },
    {
      url: `${website}/gallery`,
      lastModified: new Date(currentDate),
      priority: 1,
      changeFrequency: "monthly",
    },
  
  ];
}
