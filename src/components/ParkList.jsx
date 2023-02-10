import { useEffect } from "react"
import ParkItem from "./ParkItem"
import { useDispatch, useSelector } from "react-redux"
import { getParks } from "../features/parks/parkSlice"

const ParkList = () => {
    const dispatch = useDispatch()

    const parks = useSelector(state => state.parks.parks)

    useEffect(() => {
        dispatch(getParks())
    }, [])

    if(parks.length === 0) {
        return <p>no parks yet</p>
    }

    return (
        <div className="park-list">
            {parks.map((item) => (
                <ParkItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ParkList