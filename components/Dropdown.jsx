"use client";

import React from "react";
import Link from "next/link";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md"
import { useState } from "react";

const Dropdown = ({ title, items }) => {
  let [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center ml-2 md:ml-4 text-[#222E50]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`bg-white flex items-center gap-x-2 text-[14px] lg:text-lg font-light border border-dashed border-blue-100 px-1 py-0.5 lg:px-2 lg:py-1 cursor-pointer rounded-xl ${open ? 'bg-blue-50' : ' '}`}
      >
        {title}
        {open ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
      </button>
      {open && (
        <div className="absolute top-10 -left-4 flex flex-col md:w-[250px] lg:w-[300px] w-[220px] z-10 -ml-14 md:ml-5 px-4 bg-white rounded-md shadow-md">
          {items.map((navlink) => (
            <p
              key={navlink.name}
              className="w-full md:text-md lg:text-lg text-sm font-light md:my-1 my-2 hover:text-[#F05D5E] transition-colors duration-200 ease-in-out"
            >
              <Link href={navlink.link}>{navlink.name}</Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
