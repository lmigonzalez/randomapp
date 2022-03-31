import React, {useState} from 'react';
import './App.css';

function App() {

  const [allNum, setAllNum]= useState([])

  const [number, setNumber] = useState(0)

  const handleRandom100 = () =>{
    setNumber(Math.round(Math.random() * 100))
    setAllNum([...allNum, `-${number}-`])
  }

  const handleRandom1000 = () =>{
    setNumber(Math.round(Math.random() * 1000))
    setAllNum([...allNum, `-${number}-`])
  }

  const handleRandom1000000 = () =>{
    setNumber(Math.round(Math.random() * 1000000))
    setAllNum([...allNum, `-${number}-`])
  }




  return (
    <div className="App">
      <h1>Random Number</h1>
      <h2>{number}</h2>
    <div>
      <button onClick={handleRandom100}>0 - 100</button>
      <button onClick={handleRandom1000}>0 - 1,000</button>
      <button onClick={handleRandom1000000}>0 - 1,000,000</button>
    </div>

    <div>{allNum}</div>
    </div>
  );
}

export default App;
