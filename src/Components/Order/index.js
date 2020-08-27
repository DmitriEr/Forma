import React from 'react';
import ChooseMaterial from '../ChooseMaterial';
import showCheckMar from '../../Helper/Checkbox';
import manyMoney from '../../Helper/ManyMoney';
import './style.css';

const Order = ({
  length,
  height,
  setPrice,
  check,
  setCheck,
  setResultMaterial,
  mounting,
  farther,
  setFarther,
  setSwitchPage,
  setMounting,
  setLength, 
  result,
  setHeight 
}) => {
  const handleUserCheck = (event) => {
    setMounting(event.target.checked);
  }

  const handlerUserLenght = (event) => {
    const value = event.target.value;
    const number = value.replace(/\D/g, '');
    setLength(number);
  }

  const handlerUserHeight = (event) => {
    const value = event.target.value;
    const number = value.replace(/\D/g, '');
    setHeight(number);
  }

  return (
    <div className="form">
      <h1 className="form__title">Заказать забор</h1>
      <form autoComplete="off" name="fence">
        <div className="form__inner">
          <label>
            <h4 className="input__title">Длина забора</h4>
            <input
              type="text"
              className="input-wrapper"
              placeholder="0"
              title="Введите длину забора в метрах"
              value={length}
              onChange={handlerUserLenght}
              required
            /> 
          </label>
          <span className="fence-size__dimension">метров</span>
          {showCheckMar(length.length, 0)}
        </div>
        <div className="form__inner">
          <label>
            <h4 className="input__title">Высота забора</h4>
            <input
              type="text"
              className="input-wrapper"
              placeholder="0"
              title="Введите высоту забора в метрах"
              value={height}
              onChange={handlerUserHeight}
              required
            /> 
          </label>
          <span className="fence-size__dimension">метров</span>
          {showCheckMar(height.length, 0)}
        </div>
        <ChooseMaterial setPrice={setPrice} check={check} setCheck={setCheck} setResultMaterial={setResultMaterial}/>
        <div className="checkbox-wrapper">
          <label>
            <input type="checkbox" onChange={handleUserCheck} checked={mounting}/>
              Нужен монтаж
          </label>
        </div>
        <div className="price">
          <span>Cумма заказа: </span>
          <span className="price__number">{`${manyMoney(result)}`}</span>
        </div>
        <input 
          type="submit"
          className={`${farther ? 'continue__on continue' : 'continue__off continue'}`}
          value="Далее"
          title="Заполните все обязательные поля: длина, высота, материал"
          onClick={(event) => {
            event.preventDefault();
            if (farther) {
              setSwitchPage('contact');
              setFarther(false);
            }
          }
        }/>             
      </form>
    </div>
  );
}

export default Order;