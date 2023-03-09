import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getParks } from "../features/parks/parkSlice"

const ParkPage = () => {
    const dispatch = useDispatch()

    const parks = useSelector(state => state.parks.parks)

    useEffect(() => {
        dispatch(getParks())
    }, [])

    return (
        <div>
            current park
        </div>
    )
}

export default ParkPage