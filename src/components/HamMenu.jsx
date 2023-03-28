import { Button, Drawer, IconButton, List, ListItemButton, ListItemIcon } from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import AddPark from './AddPark'

const HamMenu = () => {

    const user = useSelector(state => state.auth.user)

    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <>
            <Drawer 
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                { user ? (
                    <List>
                        <ListItemButton>
                            <ListItemIcon>
                                <AddPark />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <Link to="/signup" 
                                    style={{
                                        textDecoration:"none"
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
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                ) : (
                    <List>
                        <ListItemButton>
                            <ListItemIcon>
                                <Link to="/login" 
                                    style={{
                                        textDecoration:"none"
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
                                        Log In
                                    </Button>
                                </Link>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <Link to="/signup" 
                                    style={{
                                        textDecoration:"none"
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
                                        Sign Up
                                    </Button>
                                </Link>
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                ) }
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon color='primary'/>
            </IconButton>
        </>
    )
}

export default HamMenu