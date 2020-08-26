import React, { useState, useEffect } from 'react';
import EntryField from './Components/EntryField';
import ChooseMaterial from './Components/ChooseMaterial';
import Checkbox from './Components/Checkbox';
import Score from './Components/Score';
import './App.css';

function App() {
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [price, setPrice] = useState(400);
  const [result, setResult] = useState(0);
  const [mounting, setMounting] = useState(false);
  const [check, setCheck] = useState(false);
  const [farther, setFarther] = useState(false);
  const [switchPage, setSwitchPage] = useState('start');
  const [resultMaterial, setResultMaterial] = useState('');

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
  }, [height, length, price, mounting, check])

  const showCurrentPage = () => {
    switch(switchPage) {
      case 'start': 
        return (
          <div className="form">
            <h1 className="form__title">Заказать забор</h1>
            <form autoComplete="off" name="fence">
              <EntryField name="Длина забора" title="Длина забора указывается в метрах" typeField="text" classOption="fence-size__number" placeholderValue="0" sign={true} setLength={setLength}/>
              <EntryField name="Высота забора" title="Высота забора указывается в метрах" typeField="text" classOption="fence-size__number" placeholderValue="0" sign={true} setHeight={setHeight}/>
              <ChooseMaterial setPrice={setPrice} check={check} setCheck={setCheck} setResultMaterial={setResultMaterial}/>
              <Checkbox setMounting={setMounting}/>
              <Score result={result}/>
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
            <h1 className="form__title">Пожалуйста, представьтесь</h1>
            <EntryField 
              name="Ваше имя"
              classOption="contact__number"
              placeholderValue=""
              sign={false}
              typeField="text"
            />
            <EntryField
              name="Электронная почта"
              classOption="contact__number"
              placeholderValue=""
              sign={false}
              typeField="text"
            />
            <EntryField 
              name="Телефон"
              classOption="contact__number"
              placeholderValue="Телефон +7 (___) ___-__-__"
              title="Номер должен содержать 11 цифр и начинаться с 8"
              sign={false}
              typeField="text"
            />
            <div className="result">
              Вы укомплектовали забор
              <span className="result-sentence">{` длинной ${length} метров `}</span> и
              <span className="result-sentence">{` высотой ${height} метров `}</span> из материала
              <span className="result-sentence">{` ${resultMaterial.toLowerCase()} `}</span> на сумму
              <span className="result-price">{` ${result} Р`}</span>
            </div>
            <div className="result-btn__wrapper">
            <input 
                type="submit"
                className={`${farther ? 'continue__on data' : 'continue__off data'}`}
                value="Далее"
                onClick={(event) => {
                  event.preventDefault();
                  if (farther) {
                    setSwitchPage('contact');
                    setFarther(false);
                  }
                  console.log(farther)
                }
              }/>
            </div>
          </div>
        )
      break;
      default:
        return (
          <div className="finish"></div>
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
