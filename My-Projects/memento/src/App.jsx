import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import shuffle from './utilities/shuffle';

export default function App() {
  const [cards, setCards] = useState(shuffle);

  return (
    <div className="grid">
      
    </div>
  );
}
