import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainSection from './MainSection'

export default function HomePage() {
  return (
    <div className ="home_mainSection">
      <Header></Header>
      <MainSection/>
      <Footer></Footer>
    </div>
  )
}
