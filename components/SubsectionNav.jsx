'use client'

import React from 'react'
import Link from "next/link";
import Dropdown from './Dropdown';
import { useState, useEffect } from 'react';
import {MdOutlineArrowForwardIos} from "react-icons/md";
import { dynamicNavbar } from "../utils/usefulFunctions.js"

const SubsectionNav = ({section, allLinks, breakpoint}) => {
  
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    console.log(window)

    const {innerWidth, innerHeight} = typeof window !== "undefined" ?  {innerWidth: 1444, innerHeight: 799} : window;
    return {innerWidth, innerHeight};
  }
  
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const [mainLinks, hiddenLinks] = dynamicNavbar(allLinks, innerWidth, breakpoint);
  
  return (
    <div className='flex items-center mt-7 mx-4 sm:mx-0 w-full'>
        <div className='flex items-center space-x-2'>
            <MdOutlineArrowForwardIos color="#222E50" className='hover:rotate-180 transition-transform duration-300 ease-in hover:scale-150'/>
            <p className='hover:text-[#0077B6] py-0.5 px-2 pt-0.5 pb-1 hover:bg-white text-[14px] md:text-[16px] lg:text-xl rounded-full border hover:border-blue-200 shadow-md bg-[#0077B6] text-white hover:shadow-none transition-all duration-100 ease-in'>{section}</p>
        </div>
        <ul className='flex items-center'>
        {
        mainLinks.map((navlink) => (
            <li key={navlink.name} className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[14px] ml-3 md:ml-5 md:my-0 my-2 text-[#222E50] hover:text-[#F05D5E] transition-colors duration-200 ease-in-out">
              <Link href={navlink.link}>{navlink.name}</Link>
            </li>
          ))}
        </ul>
        <Dropdown title={"ещё"} items={hiddenLinks}/>
    </div>
  )
}

export default SubsectionNav