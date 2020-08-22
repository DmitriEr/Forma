import React, { useState, useEffect } from 'react';
import FenceSize from './Components/FenceSize';
import ChooseMaterial from './Components/ChooseMaterial';
import Checkbox from './Components/Checkbox';
import Score from './Components/Score';
import './App.css';

function App() {
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [price, setPrice] = useState(400);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const sum = height * length * price;
    setResult(sum);
  }, [height, length, price])

  return (
    <div className="App">
      <div className="form">
        <h1 className="form__title">Заказать забор</h1>
        <form autoComplete="off" name="fence">
          <FenceSize name="Длина" setLength={setLength}/>
          <FenceSize name="Высота" setHeight={setHeight}/>
          <ChooseMaterial setPrice={setPrice}/>
          <Checkbox/>
        </form>
        <Score result={result}/>
        <button className="continue">Далее</button>
      </div>
    </div>
  );
}

export default App;
