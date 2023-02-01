import React from 'react';
import ChefProfile from './ChefProfile';
import ChefMenu from './ChefMenu';
import { useParams } from 'react-router-dom';

export default function ChefProfileFull() {
  let {id} = useParams();
  return (
    <div>
      <ChefProfile id={id}/>
      <ChefMenu />
    </div>
  )
}


