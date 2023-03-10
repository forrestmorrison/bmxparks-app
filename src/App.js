import { Routes, Route } from "react-router-dom"
import Login from './auth/Login';
import Signup from "./auth/Signup";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ParkPage from "./pages/ParkPage";
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';
import { Provider } from "react-redux";
import { store } from "./app/store";
import PrivateRoute from "./components/PrivateRoute";
import ParkList from "./components/ParkList";

const theme = createTheme({
  palette: {
      primary: {
          main: '#81007f'
      }
  },
  typography: {
    fontFamily: [
      "Arial",
    ],
    button: {
      textTransform: 'none',
      fontWeight: "bold"
    }
  }
})

function App() {

  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="app">
            <NavBar />
            <main>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/parks" element={<><ParkList /></>} />
                <Route path="/parks/:parkId" element={<ParkPage />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
    </Provider>
  );
}

export default App;