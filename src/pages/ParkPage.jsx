import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@mui/material"
import { deletePark, showPark } from "../features/parks/parkSlice"
import AddReview from "../components/AddReview"
import ReviewList from "../components/ReviewList"


const ParkPage = ({item}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { parkId } = useParams()

    const [park, setPark] = useState()

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
                        <h3>{park.address}</h3>
                    </header>
                    <section>
                        <div className="park-info">
                            <div className="page-data"><div className="page-data-label">type:</div>{park.type}</div>
                            <div className="page-data"><div className="page-data-label">access:</div>{park.access}</div>
                        </div>
                        <div>
                            <AddReview />
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
                        
                    </section>
                    <article>
                        <h2>Reviews</h2>
                        <ReviewList />
                    </article>
                    
                </>
            }
        </div>
    )
}

export default ParkPage