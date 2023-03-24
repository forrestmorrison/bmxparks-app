import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getReviews } from "../features/reviews/reviewSlice"
import { Grid } from "@mui/material"
import ReviewItem from "./ReviewItem"
import ReviewRating from "./ReviewRating"

const ReviewList = ({ parkId }) => {
    const dispatch = useDispatch()

    const reviews = useSelector(state => state.reviews.reviews)

    useEffect(() => {
        dispatch(getReviews({ parkId }))
    }, [])

    if(reviews.length === 0) {
        return (
                <p>Be the first to review this park!</p>
        )
    }

    return (
        <>
            <Grid container
                alignItems="center"
                justifyContent="center"
            >
                {reviews.map((item) => (
                    <ReviewItem key={item.id} item={item} />
                ))}
            </Grid>
        </>
    )
}

export default ReviewList