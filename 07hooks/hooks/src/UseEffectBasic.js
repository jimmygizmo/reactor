
import React, { useState, useEffect } from 'react';
import './index.css';


function UseEffectBasic() {
  // const [stateVariable, updaterFunction] = useState(initialValue);  // Example.
  const [resourceType, setResourceType] = useState('posts');

  console.log('UseEffectBasic: rrrrrendering')

  // By default, useEffect (with only one argument) runs on EVERY render. (But usually the second argument is used.)
  // Second argument to useEffect is an array of objects to WATCH for changes, upon which, triggers Func again.
  useEffect(() => {
    console.log('UseEffectBasic: resourceType changed')

    return () => {
      console.log('UseEffectBasic: Anon Func returned by useEffect for cleanup was just called.')
    }

  }, [resourceType])

  // TRICK: If we pass in an empty WATCH array (second arg) we effectively get an onMount.
  useEffect(() => {
    console.log('UseEffectBasic: onMount equivalent. WATCH array is an empty array []')
  }, [])
  // TODO: Probably because of React Dev Tools, everything runs twice on page load. Well, a lot of stuff
  //   runs twice. Need to understand and handle this. Obviously it can cause problems and needs to be well
  //   understood.

  return (
    <>
      <div className="container">
        <h2>UseEffectBasic</h2>
        <hr />
        <br />
        <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
      </div>
    </>
  );
}

export default UseEffectBasic;


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

// UPDATE regarding extensive comments in UseStateBasic.js regarding onClick methods with parentheses vs.
// no parenthese. SO .. The lack of parentheses DOES MEAN SOMETHING SPECIAL. It can only be used when no
// argument needs to be passed (obviously) and the equivalent is that it is now like having an anonymous function:
// This post has some info on it:
// https://forum.freecodecamp.org/t/react-why-use-anonymous-function-for-event-handler/432515
//
// <button onClick={() => doTheThing()}>
// IS THE SAME AS JUST USING THE METHOD NAME AND NO PARENTHESES:
// <button onClick={doTheThing}>
// BUT .. THIS IS VERY DIFFERENT FROM:
// <button onClick={doTheThing()}>  // <- This is wrong. Probably will crash your app.
// You want one of the first two formats with React, as I am learning.
//
// EXECUTIVE SUMMARY: All this code runs at RENDER TIME and some of is run to set up functions that RUN IN USER TIME.
// Some things you don't want to run when the page renders. This is the case here, why onClick needs anonymous
// function references, not actual function calls.

