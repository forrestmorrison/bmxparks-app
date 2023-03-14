import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import { Grid } from '@mui/material'

const ParkItem = ({item}) => {

    const dispatch = useDispatch();
    
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
            </Grid>
        
    )
}

ParkItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ParkItem