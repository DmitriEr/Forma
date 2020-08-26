import React from 'react';
import './style.css';

const Score = ({ result }) => {
  const manyMoney = () => {
    const str = result.toString();
    const many = str.length;
    switch(many) {
      case 1:
        return `${result} ₽`;
        break;
      case 2:
        return `${result} ₽`;
        break;
      case 3:
        return `${result} ₽`;
        break;
      case 4: 
        return `${str[0]} ${str.slice(1, 4)} ₽`;
        break;
      case 5:
        return `${str.slice(0, 2)} ${str.slice(2, 5)} ₽`;
        break;
      case 6:
        return `${str.slice(0, 3)} ${str.slice(3, 6)} ₽`;
        break;
      case 7:
        return `${str[0]} ${str.slice(1, 4)} ${str.slice(4, 7)} ₽`;
        break;
      case 8:
        return `${str.slice(0, 2)} ${str.slice(2, 5)} ${str.slice(5, 8)} ₽`;
        break;
      case 9:
        return `${str.slice(0, 3)} ${str.slice(3, 6)} ${str.slice(6, 9)} ₽`;
        break;
      case 10:
        return `${str[0]} ${str.slice(1, 4)} ${str.slice(4, 7)} ${str.slice(7, 10)} ₽`;
      default:
        return 'Уточнить детали';
    }
  }

  return (
    <div className="price">
      <span>Cумма заказа: </span>
      <span className="price__number">{`${manyMoney()}`}</span>
    </div>
  )
}

export default Score;