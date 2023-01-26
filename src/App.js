import { ParkProvider } from "./context/ParkContext";
import NavBar from "./components/NavBar";
import ParkList from "./components/ParkList";
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
    <ParkProvider>
      <ThemeProvider theme={theme}>
        <div className="app">
          <NavBar />
          <main>
            <h1>BMX Parks</h1>
            <ParkList />
          </main>
        </div>
      </ThemeProvider>
    </ParkProvider>
  );
}

export default App;