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
        <div className="park-page">
            {
                park && 
                <>
                    <header>
                        <h1>{park.name}</h1>
                        <h3>{park.address}</h3>
                    </header>
                    <div className="page-data"><div className="page-data-label">access:</div>{park.access}</div>
                </>
            }
        </div>
    )
}

export default ParkPage