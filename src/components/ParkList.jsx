import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getParks } from "../features/parks/parkSlice"
import { Grid } from "@mui/material"
import ParkItem from "./ParkItem"

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
        <Grid container
            alignItems="center"
            justifyContent="center"
        >
            {parks.map((item) => (
                    <ParkItem key={item.id} item={item} />
            ))}
        </Grid>
    )
}

export default ParkList