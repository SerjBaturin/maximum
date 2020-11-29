import {useEffect, useState} from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'

export default function Home() {

  useEffect(() => {
    axios.get('http://localhost:7000/dadata').then(
      d => {
        setInput(d.data[0].source)
        setOutput(d.data[0])
      }
    ).catch(err => err)
  }, [])

  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])

  
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
      }).then((d) => setOutput(d.data[0])).catch(err => console.log(err))
    setInput('')
  }

  return (
    <div className={styles.container}>
        <form onSubmit={submitHandler}>
          <input type='text' value={input} placeholder='введите адрес' onChange={inputHandler} required />
          <input type='submit' value='ИСКАТЬ' />
        </form>
        <ul>
          {Object.keys(output).map((outputParam, outputId) => (
            <li key={outputId}>
              {`${outputParam} ${output[outputParam]}`}
            </li>
          ))}
        </ul>
    </div>
  )
}
