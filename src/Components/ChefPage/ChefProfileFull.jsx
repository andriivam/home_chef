import React from 'react';
import ChefProfile from './ChefProfile';
import ChefMenu from './ChefMenu';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';

export default function ChefProfileFull() {
  return (
    <div>
      <Header/>
      <ChefProfile />
      <ChefMenu />
      <Footer/>
    </div>
  )
}


