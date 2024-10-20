import { ThemeProvider } from 'styled-components'
import { ComponenteOne } from './components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ComponenteOne />
    </ThemeProvider>
  )
}
