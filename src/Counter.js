import { useState, useContext } from 'react'
import { Web3Context } from 'web3-hooks'
import { CounterContext } from './App'

function Counter() {
  const [web3State, _] = useContext(Web3Context)
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

  const handleClickIncrement = async () => {
    try {
      const tx = await counter.increment()
      await tx.wait()
      const currCount = await counter.count()
      setCount(currCount)
    } catch (e) {
      console.log(e)
    }
  }

  const handleClickDecrement = async () => {
    try {
      const tx = await counter.decrement()
      await tx.wait()
      const currCount = await counter.count()
      setCount(currCount)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      {counter && web3State.chainId === 4 ? (
        <>
          <p>Count: {count.toString()}</p>
          <button onClick={handleClickGet}>get count</button>
          <button onClick={handleClickIncrement}>
            <strong>+</strong>
          </button>
          <button onClick={handleClickDecrement}>
            <strong>-</strong>
          </button>
        </>
      ) : (
        <p>CAN NOT INIT CONTRACT</p>
      )}
    </>
  )
}

export default Counter
