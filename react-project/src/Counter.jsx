import React, { useState } from 'react'
import style from './style.css'

function Counter() {

    const [count,setCount] = useState(0)

    const add = () => {
        setCount (count +1)
    }


    function minus () {
        setCount(count-1)
    }

    const clear = () => {
        setCount(0)
    }

  return (
    <div className='counter'>
       
    <h5>The current count is {count}</h5>

    <button onClick={add}>Plus</button>
    <button onClick={minus}>Minus</button>
    <button onClick={clear}>Clear</button>
    </div>
  )
}



export default Counter