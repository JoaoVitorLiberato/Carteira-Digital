import RoutesComponent from "./Routes"

import Layout from './components/Layout';
// import Dashboard from "./pages/Dasboard";
import List from "./pages/List";
import GlobalStyles from "./styles/GlobalStyles"
import {ThemeProvider} from 'styled-components'
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      {/* <RoutesComponent /> */}
      <Layout>
        <List/>
      </Layout>
    </ThemeProvider>
  )
}