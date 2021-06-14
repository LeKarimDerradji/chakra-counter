import React from 'react'
import ReactDOM from 'react-dom'
import { Web3Provider } from 'web3-hooks'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter as Router} from 'react-router-dom'
import  '@fontsource/ibm-plex-mono'
import theme from "./theme/theme"




ReactDOM.render(
  <Router>
    <ChakraProvider theme={theme}>   
    <Web3Provider>
      <App />
    </Web3Provider>
    </ChakraProvider>
  </Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
