import { Navigate } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
import Spinner from "./Spinner"

const PrivateRoute = ( { children }) => {
    const { loading, user } = useAuthStatus()

    if (loading) return <Spinner />;

    return (
        user ? children : <Navigate to="/login" />
    )
}

export default PrivateRoute