import React from 'react'
import Dapp from './Dapp'
import { useContract } from 'web3-hooks'
import { counterAddress, counterAbi } from './contracts/Counter'
import {Switch, Route, Redirect } from "react-router"
import HomeDapp from './components/HomeDapp'
import Header from './components/Header'


export const CounterContext = React.createContext(null)

function App() {
  const counter = useContract(counterAddress, counterAbi)
  
  return (
    
    <Switch>
      <Route exact path = '/'>
       <Header/>
        <HomeDapp />
      </Route>
      <Route path="/dapp/">
      <CounterContext.Provider value={counter}>
      <Dapp />
      </CounterContext.Provider>
      </Route>
         <Redirect to="/" />
    </Switch>
  )
}

export default App
