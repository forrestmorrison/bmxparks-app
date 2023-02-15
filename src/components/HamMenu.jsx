import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
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
                                <Typography>log out</Typography>
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                ) : (
                    <List>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemText>log in</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemText>sign up</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                ) }
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default HamMenu