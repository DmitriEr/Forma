import React, { useState, useEffect } from 'react';
import showCheckMar from '../../Helper/Checkbox';
import './style.css';

const declination = {
  0: 'метр',
  1: 'метра',
  2: 'метров',
}

const EntryField = (props) => {
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
  }, [text]);

  const handleUserInput = (event) => {
    if (props.name === 'Длина забора' || props.name === 'Высота забора') {
      const value = event.target.value.replace(/\D/g, '');
      props.name === 'Длина забора' ? props.setLength(value) : props.setHeight(value);
      setText(value);
    }
    if (props.name === 'Ваше имя') {
      const value = event.target.value.replace(/\d/g, '');
      setText(value);
    }
    if (props.name === 'Электронная почта') {
      const value = event.target.value.replace(/[`\|/?"':;~,]/g, '');
      setText(value);
    }
    if (props.name === 'Телефон') {
      const value = event.target.value.replace(/\D/g, '');
      setText(value)
     }
   }

  return (
    <div className="form__inner">
      <label>
        <h4 className="fence-size__title">{`${props.name}`}</h4>
        <input 
          type={`${props.typeField}`} 
          className={`input-wrapper ${props.classOption}`} 
          placeholder={`${props.placeholderValue}`} 
          value={text} 
          onChange={handleUserInput}
          pattern={props.pattern}
          title={props.title} 
          required
        />
      </label>
      {props.sign ? <span className="fence-size__dimension">{showDeclination()}</span> : null}
      {showCheckMar(text.length)}
    </div>
  )
}

export default EntryField;