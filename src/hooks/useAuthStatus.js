import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkUser } from "../features/users/authSlice"

export const useAuthStatus = () => {
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(checkUser()).unwrap()   
        .finally(() => {
            setLoading(false)
        })     
    }, [])

    return { loading, user }
}