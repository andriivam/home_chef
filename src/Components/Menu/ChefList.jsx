import React from 'react';
import ChefItem from './ChefItem';
import { useParams } from 'react-router-dom';
import Footer from '../HomePage/Footer';
import Header from '../HomePage/Header';


export default function ChefList() {
    let {id} = useParams();
  return (
    <div> 
      <Header />
      <div className="chefList">
          <ChefItem id={id}/>
      </div>
      <Footer/>
    </div>
  )
}
