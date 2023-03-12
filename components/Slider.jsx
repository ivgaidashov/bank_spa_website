"use client";

import React, { useState, useEffect } from "react";
import {IoIosArrowDropright, IoIosArrowDropleft} from "react-icons/io"
import Image from "next/image";
import BlueGrButton from "./style/BlueGrButton";

const Slider = ({links, timer}) => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = links.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, links]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, timer);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="w-full h-[400px] mt-10 bg-[#eff8fc] flex justify-center">
      <div className="widthUniversal w-full h-full relative md:overflow-hidden">
        {links.map((item, indexLink) => {
          const { img, text, highlight, highlightDescription, link, scale } = item;

          let position = "-translate-x-full opacity-0";
          if (indexLink === index) {
            position = " ";
          }
          if (
            indexLink === index - 1 ||
            (index === 0 && indexLink === links.length - 1)
          ) {
            position = "translate-x-full opacity-0";
          }
          return (
            <div /*key={Math.floor(Math.random() * 500)} otherwise an error in the console */
              className={`absolute top-0 left-0 w-full h-full flex md:flex-row flex-col justify-center items-center transition-transform duration-500 ease-in-out ${position}`}
            >
              <div className="md:w-[40%] w-full md:h-[80%] lg:h-[90%] xl:h-[100%] h-[60%] flexCenter relative">
                <Image
                  src={img}
                  alt="Кредиты, вклады, интернет банк"
                  className={`py-4 ${scale ? ' scale-75 ' : ''}`}
                  fill
                  /*next js requires to add this attribute for optimization however i havent tested it yet, w/o works just fine */
                  sizes="(max-width: 200px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="md:w-[60%] w-full md:h-full h-[40%] flex flex-col justify-center md:items-start md:ml-10 -mt-5 md:space-y-0 space-y-2">
                <div className="flex md:justify-start justify-center items-baseline md:-ml-2 ">
                 {highlight && <p className="md:text-[40px] lg:text-[50px] xl:text-[60px] text-[25px] text-[#0077B6] font-extralight">{highlight}</p>}
                 {highlightDescription && <p className="ml-2 text-[#0077B6] md:text-xl text-md font-light">{highlightDescription}</p>}
                </div>
                
                <div className="flexCenter md:space-x-6 space-x-3 ">
                
                <IoIosArrowDropleft className="arrowAstyle" onClick={() => setIndex(index - 1)}/>
                  <BlueGrButton title={"подробнее"}/>
                  <IoIosArrowDropright className="arrowAstyle" onClick={() => setIndex(index + 1)}/>
                </div>
                <p className="md:-ml-2 md:pr-20 md:px-0 px-5 md:text-md lg:text-lg xl:text-xl md:text-left text-center	text-[#222E50]">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Slider;
