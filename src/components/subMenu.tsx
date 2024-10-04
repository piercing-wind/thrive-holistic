'use client'
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

export const SubMenu = ({menuItems,activeIndex ,setActiveIndex}: {menuItems : string[], activeIndex : number, setActiveIndex : (v: number)=> void}) => {

   return (
      <ul className="flex flex-col md:flex-row gap-4 md:gap-14 py-4 ml-4 md:ml-16 w-56 md:w-auto">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`hover:cursor-custom-hover flex items-center gap-2 ${
              activeIndex === index ? 'border-b-2 border-[#800000] font-medium' : ''
            } hover:border-b-2 hover:border-[#800000]`}
          >
            <span>{item}</span><ArrowUpRight />
          </li>
        ))}
      </ul>
    );
  };