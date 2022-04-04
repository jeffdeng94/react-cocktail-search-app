import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MyContextProvider } from './context'
import './css/index.css'

ReactDOM.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>,
  document.getElementById('root')
)
