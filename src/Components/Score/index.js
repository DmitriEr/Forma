import React from 'react';
import './style.css';

const Score = ({ result }) => {
  return (
    <div className="price">
      <span>Cумма заказа: </span>
      <span className="price__number">{`${result} ₽`}</span>
    </div>
  )
}

export default Score;