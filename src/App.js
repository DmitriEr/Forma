import React, { useState, useEffect } from 'react';
import Order from './Components/Order';
import Contacts from './Components/Contacts';
import Outcome from './Components/Outcome';
import './App.css';

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

  const showCurrentPage = () => {
    switch(switchPage) {
      case 'start': 
        return (
          <Order 
            length={length}
            height={height}
            setPrice={setPrice}
            check={check}
            setCheck={setCheck}
            setResultMaterial={setResultMaterial}
            mounting={mounting}
            farther={farther}
            setFarther={setFarther}
            setSwitchPage={setSwitchPage}
            result={result}
            setLength={setLength}
            setHeight={setHeight}
            setMounting={setMounting}
          />
        );
      break;
      case 'contact':
        return (
          <Contacts
            setSwitchPage={setSwitchPage}
            name={name}
            mail={mail}
            phone={phone}
            length={length}
            height={height}
            result={result}
            resultMaterial={resultMaterial}
            farther={farther}
            setFarther={setFarther}
            setCount={setCount}
            count={count}
            setName={setName}
            setMail={setMail}
            setPhone={setPhone}
          />
        )
      break;
      default:
        return (
          <Outcome
            setSwitchPage={setSwitchPage}
            setLength={setLength}
            setHeight={setHeight}
            setPrice={setPrice}
            setResult={setResult}
            setResultMaterial={setResultMaterial}
            setName={setName}
            setPhone={setPhone}
            setMail={setMail}
            setMounting={setMounting}
            setCheck={setCheck}
            name={name}
            count={count} 
            mail={mail}
            phone={phone}
          />
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
