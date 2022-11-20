import React from 'react'
import ReactDOM from 'react-dom/client'
import {Head,Header,Nav,App}from './App'

ReactDOM.createRoot(document.getElementById('head')).render(
  <React.StrictMode>
    <Head/>
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
