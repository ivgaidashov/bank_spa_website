import React from 'react'
import Image from 'next/image'

const Award = () => {
  return (
    <div className='sm:w-full h-[180px] mx-8 sm:mx-0 border flex bg-slate-100 rounded-2xl shadow-lg'>
        <div className="w-[20%] relative ">
                <Image
                  src="/homepage/award2022.png"
                  alt="ТКПБ лучший региональный банк 2022"
                  className="py-4 px-2"
                  fill
                  /*next js requires to add this attribute for optimization however i havent tested it yet, w/o works just fine */
                  
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className='w-[80%] pr-8 flex justify-center flex-col'><p className='text-[#222E50] font-semibold text-xl md:text-2xl lg:text-3xl'>
                лучший региональный банк
                </p>

                <p className="text-[#222E50] mt-4 text-sm md:text-md leading-tight ">
                по версии ежегодной международной премии в области экономики и финансов имени П.А. Столыпина 2022 года
                </p>
                
                </div>
    </div>
  )
}

export default Award