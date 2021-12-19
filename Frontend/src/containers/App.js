import { ThemeProvider } from '@mui/system';
import './App.css';
import Home from '../components/Home Page/Home';
import customTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;

// COLOR PALETTE
// #0F4C75
// #1B262C
// #FE938C
// #0075A2
// #F2F7FF
