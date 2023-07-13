import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@mui/material"
import { deletePark, showPark } from "../features/parks/parkSlice"
import AddReview from "../components/AddReview"
import ReviewList from "../components/ReviewList"
import CurWeather from "../components/CurWeather"


const ParkPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { parkId } = useParams()

    const [park, setPark] = useState()

    console.log('park', park)

    useEffect(() => {
        dispatch(showPark(parkId)).unwrap()
        .then(parkData => {
            setPark(parkData)
        })
    }, [parkId])

    const onDeletePark = () => {
        try {           
            dispatch(deletePark(park.id)).unwrap()
            navigate("/parks")
        } catch (err) {
            console.error('Failed to delete the post', err)
        } 
      }

    return (
        <div className="park-page">
            {
                park && 
                <>
                    <header>
                        <h1>{park.name}</h1>
                        <div>
                            <AddReview parkId={parkId} />
                            <Button 
                                onClick={onDeletePark}
                                sx={{
                                    backgroundColor: "red",
                                    color: "white",
                                    m: 1,
                                    "&:hover": {
                                        backgroundColor: "white",
                                        color: "red",
                                    }
                                }}
                            >
                                Delete Park
                            </Button>
                        </div>
                    </header>
                    <article>
                        <section>
                            <h2>Park Info</h2>
                            <div className="info-section">
                                <div className="page-data"><h4>{park.address}</h4></div>
                                <div className="page-data"><div className="page-data-label">type:</div>{park.park_type}</div>
                                <div className="page-data"><div className="page-data-label">access:</div>{park.access}</div>
                            </div>                       
                        </section>
                        <section>
                            <h2>Reviews</h2>
                            <div className="review-section">
                                <ReviewList parkId={parkId} />
                            </div>
                        </section>
                    </article>
                </>
            }
        </div>
    )
}

export default ParkPage