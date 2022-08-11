import RoutesComponent from "./routes/Routes"

import Layout from './components/Layout';

import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from 'styled-components'
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <RoutesComponent />
    </ThemeProvider>
  )
}