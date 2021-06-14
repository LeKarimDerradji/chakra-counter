import { useState, useContext } from 'react'
import { Web3Context } from 'web3-hooks'
import {Link} from 'react-router-dom'
import { CounterContext } from './App'
import {Box, Text, Button, VStack} from "@chakra-ui/react";

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

  console.log(web3State.chainId)

  return (
    <Box w='50%' mx='auto'>
    <>
      {web3State.chainId === 4 ? (
        <>
        <VStack spacing={4}>
        <Box w='50%' mx='auto' display='flex' flexDirection='column' marginTop='10' spacing="30px">
          <Text>Count: {count.toString()}</Text>
          <Button onClick={handleClickGet}>get count</Button>
          <Button onClick={handleClickIncrement}>
            <strong>+</strong>
          </Button>
          <Button onClick={handleClickDecrement}>
            <strong>-</strong>
          </Button>
          </Box>
          <Link to={'/'}>Home</Link>
          </VStack>
        </>
      ) : (
        <Text color='red'>CAN NOT INIT CONTRACT PLEASE SWITCH TO RINKEBY</Text>
      )}
  </>
  </Box>
  )
}

export default Counter
