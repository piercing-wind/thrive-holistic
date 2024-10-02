'use client'
import { AlignLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleClickOutside = (event: MouseEvent) => {
   if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
     setIsOpen(false);
   }
 };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full py-4 flex items-center justify-between pl-4 sm:px-8 lg:px-16 mx-auto">
     <Link href='/' className="flex items-center gap-4">
        <div className="relative h-14 w-14">
          <Image
            src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/thriveHolisticLogoCircle.png`}
            unoptimized 
            loading="lazy"
            alt="Thrive Holistic Logo"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="relative h-20 w-56">
          <Image
            loading="lazy"
            unoptimized
            src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/thriveHolisticLogo.png`}
            alt="Thrive Holistic Logo"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </Link>
      <ul className="md:flex items-center gap-14 hidden">
        <li><Link href="/shop?index=1">Services</Link></li>
        <li><Link href="/shop?index=0">Shop</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="#">Blog</Link></li>
      </ul>
      <div className="flex items-center justify-center pr-2 md:hidden">
         <AlignLeft size={38} onClick={toggleMenu}/>
      </div>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 p-4"
        >
         <div className="flex items-center justify-between pr-2 md:hidden mb-8">
            <span className="text-xl font-bold">Menu</span>
           <X size={38} onClick={toggleMenu}/> 
         </div>
          <ul className="flex flex-col items-start gap-4">
            <li><Link href="/shop?index=1">Services</Link></li>
            <li><Link href="/shop?index=0" onClick={toggleMenu}>Shop</Link></li>
            <li><Link href="/gallery" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link href="#" onClick={toggleMenu}>Blog</Link></li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};