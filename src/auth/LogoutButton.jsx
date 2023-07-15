import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0()
    return (
        isAuthenticated && (
            <Button 
                onClick={() => logout()}
                sx={{
                    m: 1,
                    "&:hover": {
                        backgroundColor: "purple",
                        color: "white",
                    }
                }}
            >
                Sign Out
            </Button>
        )
    )
}

export default LogoutButton