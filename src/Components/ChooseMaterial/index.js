import React, { useState } from 'react';
import './index.css';

const money = {
  'Профнастил': 400,
  'Модули': 500,
  'Бетон': 700,
  'Сетка': 200,
}

const ChooseMaterial = ({ setPrice }) => {
  const [boolean, setBoolean] = useState(false);
  const [material, setMaterial] = useState(`Профнастил 400 Р за м²`);

  const showValue = () => {
    if (boolean === false) {
      setBoolean(true);
    } else {
      setBoolean(false);
    }
  }

  const showMaterial = (name) => {
    return (
      <div className="materials" onClick={() => {
        setPrice(money[name]);
        setMaterial(`${name} ${money[name]} Р за м²`);
        setBoolean(false);
      }}>
        {`${name} ${money[name]} Р за м²`}
      </div>
    )
  }

  return (
    <div>
      <div className="materials materials__choice" onClick={() => showValue()}>
        {material}
        <span className="drop-down"></span>
      </div>
      <div className="options">
        {boolean ? showMaterial('Профнастил') : null}
        {boolean ? showMaterial('Модули') : null}
        {boolean ? showMaterial('Бетон') : null}
        {boolean ? showMaterial('Сетка') : null}
      </div>
    </div>
  )
}

export default ChooseMaterial;