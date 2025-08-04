
import React from 'react'

const Button = ({text, isBlack , toggle}) => {
  return (
    <button  onClick={toggle} className={isBlack ? `bg-black text-white py-3 px-14 text-xl rounded-[8px] hover:border-[1px] hover:bg-white hover:text-black hover:border-black transition-all` : `border-[1px]  py-3 px-14 text-xl rounded-[8px] hover:bg-black hover:text-white transition-all`}>
        {text}
    </button>
  )
}

export default Button
