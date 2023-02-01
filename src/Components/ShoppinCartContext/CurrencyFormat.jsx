import React from 'react'


const Currency = new Intl.NumberFormat(undefined,{
    currency: "EUR", style: "currency"
})

export default function CurrencyFormat(number) {
  return (
    Currency.format(number)
  )
}
