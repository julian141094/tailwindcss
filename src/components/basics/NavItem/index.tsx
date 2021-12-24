import React from 'react'

type NavItemProps = {
  text : string,
  state ?: boolean,
}

const index = ( { text, state } : NavItemProps ) => {
  return (
    <li>
      <div className='w-[113px] h-[44px] flex justify-center items-center 
        cursor-pointer mx-8'>
        <span className={`
          text-[16px] 
          text-center 
          font-nunito 
          ${state ? 'text-primary ' : 'text-white '}
          font-bold 
          tracking-normal`}
        >
          {text}
        </span>
      </div>
    </li>
  )
}

export default index
