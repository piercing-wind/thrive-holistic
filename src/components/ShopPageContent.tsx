'use client'
import { useState } from "react";
import { SubMenu } from "./subMenu"
import { Services } from "./services";
import { WorkshopAndCourses } from "./workshopAndCourses";
import { useSearchParams } from "next/navigation";
import { Sparkle } from 'lucide-react';

export const ShopPageContent = () => {
  const  searchParams = useSearchParams();
  const index = searchParams.get('index');
  const [activeIndex, setActiveIndex] = useState<number>(index ? parseInt(index) : 1);
   
  const menuItems = ['Products', 'Services', 'Workshop & Courses'];
  const renderContent = () => {
   switch (activeIndex) {
     case 0:
       return 'Products';
     case 1:
       return <Services />;
     case 2:
       return <WorkshopAndCourses />;
     default:
       return <Services />;
   }
 };
   return (
      <section className="w-[95%] lg:w-[80%] mx-auto">
      <SubMenu 
         menuItems={menuItems}
         activeIndex={activeIndex}
         setActiveIndex={setActiveIndex}
      />
      <div className="w-full flex items-center justify-center gap-4 mt-2"><Sparkle size={16} /><Sparkle size={24} /><Sparkle size={32} /><Sparkle size={26} /><Sparkle size={16} /></div>
      {renderContent()}
   </section>
   )
}