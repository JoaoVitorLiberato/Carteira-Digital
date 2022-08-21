import RoutesComponent from "./routes/Routes"
import { BrowserRouter } from "react-router-dom"

import { useTheme } from './context/Theme'

import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from 'styled-components'


export default function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RoutesComponent />
    </ThemeProvider>
  )
}