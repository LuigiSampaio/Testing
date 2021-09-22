import './App.css';
import { useState } from 'react';

export const UseStateJs = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <p>Teste 5</p>
      <h1>Contador-1: {counter} </h1>
      <p>
        <button onClick={() => setCounter(counter + 1)}> + (1)</button>
      </p>
    </div>
  );
};
