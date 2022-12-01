
import React, { useState } from 'react';
import './index.css';

// Code from last part of video at timestamp:
// https://youtu.be/O6P86uwfdR0?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&t=870

// Using favored style with const:
const UseStateMulti = () => {

  // const [count, setCount] = useState(() => {
  //   console.log('UseStateMulti: state value initialize inside anon func arg to useState. EFFICIENT.');
  //   return 4;
  // });

  const [count, setCount] = useState(4 );
  const [theme, setTheme] = useState('blue' );



  function decrementCount() {
    setCount(prevCount => prevCount - 1 );
    setTheme(prevTheme => prevTheme + '-' );
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1 );
    setTheme(prevTheme => prevTheme + '+' );
  }

  return (
    <div className="container">
      <h2>UseStateMulti</h2>
      <hr />
      <br />
      <div>
        <button onClick={ decrementCount }>-</button>
        <span>{ count }</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{ theme }</span>
        <button onClick={ incrementCount }>+</button>
      </div>
    </div>
  );
}

export default UseStateMulti;


// ##
// #
//
// https://www.youtube.com/watch?v=O6P86uwfdR0

// https://react-hooks-cheatsheet.com/usestate

// https://reactjs.org/docs/hooks-state.html

