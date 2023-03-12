import React from 'react'

const BlueGrButton = ({title}) => {
  return (
    <button
    type="button"
    className="text-white blueGradient hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg md:text-md lg:text-lg md:px-3 md:py-1.5 px-1.5 py-0.5 text-center md:mr-2 md:mb-2 transition-all duration-200 ease-in"
  >
    {title}
  </button>
  )
}

export default BlueGrButton