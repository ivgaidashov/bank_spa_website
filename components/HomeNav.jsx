'use client';

import React, {useState} from 'react'
import Link from "next/link";
import {GiHamburgerMenu} from "react-icons/gi"
import {GrClose} from "react-icons/gr"


const HomeNav = () => {
  const links = [
    { name: "офисы и банкоматы", link: "/" },
    { name: "о банке", link: "/" },
    { name: "новости", link: "/" },
    { name: "eng", link: "/" },
  ];

  let [open, setOpen] = useState(false);
  const icon1 = <GiHamburgerMenu onClick={()=>setOpen((prev) => !prev)} className="md:hidden absolute top-1 right-0 cursor-pointer" color="#222E50"/>;
  const icon2 = <GrClose onClick={()=>setOpen((prev) => !prev)} className="md:hidden absolute top-1 right-0 cursor-pointer" color="#222E50"/>;

    
  return (
    <div className="md:flex mx-4 sm:mx-0 items-center justify-between relative">
        <div className="w-[21%]">
          <Link href="/">
            <img src="/tkpb.svg" alt="logo" className="object-contain" />
          </Link>
        </div>

        {open ? icon2 : icon1}

        <ul className={`md:flex md:items-center md:static absolute md:w-auto w-full pl-4 md:pb-0 pb-4 ${open ? ' opacity-100 z-20' : ' hidden ' } md:opacity-100  text-[#222E50] md:bg-slate-50 bg-white  rounded-md md:shadow-none shadow-md` }>
          {links.map((navlink) => (
            <li key={navlink.name} className={`md:ml-5 md:my-0 my-2 lg:text-xl  hover:text-[#F05D5E] transition-colors duration-200 ease-in-out`}>
              <Link href={navlink.link}>{navlink.name}</Link>
            </li>
          ))}
        
        </ul>
      </div>
  )
}

export default HomeNav