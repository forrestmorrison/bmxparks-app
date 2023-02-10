import Card from '@mui/material/Card'
import PropTypes from 'prop-types'

const ParkItem = ({item}) => {
    console.log('item', item)
    
    return (
        <Card
            sx={{
                margin: 2,
                padding: 1
            }}
        >
            <div className='park-name-display'>{item.name}</div>
            <div className='park-address-display'>{item.address}</div>
            <div className='park-address-display'>type: {item.park_type}</div>
            <div className='park-address-display'>access: {item.access}</div>
        </Card>
    )
}

ParkItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ParkItem