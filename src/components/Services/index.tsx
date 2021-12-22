import React from 'react'
import ServiceCard from '../basics/ServiceCard'
import Button from '../basics/Button'
import { services } from '../../data'

/**
 * @name Services
 * @description Render the services area, and all of components inside
 * @returns JSX
 */
const index = () => {
  return (
    <div className='py-[94px] flex flex-col justify-center items-center'>
      <div className="flex flex-col text-center px-10">
        <span className='text-[20px] font-nunito text-secondary tracking-[0.24px]'>
          Servicios
        </span>
        <span className='text-[32px] font-nunito text-primary font-bold tracking-normal'>
          Tu agente cercano: en Hammer Insurance nadie se queda atrás
        </span>
        <span className='text-[20px] font-nunito text-primary tracking-[0.24px]'>
          En Hammer Insurance siempre hablamos tu idioma, conocemos tu comunidad, somos vecinos.
        </span>
      </div>
      <div className='pt-16 pb-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5'>
        {
          services.map((item, index) => <ServiceCard 
            key={`${item.id}-${index}`}
            title={item.title}
            text={item.text}
            click={item.click}
            url={item.url}
          />)
        }
      </div>
      <Button 
        click={() => alert('Ver todos los servicios')}
        size='large'
        type='rounded'
        text='Ver todos los servicios'
      />
    </div>
  )
}

export default index
