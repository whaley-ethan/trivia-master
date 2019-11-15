import React from 'react'

function AmountSelector({amount, setAmount}) {

  return (
    <input type="number" min="1" max="10" value={amount} onChange={(e)=> setAmount(e.target.value)} />
  )
}

export default AmountSelector