import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { useSelector } from 'react-redux'

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
                                <ListItemText>add park</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemText>log out</ListItemText>
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