import { useState } from "react";
import { ParkProvider } from "./context/ParkContext";
import NavBar from "./components/NavBar";
import ParkList from "./components/ParkList";
import ParkData from "./data/ParkData";
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

  const [parks, setParks] = useState(ParkData)

  return (
    <ParkProvider>
      <ThemeProvider theme={theme}>
        <div className="app">
          <NavBar />
          <main>
            <h1>BMX Parks</h1>
            <ParkList parks={parks}/>
          </main>
        </div>
      </ThemeProvider>
    </ParkProvider>
  );
}

export default App;