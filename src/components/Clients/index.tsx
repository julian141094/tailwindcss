import React from 'react'
import { clientsUrl } from '../../data'

/**
 * @name Clients
 * @description Render the clients area, and all of components inside
 * @returns JSX
 */
const index = () => {
  return (
    <div className=' min-h-[47px] flex items-center justify-center'>
      <div className='min-h-[47px] flex flex-col justify-center items-center 
        gap-2 md:grid md:grid-cols-[265px_100px_100px_100px]'>
        <div className='min-w-[265px] flex justify-center items-center md:flex-row'>
          <img src="/assets/img/clients/stars@1x.png" alt="starts" width='132px' height='23px' />
          <span className='text-[10px] pl-3 font-nunito text-primary font-normal tracking-normal'>
            (525 Reviews de Clientes)
          </span>
        </div>
        {
          clientsUrl.map((item, index) => (
            <div className='w-[100px]' key={`${index}-clients`}>
              <img src={item} alt="img-client"  className='h-[47px] w-[100px]' />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default index
