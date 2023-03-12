import React from 'react'

const Footer = () => {
  return (
    <div className='widthUniversal mt-16 pb-10 border-t border-t-slate-200'>
        <div className='flexCenter flex-col mt-3 '>
            <div className='flexCenter text-[#222E50] '><p >карьера</p> &nbsp; <p>&#8285;</p> &nbsp; <p><a href = "mailto: complaint@tkpb.tambov.ru">жалобы и предложения</a></p> &nbsp; <p>&#8285;</p>&nbsp; <p>объявления</p></div>
            <div className='flexCenter text-[#0077B6]'><p><a href = "https://www.asv.org.ru/">агенство по страхованию вкладов</a></p> </div>
            <div className='flexCenter text-[#0077B6]'><p><a href = "https://arb.ru/">ассоциация российских банков</a></p> </div>
            <div className='flexCenter text-[#222E50]'><p>тамбов, советская 118</p> </div>
        </div>
    </div>
  )
}

export default Footer