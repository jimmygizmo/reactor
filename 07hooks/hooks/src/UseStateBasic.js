
import React, { useState } from 'react';
import './index.css';


function UseStateBasic() {
  const [resourceType, setResourceType] = useState('x');

  return (
    <>
      <div className="container">
        <h2>UseStateBasic</h2>
        <hr />
        <br />
        <div>
        <button onClick={() => setResourceType('x')}>x</button>
        <button onClick={() => setResourceType('y')}>y</button>
        <button onClick={() => setResourceType('z')}>z</button>
        </div>
        <h1>to be or not to be</h1>
      </div>
    </>
  );
}

export default UseStateBasic;

