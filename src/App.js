import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src" : "IMG/BEDROCK.png"},
  {"src" : "IMG/CACTUS.png"},
  {"src" : "IMG/DIAMOND.png"},
  {"src" : "IMG/GRASS.png"},
  {"src" : "IMG/PUMPKIN.png"},
  {"src" : "IMG/TNT.png"}
]
  


function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}))

    setCards(shuffleCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
     <h1> Memory Game </h1>
     <button onClick={shuffleCards}>New Game</button>

     <div className="card-grid">
      {cards.map(card => (
        <SingleCard key={card.id} card={card} />
      ))}
     </div>
    </div>

  );
}

export default App;
