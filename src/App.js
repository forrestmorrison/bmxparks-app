import { ParkProvider } from "./context/ParkContext";
import Login from "./components/Login";
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
            <ParkList />
            <Login />
          </main>
        </div>
      </ThemeProvider>
    </ParkProvider>
  );
}

export default App;