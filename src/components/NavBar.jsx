import AddPark from './AddPark';
import HamMenu from './HamMenu';
import { AppBar, Box, Button, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import bmxlogo from '../images/bmxlogo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthState } from '../features/users/authSlice';

const logo = bmxlogo

const NavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.auth.user);
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    const onLogOut = () => {
        // todo
        // remove token from localstorage
        // clear user in redux
        localStorage.removeItem('token')
        dispatch(clearAuthState())
        navigate('/')
    }
    
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
                    <Link to={user ? '/parks' : '/'}
                        style={{
                            textDecoration:"none",
                            display: "flex",
                            alignItems: "baseline"
                        }}
                    >
                        <Box 
                            component="img"
                            sx={{
                                height: 30,
                                width: 30,
                                marginRight: 2
                            }}
                            alt="bmxlogo"
                            src={logo}
                        />
                        <Typography 
                            variant="h3" 
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
                                
                                    <Button 
                                        onClick={onLogOut}
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