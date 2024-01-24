import React from 'react'
import ReactDOM from 'react-dom/client'

//import GlobalStyles from'./styles/global'
//import { ThemeProvider } from 'styled-components'
//import theme from './styles/theme.js'

import { Routes } from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
      <Routes />
    
  </React.StrictMode>,
)
