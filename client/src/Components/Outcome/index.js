import React from 'react';
import './style.css';

const Outcome = ({ 
  setSwitchPage,
  setLength,
  setHeight,
  setPrice,
  setResult,
  setResultMaterial,
  setName,
  setPhone,
  setMail,
  setMounting,
  setCheck,
  name,
  count,
  mail,
  phone
}) => (
  <div className="finish">
    <button
      className="prev-page"
      onClick={() => {
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
        setCheck(false);
      }}>
      Закрыть
    </button>
    <div className="finish__titles">
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

export default Outcome;