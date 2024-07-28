import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={defaultTheme}>
    <React.StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </React.StrictMode>
    <GlobalStyle />
  </ThemeProvider>,
)
