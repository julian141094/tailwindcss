import { createPublicKey } from 'crypto'
import React from 'react'

type ButtonProps = {
  size: string,
  type: string,
  click: any,
  text: string,
}

/**
 * @name Button
 * @description Render a button with custom text and click functions (and some others features)
 * @param size string 
 * @param type string 
 * @param text string 
 * @param click function 
 * @returns JSX.Component
 */
const index = ( { size = 'small', type = 'rounded', text = 'Ver más', click } : ButtonProps) => {
  return (
    <button onClick={() => click()} className={`
      ${
        type === 'rounded' ? 
        `bg-transparent
        border 
        border-secondary` : ''
      }
      text-center
      font-nunito
      text-secondary
      rounded-[8px]
      min-w-[80px]
      tracking-normal
      ${size == 'small' ? 'h-8' : 'h-12' }
      ${size == 'small' ? 'px-0' : 'px-6' }
      text-[12px]
      z-20
    `}>
      {text}
    </button>
  )
}

export default index
