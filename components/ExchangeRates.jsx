import React from 'react'
import RoundedBg from './style/RoundedBg'

const ExchangeRates = ({rates}) => {
  return (
    <table className="table-fixed w-full text-center border-separate border-spacing-y-5">
  <thead >
    <tr className="border-b-4 border-gray-200 text-[#0077B6] text-lg md:text-2xl ">
      <th className="w-[40%] font-normal text-left border-b pb-2">валюта</th>
      <th className="font-normal border-b pb-2">купить</th>
      <th className="font-normal border-b pb-2">продать</th>
      <th className="font-normal border-b pb-2">цб</th>
    </tr>
  </thead>
  <tbody className=''>
    {rates.map((currency)=>(
        <tr className="text-lg md:text-xl text-[#222E50]">
        <td className="flex align-middle"><RoundedBg data={currency[0]}/>{currency[1]}</td>
        <td>{currency[2]}</td>
        <td>{currency[3]}</td>
        <td>{currency[4]}</td>
      </tr>
    ))}
  </tbody>
</table>
  )
}

export default ExchangeRates