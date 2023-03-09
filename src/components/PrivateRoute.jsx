import { Navigate } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"

const PrivateRoute = ( { children }) => {
    const { loading, user } = useAuthStatus()

    if (loading) return "Loading...";

    return (
        user ? children : <Navigate to="/login" />
    )
}

export default PrivateRoute