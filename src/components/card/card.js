import { useState } from 'react';
import './card.scss';


const Card = ({symbol, number, flipped }) => {
    const isNumber = ! isNaN(number);
    const[isFlipped, setIsFlipped] = useState(flipped);
  
    return <div 
      symbol={symbol}
      number={number}
      className={['card' ,(isFlipped? 'flipped' : '')]
      .filter(Boolean).join(' ')
    }
      onClick ={()=>  setIsFlipped(!isFlipped)} 
    >
      <div className="container">
        <div className="front">
          <div className="card-corner">
            <div>{ number }</div>
            <div>{ symbol }</div>
          </div>
          <div className="symbols">
            {(number === 'A') && <div>{symbol}</div>}
            {(['J','Q','K'].includes(number)) && <div className="image"></div>}
            {(isNumber)&& new Array(parseInt(number))
            .fill(symbol)
            .map((_, key)=> <div key={key} className="cardsymbol" >{symbol}</div>)}
          </div>
          <div className="card-corner">
            <div>{ number }</div>
            <div>{ symbol }</div>
          </div>
        </div>
        <div className="back"> </div>
      </div>
    </div>
}
export default Card

