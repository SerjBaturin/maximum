import {useEffect, useState} from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'

export default function Home() {

  useEffect(() => {
    // axios.get('http://localhost:7000/dadata').then(
    //   d => setOutput(JSON.stringify(d.data))
    // ).catch(err => err)
  }, [])

  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  
  const inputHandler = (e) => {
    setInput(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:7000/dadata',
      data: {
        input: input
      }
      }).then((d) => setOutput(JSON.stringify(d.data))).catch(err => console.log(err))
    setInput('')
  }

  return (
    <div className={styles.container}>
        <form onSubmit={submitHandler}>
          <input type='text' value={input} placeholder='введите адрес' onChange={inputHandler} />
          <input type='submit' value='ИСКАТЬ' />
        </form>
        <p>{output}</p>
    </div>
  )
}
