import React from 'react';
import ChefProfile from './ChefProfile';
import ChefMenu from './ChefMenu';
import { useParams } from 'react-router-dom';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';



export default function ChefProfileFull() {
  let {id} = useParams();
  return (
    <div>
      <Header/>
      <ChefProfile id={id}/>
      <ChefMenu id={id}/>
      <Footer />
    </div>
  )
}


