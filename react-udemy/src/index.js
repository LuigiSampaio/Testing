import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/* import { UseStateJs } from './UseStateJs'; */
/* import { UseEffectJs } from './UseEffectJs'; */
/* import { UseCallBackJs } from './UseCallBackJs'; */
/* import { UseMemo } from './UseMemo'; */
import { UseRef } from './UseRef';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseStateJs /> */}
    {/* <UseEffectJs /> */}
    {/* <UseCallBackJs /> */}
    {/* <UseMemo /> */}
    <UseRef />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
