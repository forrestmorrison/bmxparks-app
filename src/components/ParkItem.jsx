import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { Button, Grid } from '@mui/material'
import { deletePark } from '../features/parks/parkSlice'

const ParkItem = ({item}) => {
    console.log('item', item)

    const dispatch = useDispatch()


    const onDeletePark = (e) => {
        e.preventDefault()
        try {           
            dispatch(deletePark({ item })).unwrap()
        } catch (err) {
            console.error('Failed to delete the post', err)
        } 
      }
    
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
            <div className='park-name-display'>{item.name}</div>
            <div className='park-address-display'>{item.address}</div>
            <div>type: {item.park_type}</div>
            <div>access: {item.access}</div>
            <Button onClick={onDeletePark}>delete</Button>
        </Grid>
    )
}

ParkItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ParkItem