import AddPark from "./components/AddPark";
import NavBar from "./components/NavBar";
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
      primary: {
          main: '#81007f'
      }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <NavBar />
        <main>
          <h1>BMX Parks</h1>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;