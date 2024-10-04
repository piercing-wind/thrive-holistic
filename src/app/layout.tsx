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
  title: "Thrive Holistic",
  description: "Generated by create next app",
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
