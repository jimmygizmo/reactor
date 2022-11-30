
import React, { useState } from 'react';
import './index.css';


function UseEffectBasic() {
  // const [stateVariable, updaterFunction] = useState(initialValue);  // Example.
  const [resourceType, setResourceType] = useState('posts');

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

// TODO: vid link here

