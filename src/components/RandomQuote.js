import React, { useState, useEffect } from 'react'
import api from '../api/triviaAPI'

const RandomQuote = () => {
  const [quote, setQuote] = useState(null)

  const getRandomQuote = async () => {
    const quote = await api.getQuote()
    let processedQuote = []
    processedQuote.push(<p>{quote.quote}</p>)
    processedQuote.push(<p>--{quote.author}</p>)
    setQuote(processedQuote)
  }
  
  useEffect(
    () => {
      if (!quote){
        getRandomQuote()
      }
    }
  )

  return (
  <div>
    <h2>A random tech quote to brighten your day</h2>
    {quote && quote}
  </div>
  )
}

export default RandomQuote