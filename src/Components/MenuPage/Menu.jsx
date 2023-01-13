import React from 'react'
import Header from '../HomePage/Header'
import Footer from '../HomePage/Footer'
import MenuContent from './MenuContent'


export default function Menu() {
  return (
    <div className='Menu'>
      <Header/>
      <MenuContent/>
      <Footer/>
    </div>
  )
}
