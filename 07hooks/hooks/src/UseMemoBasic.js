
import React, { useState, useEffect, useMemo } from 'react'

// https://www.youtube.com/watch?v=THL1OPn72vo

// The point of this code is to deal with a slow/expensive state variable initializing on every render. Yikes!
// useMemo is used to deal with doubleNumber = slowDoublerFunc. CACHE THE OUTPUT!
// PROBLEM: The tutorial claims that each computed result is cached, but I have checked many times. The
// result is computed (slowly) each time, when I am using the exact code, all the way through the tutorial.
// I have more logging than he does, and he might not realize his is not working as claimed.
// TODO: At some point it would be good to really clarify why the code appears to work differently from the tut claims.
//
// useMemo is a simple CACHE. It takes a memory and performance hit, so we don't use it everywhere.
// The other purpose of useMemo is for referential equality.
// GENERAL USAGE: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// * It takes a WATCH ARRAY as the second argument like useEffect.


function slowDoublerFunc(num) {
  console.log('Calling slow function');
  for (let i=0; i <= 800000000; i++) {}
  return num * 2;
}


const UseMemoBasic = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // The following is SLOW and happens on EVERY RENDER.
  // const doubleNumber = slowDoublerFunc(number);  // SLOW! .. and does it EVERY render like this.

  const doubleNumber = useMemo( () => {
      return slowDoublerFunc(number);
    }, [number]
  );

  // Something else to optimize:
  // THIS GETS RECREATED EVERY RENDER! useEffect [watching] it proves it. This is because the OBJECT-ID changes
  // every time it is created .. but we only need it created when the boolean var dark changes.
  // const themeStyles = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black',
  // }

  // Let's improve this with useMemo:
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }
  }, [dark]);

  // useEffect is comparing the OLD themeStyles obj with the NEW themestyles obj (NEW since last render that is) ..
  useEffect( () => { console.log('Theme changed') }, [themeStyles]);

  return (
    <>
      <input type="number" value={number} onChange={
        e => setNumber(parseInt(e.target.value))
      } />
      <br />
      <button onClick={ () => setDark(prevDark => !prevDark) }>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

export default UseMemoBasic;


// ##
// #
//
// Another article which looks decent:
// https://thecodest.co/blog/a-deeper-look-at-the-most-popular-react-hooks
//
// React Docs:
// https://reactjs.org/docs/hooks-reference.html#usememo

