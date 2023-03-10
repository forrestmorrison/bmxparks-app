import AddPark from './AddPark';
import HamMenu from './HamMenu';
import { AppBar, Box, Button, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import bmxlogo from '../images/bmxlogo.jpg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const logo = bmxlogo

const NavBar = () => {

    const user = useSelector(state => state.auth.user);
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    
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
                            sx={{ 
                                flexGrow: 1,
                                fontWeight: "bold" 
                            }} 
                            color='primary'
                        >
                            BMX Parks
                        </Typography>
                    </Link>  
                    {   isMatch ? (
                            <HamMenu />
                        ) : (
                            <></>
                        )
                        &&
                        user ? (
                            <Box>
                                <AddPark />
                                <Link to="/signup" 
                                    style={{
                                        textDecoration: "none"
                                    }}
                                >
                                    <Button 
                                        color="primary"
                                        sx={{
                                            m: 1,
                                            "&:hover": {
                                                backgroundColor: "purple",
                                                color: "white",
                                            }
                                        }}
                                    >
                                        Log Out
                                    </Button>
                                </Link>
                            </Box>
                        ) : (
                            <Box>
                                <Link to="/login" 
                                    style={{
                                        textDecoration: "none"
                                    }}
                                >
                                    <Button 
                                        color="primary"
                                        sx={{
                                            "&:hover": {
                                                backgroundColor: "purple",
                                                color: "white",
                                            }
                                        }}
                                    >
                                        Log In
                                    </Button>
                                </Link>
                                <Link to="/signup" 
                                    style={{
                                        textDecoration: "none"
                                    }}
                                >
                                    <Button 
                                        color="primary"
                                        sx={{
                                            "&:hover": {
                                                backgroundColor: "purple",
                                                color: "white",
                                            }
                                        }}
                                    >
                                        Sign Up
                                    </Button>
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