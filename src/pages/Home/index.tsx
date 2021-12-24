import React from 'react'
import FloatButton from '../../components/basics/FloatButton'
import Services from '../../components/Services'
import Clients from '../../components/Clients'
import Header from '../../components/Header'
import Nav from '../../components/Nav'

const index = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Clients/>
      <Services/>
      <FloatButton/>
    </div>
  )
}

export default index
