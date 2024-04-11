import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import shuffle from './utilities/shuffle';

export default function App() {
  const [cards, setCards] = useState(shuffle);

  return (
    <div className="grid">
      {
        cards.map((card) => {
          const { image, id, matched } = card;

          // Rather than returning a div, we return a Card component
          return (
            <Card
              key={id}
              image={image}
              selected={false}
              onClick={() => { }}>

            </Card>
          )
        })
      }
    </div>
  );
}
