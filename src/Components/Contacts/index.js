import React from 'react';
import showCheckMar from '../../Helper/checkbox';
import showMeter from '../../Helper/meter';
import './style.css';

const Contacts = ({ 
  setSwitchPage,
  name,
  mail,
  phone,
  length,
  height,
  result,
  resultMaterial,
  farther,
  setFarther,
  setCount,
  count,
  setName,
  setMail,
  setPhone, 
}) => {
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
              title="Напишите свое имя"
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
              title="Напишите адрес электронной почты"
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
              title="Напишите свой телефон в формате +7 (999) 99-99-99"
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
          <span className="result-sentence">{` длинной ${length} ${showMeter(length)} `}</span> и
          <span className="result-sentence">{` высотой ${height} ${showMeter(height)} `}</span> из материала
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
}

export default Contacts;