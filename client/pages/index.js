import {useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [input, setInput] = useState('')
  const inputHandler = (e) => {
    setInput(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(input)
    setInput('')
  }

  return (
    <div className={styles.container}>
        <form onSubmit={submitHandler}>
          <input type='text' value={input} placeholder='введите адрес' onChange={inputHandler} />
          <input type='submit' value='ИСКАТЬ' />
        </form>
        <h1>{input}</h1>
    </div>
  )
}
