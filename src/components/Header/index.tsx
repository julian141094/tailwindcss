import React from 'react'
import Button from '../basics/Button'

/**
 * @name Header
 * @description Render the header area, and all of components inside
 * @returns JSX
 */
const index = () => {

  /**
   * @name handleButton
   * @param msg string 
   */
  function handleButton(msg : string) {
    alert(msg)
  }
  
  return (
    <div className='min-h-[570px] flex flex-col md:grid md:grid-cols-2 '>
      <div className="pt-[200px]">
        <div className='flex flex-col pl-[112px] pr-[20px] '>
          <span className='text-[20px] font-nunito text-secondary font-normal tracking-[0.4px]'>
            Seguro integral en el que puedes confiar
          </span>
          <span className='text-[48px] font-nunito text-primary font-bold tracking-normal'>
            Confía en Hammer Insurance ¡somos vecinos!
          </span>
          <span className='text-[18px] font-nunito text-primary font-normal tracking-normal'>
            Calidad en el trato al cliente y los mejores precios del mercado, 
            amplias coberturas y facilidad en los pagos.
          </span>
          <div className="pt-[65px] pb-[145px]">
            <Button 
              click={() => handleButton('handleServicesButton')}
              size='large'
              type='backgroud-secondary'
              text='Servicios'
              style='w-[195px] mr-[24px]'
            />
            <Button 
              click={() => handleButton('handleRequestBudgetButton')}
              size='large'
              type='rounded primary'
              text='Solicitar Presupuesto'
              style='w-[230px] '
            />
          </div>
        </div>
      </div>
        <div className="bg-header-background bg-no-repeat bg-[right_top] bg-[55%]  h-full pt-[150px]
          flex justify-center items-center " 
          style={{backgroundSize: '70%'}}>
          <img src="/assets/img/head/car.png" alt="car" className='md:w-[70%] md:h-[70%]'/>
        </div>
    </div>
  )
}

export default index
