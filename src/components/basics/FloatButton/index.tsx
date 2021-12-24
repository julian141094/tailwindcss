import React from 'react'

/**
 * @name FloatButton
 * @description Component to render a float button on right position
 * @returns JSX
 */
const index = () => {
  return (
    <div className='sticky bottom-6 pr-6 flex justify-end z-40'>
      <button className=' rounded-full w-20 hover:min-w-max h-20 hover:min-h-max
      bg-white group flex justify-center items-center p-5 shadow-lg'>
        <div className='group-hover:flex group-hover:mb-0 group-hover:flex-row-reverse justify-center items-center'>
          <span className='group-hover:pl-4'>
            <img src='assets/img/chat/chat.png' alt='chatIcon' />
          </span>
          <div className='group-hover:block hidden'>
            <div className="flex flex-col">
              <span className='text-center font-nunito text-primary text-[14px] font-bold tracking-normal'>
                ¿En qué podemos ayudarte?
              </span>
              <span className='text-center font-nunito text-primary text-[14px] font-normal tracking-normal'>
                Chatea con nostros
              </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default index
