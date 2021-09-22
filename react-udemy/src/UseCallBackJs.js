import './App.css';
import React, { useState, useCallback } from 'react';
import P from 'prop-types';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho, Renderizou !!!');
  return <button onClick={() => incrementButton(10)}> + </button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

export const UseCallBackJs = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  /* const incrementCounter = (num) => {
    setCounter(counter + num);
  }; */

  console.log('Pai, Renderizou !!!');

  return (
    <div className="App">
      <h1>Contador-1: {counter} </h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
};
