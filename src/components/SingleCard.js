import './SingleCard.css'

export default function SingleCard({ card, handle }){
  const handleClick = () => {
    handleChoice(card)
  }
    return (
        <div className='card'> 
        <div>
          <img className='front' src={card.src} alt='card front' />
          <img 
          className='back' 
          src='/img/COVER1.png' 
          onClick={handleClick} 
          alt='card back' />
          </div>
        </div>
    )
}