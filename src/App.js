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
  const [mounting, setMounting] = useState(false);

  useEffect(() => {
    const material = height * length * price;
    const option = mounting ? height * length * 200 : 0;
    const sum = material + option;
    setResult(sum);
  }, [height, length, price, mounting])

  const submit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <div className="form">
        <h1 className="form__title">Заказать забор</h1>
        <form autoComplete="off" name="fence">
          <FenceSize name="Длина" setLength={setLength}/>
          <FenceSize name="Высота" setHeight={setHeight}/>
          <ChooseMaterial setPrice={setPrice}/>
          <Checkbox setMounting={setMounting}/>
          <Score result={result}/>
          <input type="submit" className="continue" value="Далеее" onClick={submit}/>
            {/* Далее</input> */}
        </form>
      </div>
    </div>
  );
}

export default App;
