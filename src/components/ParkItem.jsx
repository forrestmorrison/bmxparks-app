import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import { Grid } from '@mui/material'
import { deletePark } from '../features/parks/parkSlice'

const ParkItem = ({item}) => {
    console.log('item', item.id)

    const dispatch = useDispatch();

    const onDeletePark = () => {
        try {           
            dispatch(deletePark(item.id)).unwrap()
        } catch (err) {
            console.error('Failed to delete the post', err)
        } 
    }
    
    return (
            <Grid item
                className='grid-item'
                
                xs={8} md={10}
                sx={{
                    margin: 1,
                    padding: 1
                }}
            >
                <Link to={`/parks/${item.id}`} className="park-link">
                    <div className='park-name-display'>{item.name}</div>
                    <div className='park-address-display'>{item.address}</div>
                </Link>
                    {/* <button type="button" onClick={onDeletePark}>Delete</button> */}
            </Grid>
        
    )
}

ParkItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ParkItem