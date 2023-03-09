import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { showPark } from "../features/parks/parkSlice"

const ParkPage = () => {
    const dispatch = useDispatch();

    const { parkId } = useParams();

    const [park, setPark] = useState()

    useEffect(() => {
        dispatch(showPark(parkId)).unwrap()
        .then(parkData => {
            setPark(parkData)
        })
    }, [parkId])

    return (
        <div>
            current park
            {park && <>
                <div>Name {park.name}</div>
                <div>Address {park.address}</div>
            </>}
        </div>
    )
}

export default ParkPage