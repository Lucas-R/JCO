import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './Router/index.tsx'
import { GlobalStyle } from './style.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
)
