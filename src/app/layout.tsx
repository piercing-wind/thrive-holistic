import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const epilogue = localFont({
src :[
   {
      path: "./fonts/Epilogue/Epilogue-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: './fonts/Epilogue/Epilogue-Italic-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Epilogue/static/Epilogue-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
   ],
   variable: '--font-epilogue',
   
});



export const metadata: Metadata = {
   title: "Thrive Holistic | Hridaya Mahajan Trarot Reader, Card Reader, Vastu & Feng Shui Expert",
   description: "Thrive Holistic, founded by Hridaya Mahajan, offers expert Vastu, Feng Shui, Astrology, Card Reading, and holistic healing services. Specializing in energy healing, remedies, and counseling sessions to foster balance, well-being, and spiritual growth.",
   metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL!),
   applicationName: "Thrive Holistic", 
   authors: [
     {
       name: "Sourabh",
       url: "https://www.linkedin.com/in/sourabh-sharma-8987451a2/",
     },
   ],
   generator: "Thrive Holistic",

   keywords:  [
      "Thrive Holistic",
      "Hridaya Mahajan",
      "Vastu expert",
      "Feng Shui expert",
      "Holistic healer",
      "Energy healing",
      "Crystal healing",
      "Astrologist",
      "Card reader",
      "Psychic readings",
      "Vastu and Feng Shui services",
      "Spiritual counseling",
      "Healing remedies",
      "Holistic well-being",
      "Chakra balancing",
      "Tarot card reading",
      "Feng Shui consultation",
      "Vastu Shastra",
      "Astrology predictions",
      "Spiritual growth",
      "Holistic healing center"
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
      siteName : "Thrive Holistic",
      images:[
         {
            url : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/opengraph-image.jpg`,
            height : 630,  
            width : 1200,
            alt : "Welcome to Thrive Holistic"
         }
      ],
      description : "Thrive Holistic, founded by Hridaya Mahajan, offers expert Vastu, Feng Shui, Astrology, Card Reading, and holistic healing services. Specializing in energy healing, remedies, and counseling sessions to foster balance, well-being, and spiritual growth.",
   },  
   other:{
      ["bingbot"]: "noarchive",
   },
   
 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} antialiased overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
