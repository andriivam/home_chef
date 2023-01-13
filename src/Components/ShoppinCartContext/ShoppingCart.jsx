import {createContext, useContext} from "react"
import React from 'react'

const ShoppingCartContext = createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider(){

}

export default function ShoppingCart() {
  return (
    <div>
      
    </div>
  )
}
