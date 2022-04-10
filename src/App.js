import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';

const sampleQuote = {
  quote: "I think women and seamen don't mix",
  character: 'Waylon Smithers',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FWaylonSmithers.png?1497567511840',
  characterDirection: 'Left',
};

function App() {
  const [quote, setQuote] = React.useState(sampleQuote);
  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setQuote(data[0]);
      });
  };
  return (
    <div className="App">
      <QuoteCard quote={quote} />
      <button type="button" onClick={getQuote}>
        Get a new quote
      </button>
    </div>
  );
}

export default App;
