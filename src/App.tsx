import './App.css'
import Travel from './pages/Travel'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Header from './components/Generic/Header';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landingPage';
function App() {
  

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Travel />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
