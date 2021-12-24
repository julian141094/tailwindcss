import React from 'react'
import NavItem from '../basics/NavItem'
import { itemsNav } from '../../data'
import Button from '../basics/Button'

/**
 * @name Nav
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
    <div className='absolute flex justify-between top-0 invisible xl:visible
      min-h-[113px] w-full px-12 py-9'>
      <div className="flex flex-col">
        <img src="/assets/img/title.jpeg" alt="Logo" />
        <span className='text-[17px] text-right font-nunito text-primary font-normal 
          tracking-normal'>
          Insurance
        </span>
      </div>
      <div className='flex invisible xl:visible'>
        <div className=''>
          <ul className='flex'>
            { itemsNav.map((item : any, index) => <NavItem 
              text={item.text}  
              state={item.state}
              key={`${index}-nav-item`}
            />) }
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Button 
            click={() => handleButton('handleRequestBudgetButton')}
            size='large'
            type='rounded white'
            text='Pedir Presupuesto'
          />
          <ul className=''>
            <NavItem 
              text={'SPA'}  
              state={false}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default index
