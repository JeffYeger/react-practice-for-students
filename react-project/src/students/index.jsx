import React from 'react'
import names from '../data'
import styles from './style.module.css'

function Students() {
  return (
    <div className={styles.mainDiv}>
       <ul>
        {names.map((name, index) => (
          <li className='students' key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Students