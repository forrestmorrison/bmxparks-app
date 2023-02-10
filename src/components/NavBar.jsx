import AddPark from './AddPark';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import bmxlogo from '../images/bmxlogo.jpg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const logo = bmxlogo

const NavBar = () => {

    const user = useSelector(state => state.auth.user);
    console.log('user', user)
    
    return (
        <Box 
            sx={{ flexGrow: 1 }}
        >
            <AppBar position="static" color=''>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <Link to="/" 
                        style={{
                            textDecoration:"none",
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
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
                    </Link>
                    { user ? (
                        <Box>
                            <AddPark />
                            <Link to="/signup" 
                                style={{
                                    textDecoration:"none"
                                }}
                            >
                                <Button color="primary">log out</Button>
                            </Link>
                        </Box>
                    ) : (
                        <Box>
                            <Link to="/login" 
                                style={{
                                    textDecoration:"none"
                                }}
                            >
                                <Button color="primary">log in</Button>
                            </Link>
                            <Link to="/signup" 
                                style={{
                                    textDecoration:"none"
                                }}
                            >
                                <Button color="primary">sign up</Button>
                            </Link>
                        </Box>
                    )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar