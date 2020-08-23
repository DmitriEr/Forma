import React, { useState, useEffect } from 'react';
import './style.css';

const declination = {
  0: 'метр',
  1: 'метра',
  2: 'метров',
}

const FenceSize = (props) => {
  const [text, setText] = useState('');

  const showDeclination = () => {
    const value = text;
    const arr = value.split('');
    const last = arr[value.length - 1];

      if (parseInt(last, 10) === 1) {
        return declination[0];
      } else if (parseInt(last, 10) > 1 && value < 5) {
        return declination[1];
      }
      return declination[2];
  }

  useEffect(() => {
    showDeclination();
  }, [text])

  const handleUserInput = (event) => {
    const value = event.target.value.replace(/\D/, '');
    props.name === 'Длина' ? props.setLength(value) : props.setHeight(value);
    setText(value);
  }

  return (
    <div className="fence-size">
      <label>
        <h4 className="fence-size__title">{`${props.name} забора`}</h4>
        <input type="text" className="fence-size__number" placeholder="0" value={text} onChange={handleUserInput} required/>
      </label>
      <span className="fence-size__dimension">{showDeclination()}</span>
    </div>
  );
}

export default FenceSize;