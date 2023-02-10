import { useContext } from "react"
import ParkItem from "./ParkItem"
import ParkContext from "../context/ParkContext"

const ParkList = () => {
    const {parks} = useContext(ParkContext)

    if(!parks || parks.length === 0) {
        return <p>no parks yet</p>
    }

    return (
        <div className="park-list">
            {parks.sort((a, b) => a.name > b.name ? 1 : -1).map((item) => (
                <ParkItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ParkList