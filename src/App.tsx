import './App.css'
import Travel from './pages/Travel'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Header from './components/Generic/Header';
import LandingPage from './pages/landingPage';
function App() {
  

  return (
    <>
    
    <ThemeProvider theme={theme}>
        {/* <Header /> */}
     <LandingPage/>
      {/* <Travel/> */}
    </ThemeProvider>
    </>
  )
}

export default App
