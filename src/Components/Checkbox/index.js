import React from 'react';
import './style.css';

const Checkbox = ({ setMounting }) => {
  const handleUserCheck = (event) => {
    setMounting(event.target.checked);
  }
  
  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" onChange={handleUserCheck}/>
        Нужен монтаж
      </label>
    </div>
  );
}



export default Checkbox;