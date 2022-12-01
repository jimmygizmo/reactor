
import React, { useState, useEffect } from 'react';
import './index.css';

// Code in this file for starting at this time marker:
// https://youtu.be/0ZJgIjIuY7U?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h


function UseEffectWindow() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  // Return a Func from useEffect to perform cleanup. useEffect can RETURN it's own CLEANUP FUNCTION.
  // * Event listeners are things you MUST cleanup when your component unmounts. (Avoid memory leaks and a slow app.)
  useEffect(() => {
    console.log('UseEffectWindow: useEffect: adding event listener');
    window.addEventListener('resize', handleResize);  // Like the old-school way using classes and ..didMount, etc.

    return () => {
      console.log('UseEffectWindow: Cleanup Func that was returned by useEffect: removing event listener');
      window.removeEventListener('resize', handleResize);
    }
  }, []);  // Empty watcher array makes this effectively an onMount().


  return (
    <>
      <div className="container">
        <h2>UseEffectWindow</h2>
        <hr />
        <br />

        <div>
          {windowWidth}
        </div>

      </div>
    </>
  );
}

export default UseEffectWindow;


// ##
// #
//
// https://reactjs.org/docs/hooks-effect.html
//
// https://jsonplaceholder.typicode.com
//
// EXCELLENT RESOURCE FOR FETCH USAGE VARIANTS (PROMISES):
// https://jsonplaceholder.typicode.com/guide/
//
// https://www.youtube.com/watch?v=0ZJgIjIuY7U

// Typicode usage example:
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

