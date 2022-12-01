
import React, { useState, useEffect } from 'react';
import './index.css';

// Code in this file up through this time marker in the video:
// https://youtu.be/0ZJgIjIuY7U?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h
// At this marker, we move on to next file: UseEffect___________.js


function UseEffectRestBasic() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState(() => { return [] });  // Probably no benefit from anon func.
  // Anon func might help if we were doing something expensive in initialItems or for setState() initial.
  // const [items, setItems] = useState([]);  // No anon func

  // function initialItems() {
  //   return [];
  // }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    // console.log('UseEffectRestBasic: resourceType changed')
  }, [resourceType]);


  return (
    <>
      <div className="container">
        <h2>UseEffectRestBasic</h2>
        <hr />
        <br />
        <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        { items.map((item, idx) => {
            return <pre key={idx}>{JSON.stringify(item, null, 2)}</pre>
          })
        }
      </div>
    </>
  );
}

export default UseEffectRestBasic;


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

