import Card from '@mui/material/Card'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

const ParkItem = ({item}) => {
    console.log('item', item)
    
    return (
        <Grid item xs={12} sm={6} md={3}
            sx={{
                margin: 2,
                padding: 1
            }}
        >
            <div className='park-name-display'>{item.name}</div>
            <div className='park-address-display'>{item.address}</div>
            <div className='park-address-display'>type: {item.park_type}</div>
            <div className='park-address-display'>access: {item.access}</div>
        </Grid>
    )
}

ParkItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ParkItem