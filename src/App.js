import NavBar from "./components/NavBar";
import ParkData from "./data/ParkData";
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';
import { useState } from "react";

const theme = createTheme({
  palette: {
      primary: {
          main: '#81007f'
      }
  }
})

function App() {

  // const [park, setPark] = useState(ParkData)

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