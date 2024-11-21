import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src" : "IMG/BEDROCK.png" ,matched: false},
  {"src" : "IMG/CACTUS.png" ,matched: false},
  {"src" : "IMG/DIAMOND.png" ,matched: false},
  {"src" : "IMG/GRASS.png" ,matched: false},
  {"src" : "IMG/PUMPKIN.png" ,matched: false},
  {"src" : "IMG/TNT.png" ,matched: false}
]
  


function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


  //shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}))
  
    setCards(shuffleCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  useEffect(() =>{
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards =>{
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            }else {
              return card
            }
          })
        })
        resetTurn()
      }
        else{
          console.log('Those cards dont match!')
          resetTurn()
        }
    }

  }, [choiceOne,choiceTwo])
  console.log(cards)

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns +1)
  }
  return (
    <div className="App">
     <h1> Memory Game </h1>
     <button onClick={shuffleCards}>New Game</button>

     <div className="card-grid">
      {cards.map(card => (
        <SingleCard 
        key={card.id} 
        card={card}
        handleChoice={handleChoice} />
      ))}
     </div>
    </div>

  );
}

export default App;
