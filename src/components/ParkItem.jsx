import PropTypes from 'prop-types'
// import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import { Grid } from '@mui/material'
// import { deletePark } from '../features/parks/parkSlice'

const ParkItem = ({item}) => {
    console.log('item', item.id)

    // const dispatch = useDispatch()


    // const onDeletePark = (e) => {
    //     e.preventDefault()
    //     try {           
    //         dispatch(deletePark({ item })).unwrap()
    //     } catch (err) {
    //         console.error('Failed to delete the post', err)
    //     } 
    //   }
    
    return (
            <Grid item
                className='grid-item'
                border={'solid 1px purple'} 
                xs={10} md={5}
                sx={{
                    margin: 2,
                    padding: 1
                }}
            >
                <Link to={`/parks/${item.id}`} className="park-link">
                    <div className='park-name-display'>{item.name}</div>
                    <div className='park-address-display'>{item.address}</div>
                </Link>
            </Grid>
        
    )
}

ParkItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ParkItem