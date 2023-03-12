import React from 'react'
import BlueGrButton from './style/BlueGrButton'
import {SlPencil, SlBookOpen, SlGraph} from "react-icons/sl"
import Link from 'next/link'


const HomeOtherLinks = () => {

  const links = [
    {"title": "финансовая грамотность", "description": "правила финансовой безопасности, страхование вкладов, лекции", "icon": <SlPencil className='text-2xl text-[#0077B6] '/> , "page" : "http://www.google.ru"},
    {"title": "раскрытие информации", "description": "отчётность, международные стандарты, аудиторские сведения", "icon": <SlBookOpen className='text-2xl text-[#0077B6]'/>, "page" : "http://www.google.ru"},
    {"title": "процентные ставки", "description": "информация о процентных ставках по вкладам с физическими лицами", "icon": <SlGraph className='text-2xl text-[#0077B6]'/>, "page" : "http://www.google.ru"}

  ]  
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-8 sm:mx-0'>

        
        {links.map((card)=>(
            <div className='relative border h-44 md:h-40 lg:h-72 xl:h-56 p-5 bg-slate-100 rounded-2xl shadow-lg'>
            <div className='flex justify-between items-center '>
                <p className='text-xl font-semibold text-[#222E50] '>{card.title}</p>
                {card.icon}
            </div>

            <div className='mt-4 '>
                {card.description}
            </div>

            <div className='absolute bottom-4 left-4'><Link href={card.page}><BlueGrButton title={"перейти"}/></Link></div>
        </div>
        ))}
        
    

        

    </div>
  )
}

export default HomeOtherLinks