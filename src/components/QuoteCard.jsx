import React from 'react';

function QuoteCard({quote }) {
  return (
    quote && (
      <div className='DisplayEmployee'>
        <img src={quote.image} alt={quote.character}></img>
        <h1>{quote.quote}</h1>
        <p>{quote.character}</p>
      </div>
    )
  );
}

export default QuoteCard;
