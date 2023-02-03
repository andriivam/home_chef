import React from 'react';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import MenuContent from './MenuContent';
import { useParams } from 'react-router-dom';

export default function Menu() {
  let {id} = useParams();
  return (
    <div className='Menu'>
      <Header/>
      <MenuContent id={id} />
      <Footer/>
    </div>
  )
}
