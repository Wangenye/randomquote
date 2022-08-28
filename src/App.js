
import {useState,useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [quotes,setQuotes] = useState([])

  useEffect(() => {
    const fetchQuote = async()=>{
      const response = await axios.get('https://type.fit/api/quotes')
      setQuotes(response.data)
      
    }
    fetchQuote()
  },[])

  const fetchQuoteButton = async()=>{
    const response = await axios.get('https://type.fit/api/quotes')
    setQuotes(response.data)
    
  }
  const randomizeQuote = quotes.length * Math.random()
  const truncateQuote =Math.trunc(randomizeQuote)
  const quote = quotes[truncateQuote]

  console.log(quote);
  return (
    <div className="main">
      <div className="App" id="quote-box">
        {quote && (
          <div>
          <p id="text">{quote.text}</p>
          <p id="author">~{quote.author}~</p>
        </div>
        )}
      

      <button id="new-quote" onClick={fetchQuoteButton}>New Quote</button>
      <a href="/" id="tweet-quote">Tweet</a>
     
    </div>
    </div>
  );
}

export default App;
