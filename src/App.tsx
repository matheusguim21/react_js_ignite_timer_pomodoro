import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import { Router } from './routes/Router'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/theme/global'
export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
