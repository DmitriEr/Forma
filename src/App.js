import React, { useState, useEffect } from 'react';
import ChooseMaterial from './Components/ChooseMaterial';
import showCheckMar from './Helper/Checkbox';
import './App.css';

const declination = {
  0: 'метр',
  1: 'метра',
  2: 'метров',
}

function App() {
  const [height, setHeight] = useState('');
  const [length, setLength] = useState('');
  const [price, setPrice] = useState(400);
  const [result, setResult] = useState(0);
  const [mounting, setMounting] = useState(false);
  const [check, setCheck] = useState(false);
  const [farther, setFarther] = useState(false);
  const [switchPage, setSwitchPage] = useState('start');
  const [resultMaterial, setResultMaterial] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const material = height * length * price;
    const option = mounting ? height * length * 200 : 0;
    const sum = material + option;
    if (length * height > 0 && check) {
      setFarther(true)
    } else {
      setFarther(false)
    }
    setResult(sum);
  }, [height, length, price, mounting, check]);

  useEffect(() => {
    if (name.length > 1 && mail.length > 5 && phone.length > 6) {
      setFarther(true);
    }
  }, [name, mail, phone])

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

  const handlerUserName = (event) => {
    const value = event.target.value;
    const word = value.replace(/\d/g, '');
    setName(word);
  }

  const handlerUserMail = (event) => {
    const value = event.target.value;
    setMail(value);
  }

  const handlerUserPhone = (event) => {
    const value = event.target.value;
    const number = value.replace(/\D/g, '');
    setPhone(number);
  }

  //helper

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

  const showCurrentPage = () => {
    switch(switchPage) {
      case 'start': 
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
                <span className="price__number">{`${manyMoney()}`}</span>
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
      break;
      case 'contact':
        return (
          <div className="form">
            <button className="prev-page" onClick={() => setSwitchPage('start')}>&larr;Вернуться</button>
            <h1 className="form__title">Пожалуйста, представьтесь</h1>
            <form autoComplete="off" name="fence">
            <div className="form__inner input__contact">
                <label>
                  <h4 className="input__title">Ваше имя</h4>
                  <input
                    type="text"
                    className="input-wrapper input-contact"
                    value={name}
                    onChange={handlerUserName}
                    required
                  />
                  {showCheckMar(name.length, 1)}
                </label>
              </div>
              <div className="form__inner input__contact">
                <label>
                  <h4 className="input__title">Электронная почта</h4>
                  <input
                    type="email"
                    className="input-wrapper input-contact"
                    value={mail}
                    onChange={handlerUserMail}
                    required
                  />
                  {showCheckMar(mail.length, 5)}
                </label>
              </div>
              <div className="form__inner input__contact">
                <label>
                  <h4 className="input__title">Телефон</h4>
                  <input
                    type="tel"
                    className="input-wrapper input-contact"
                    value={phone}
                    onChange={handlerUserPhone}
                    required
                  />
                  {showCheckMar(phone.length, 6)}
                </label>
              </div>
              <div className="result">
                Вы укомплектовали забор
                <span className="result-sentence">{` длинной ${length} метров `}</span> и
                <span className="result-sentence">{` высотой ${height} метров `}</span> из материала
                <span className="result-sentence">{` ${resultMaterial.toLowerCase()} `}</span> на сумму
                <span className="result-price">{` ${result} Р`}</span>
              </div>
              <div className="input__contact">
                <input 
                  type="submit"
                  className={`${farther ? 'continue__on data' : 'continue__off data'}`}
                  value="Отправить"
                  onClick={(event) => {
                    event.preventDefault();
                    if (farther) {
                      setSwitchPage('finish');
                      setFarther(false);
                      const num = count + 1;
                      setCount(num)
                    }
                  }
                }/>
              </div>
            </form>
          </div>
        )
      break;
      default:
        return (
          <div className="finish">
            <button className="prev-page" onClick={() => {
              setSwitchPage('start');
              setLength('');
              setHeight('');
              setPrice(400);
              setResult(0);
              setResultMaterial('');
              setName('');
              setPhone('');
              setMail('');
              setMounting(false);
            }}>Закрыть</button>
            <div>
              <h2 className="finish__title finish__first-sentence">
                {`${name},`}
              </h2>
              <h2 className="finish__title finish__last-sentence">
                заказ
                <span className="important-data">{` №${count} `}сформирован</span>
              </h2>
            </div>
            <div className="finish__sentences">
              <p className="finish__mail">
                Мы повторили его комплектацию на почту
                <span className="important-data">{` ${mail}`}</span>
              </p>
              <p className="finish__phone">
                В ближайшее время наш специалист свяжется с вами по телефону
                <span className="important-data">{` ${phone} `}</span>
              </p>
            </div>
          </div>
        );
    }
  }

  return (
    <div className="App">
      {showCurrentPage()}
    </div>
  );
}

export default App;
