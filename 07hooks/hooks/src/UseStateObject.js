
import React, { useState } from 'react';
import './index.css';

// This file is for the latter part of the video below. Link goes to relevant timestamp.
// https://youtu.be/O6P86uwfdR0?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&t=675


// Using favored style with const:
const UseStateObject = () => {

  // const [count, setCount] = useState(() => {
  //   console.log('UseStateObject: state value initialize inside anon func arg to useState. EFFICIENT.');
  //   return 4;
  // });

  const [stateObject, setStateObject] = useState({ count: 4, theme: 'blue' } );  // Object
  const count = stateObject.count;
  const theme = stateObject.theme;

  // OBJECTS as state values .. they are REPLACED. (Unlike with classes, where they are merged.)
  // If this were a React class, we might UPDATE/MERGE the object with this:
  //   return { count: prevStateObject.count + 1 }  // But in functional components and useState, we cannot
  //   merge/update objects. We can only replace the entire object. We use the ... expansion operator:
  //   { ...prevStateObject, count: prevStateObject.count + 1 }


  function decrementCount() {
    setStateObject(prevStateObject => {  // Works but warnings given here. ?!?
      return { ...prevStateObject, count: prevStateObject.count - 1 }
    });
  }

  function incrementCount() {
    setStateObject( prevStateObject => {  // Works but warnings given here. ?!?
      return { ...prevStateObject, count: prevStateObject.count + 1 }
    });
  }

  return (
    <div className="container">
      <h2>UseStateObject</h2>
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

export default UseStateObject;


// ##
// #
//
// https://www.youtube.com/watch?v=O6P86uwfdR0

// https://react-hooks-cheatsheet.com/usestate

// https://reactjs.org/docs/hooks-state.html

