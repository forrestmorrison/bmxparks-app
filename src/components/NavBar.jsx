import AddPark from './AddPark';
import Login from './Login';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bmxlogo from '../images/bmxlogo.jpg'

const logo = bmxlogo

const NavBar = () => {
    
    return (
        <Box 
            sx={{ flexGrow: 1 }}
        >
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
                    <Typography 
                        variant="h5" 
                        component="div" 
                        sx={{ flexGrow: 1 }} 
                        color='primary'
                    >
                        BMX Parks
                    </Typography>
                    <AddPark />
                    <Button color="primary">Log Out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar