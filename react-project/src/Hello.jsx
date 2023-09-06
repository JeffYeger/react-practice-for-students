import React, { useState } from 'react';


function Hello({index,name}) {
    const [thing,setThing] = useState([])
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {index}
      <p>Welcome to our React class.</p>
    </div>
  );
}

export default Hello