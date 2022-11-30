
import React, { useState } from 'react';
import './index.css';


function UseStateBasic() {
  // const [stateVariable, updaterFunction] = useState(initialValue);  // Example.
  const [resourceType, setResourceType] = useState('x');

  return (
    <>
      <div className="container">
        <h2>UseStateBasic</h2>
        <hr />
        <br />
        <div>
        <button>-</button>
        <span>0</span>
        <button>+</button>
        </div>
      </div>
    </>
  );
}

export default UseStateBasic;

