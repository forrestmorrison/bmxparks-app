import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles'
import { purple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import bmxlogo from '../images/bmxlogo.jpg'

const theme = createTheme({
    palette: {
        primary: purple
    }
})

const logo = bmxlogo

const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color=''>
                <Toolbar>
                    <Box 
                        component="img"
                        sx={{
                            height: 20,
                            width: 20,
                            marginRight: 1
                        }}
                        alt="bmxlogo"
                        src={logo}
                    />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} color='primary'>
                        BMX Parks
                    </Typography>
                    <Button color="primary">Add Park</Button>
                    <Button color="primary">Forum</Button>
                    <Button color="primary">Log Out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </ThemeProvider>
  );
}

export default NavBar