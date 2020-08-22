import React, { useState } from 'react';
import './index.css';

const FenceSize = (props) => {
  const [text, setText] = useState('');

  const handleUserInput = (event) => {
    const value = event.target.value.replace(/\D/, '');
    props.name === 'Длина' ? props.setLength(event.target.value) : props.setHeight(event.target.value);
    setText(value);
  }

  return (
    <div className="fence-size">
      <label>
        <p>{`${props.name} забора`}</p>
        <input type="text" className="fence-size__number" placeholder="0" value={text} onChange={handleUserInput} required/>
      </label>
      <span className="fence-size__dimension">метров</span>
    </div>
  );
}

// onChange={(event) => event.target.value.replace(/\D/, '')

export default FenceSize;