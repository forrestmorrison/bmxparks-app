import { Routes, Route } from "react-router-dom"
import { ParkProvider } from "./context/ParkContext";
import Login from './auth/Login';
import Signup from "./auth/Signup";
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
            <Routes>
              <Route path="/" element={<ParkList />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ParkProvider>
  );
}

export default App;