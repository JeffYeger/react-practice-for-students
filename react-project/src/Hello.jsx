import React from 'react';


function Hello({index,name}) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {index}
      <p>Welcome to our React class.</p>
    </div>
  );
}

export default Hello