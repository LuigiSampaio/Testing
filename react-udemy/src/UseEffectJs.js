import { useState, useEffect } from 'react';
import './App.css';

const eventFn = () => {
  console.log('H1 clicado');
};

export const UseEffectJs = () => {
  const [counter, setCounter] = useState(0);

  const hanldeCounter = () => {
    setCounter(counter + 1);
  };

  /* // DidUpdate - executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('DidUpdate');
  }); */

  // DidMount - executa uma vez
  useEffect(() => {
    console.log('DidMount');
  }, []);

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // WillMount - Limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  });

  useEffect(() => {
    console.log(`O C-1 mudou para ${counter}`);
  }, [counter]);

  return (
    <div className="App">
      <p>Teste 6</p>
      <h1>Contador-1: {counter} </h1>
      <p>
        <button onClick={hanldeCounter}>+</button>
      </p>
    </div>
  );
};
