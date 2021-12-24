import { createPublicKey } from 'crypto'
import React from 'react'

type ButtonProps = {
  size?: string,
  type: string,
  click: any,
  text: string,
  style?: string,
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
const index = ( { size = 'small', type = 'rounded', text = 'Ver más', click, style = '' } : ButtonProps) => {
  return (
    <button onClick={() => click()} className={`
      ${
        type === 'rounded' ? 
        `bg-transparent
        border 
        text-[12px]
        text-secondary
        border-secondary` :  
        type === 'rounded primary' ?  `
        bg-transparent
        border 
        text-[16px]
        text-primary
        border-primary` : 
        type === 'backgroud-secondary' ?  `
        bg-secondary
        text-[16px]
        text-white` : 
        type === 'rounded white' ?  `
        bg-transparent
        text-[16px]
        border
        border-white
        text-white` :''
      }
      text-center
      font-nunito
      text-secondary
      rounded-[8px]
      min-w-[80px]
      tracking-normal
      ${size == 'small' ? 'h-8' : 'h-12' }
      ${size == 'small' ? 'px-0' : 'px-6' }
      z-20
      ${style}
    `}>
      {text}
    </button>
  )
}

export default index
