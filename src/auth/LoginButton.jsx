import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material"

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0()
    return (
        !isAuthenticated && (
            <Button 
                onClick={() => loginWithRedirect()}
                sx={{
                    m: 1,
                    "&:hover": {
                        backgroundColor: "purple",
                        color: "white",
                    }
                }}
            >
                Sign In
            </Button>
        )
    )
}

export default LoginButton