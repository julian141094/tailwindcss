import React from 'react'
import Button from '../Button'

type CardProps = {
  title: string,
  text: string,
  click: any,
  url: string,
}

const index = ( {title, text, click, url } : CardProps ) => {
  return (
    <div className='w-[298px]'>
      <div className="shadow-lg p-[35px] flex flex-col w-[245px] h-[280px] rounded-[20px]">
        <span className='font-nunito text-primary text-[24px] font-bold tracking-normal'>
          {title}
        </span>
        <span className='min-h-[105px] font-nunito text-primary text-[14px] font-normal tracking-normal'>
          {text}
        </span>
        <div className="flex items-center h-full">
          <img src={url} alt="car" className='z-10 absolute pl-32 pt-8'/>
          <div className='w-12 flex items-start justify-start'>
            <Button 
              click={click}
              size='small'
              type='rounded'
              text='Ver más'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
