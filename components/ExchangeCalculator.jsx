"use client";

import React, { useState, useEffect, useRef} from "react";
import {TbArrowsDownUp} from  "react-icons/tb"
import RoundedBg from "./style/RoundedBg";

const ExchangeCalculator = ({ rates, date }) => {
    const selectRef= useRef("");

  const [clientSells, setClientSells] = useState(true);
  const [rateValue, setrateValue] = useState(rates[0][3]);
  const [clientHas, setClientHas] = useState(1);
  const [bankGives, setBankGives] = useState(selectRef.current.value * clientHas);
  
  const selectSell = rates.map((currency)=>{
    return [currency[0], currency[3]]
  })

  const selectBuy = rates.map((currency)=>{
    return [currency[0], currency[2]]
  })

  useEffect(() => {
    setBankGives(parseFloat((clientHas * rateValue).toFixed(2)));
  }, [clientHas, selectRef.current.value]);

  useEffect(() => {
    setrateValue(selectRef.current.value);
  }, [clientSells]);

  const handleClientSum = (e) => {
    const theyHave = e.target.value;

    isNaN(theyHave) ? setClientHas(1) : theyHave >=9999 ? setClientHas(9999) : setClientHas(theyHave);
  };

  const handleRateValue = (e) => {
    setrateValue(e.target.value);
  };

  return (
    <div className="flex items-center justify-between flex-col h-full space-y-2 text-lg lg:text-xl">
      <div className="flex items-center align-middle border-b pb-2 border-gray-200 text-[#222E50] text-lg lg:text-2xl text-center">
      <p className="pr-2">конвертер</p> <div title="Продажа / покупка" className="flexCenter w-9 h-9 rounded-full blueGradient text-white cursor-pointer hover:rotate-180 transition-transform duration-300 text-center" onClick={()=>{const newstate=!clientSells; setClientSells(newstate);}}><TbArrowsDownUp className="text-center" /></div>
      </div>
      <div className="flexCenter flex-col space-y-2 w-full">
          <div className="flex space-x-2  items-center">
            <p>я {clientSells && (" продам")} 
               {!clientSells && (" куплю")}</p>
            <input
              className="border border-[#0077B6] rounded-lg w-16 text-[#0077B6] px-2 py-1"
              value={clientHas}
              placeholder="0.00"
              onChange={handleClientSum}
              name="firstName"
            />
            <select className=" text-center rounded-2xl  p-1 text-[#0077B6] border border-dashed border-blue-100  w-12 focus:border-dotted" ref={selectRef} onChange={handleRateValue}>
              {rates.map((currency) => {
                

                return <option className="rounded-3xl text-left  text-[#0077B6]" key={currency[0]} value={clientSells ? currency[3] : currency [2]}>  {currency[0]}</option>
                })
                }
                 
            </select>
          </div>
           <div className={`flex  space-x-1.5 ${clientHas > 0 ? "opacity-100" : "opacity-0 "} transition-opacity duration-100 ease-in-out`}>
            <p>{clientSells && ("банку за ")} 
               {!clientSells && ("у банка за ")}</p> <p className="text-[#0077B6] font-medium "> {bankGives}</p><p> { bankGives >=2 && bankGives <5 ? "рубля" : bankGives >= 1 && bankGives < 2 ? "рубль" : "рублей"}    
            </p>
            
            
          </div>
          </div>
          <div className="flex justify-center space-x-1 pb-6"><p>на: </p>  <p className="text-slate-400">{date}</p></div>
        </div>
    
       
   
  );
};

export default ExchangeCalculator;
