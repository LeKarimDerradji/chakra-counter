import { useState, useContext } from 'react'
import { CounterContext } from './App'

function Counter() {
  const counter = useContext(CounterContext)
  const [count, setCount] = useState(0)

  const handleClickGet = async () => {
    try {
      const currCount = await counter.count()
      setCount(currCount)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <p>count: {count.toString()}</p>
      <button onClick={handleClickGet}>get count</button>
    </>
  )
}

export default Counter
