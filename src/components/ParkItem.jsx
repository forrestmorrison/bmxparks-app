import Card from '@mui/material/Card'
import PropTypes from 'prop-types'

const ParkItem = ({item}) => {

    return (
        <Card
            sx={{
                margin: 2,
                padding: 1
            }}
        >
            <div className='park-name-display'>{item.name}</div>
            <div className='park-address-display'>{item.address}</div>
        </Card>
    )
}

ParkItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ParkItem