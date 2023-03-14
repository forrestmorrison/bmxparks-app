import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material'

const ReviewItem = ({item}) => {

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
                    <div className='comment-display'>{item.comment}</div>
                    <div className='rating-display'>{item.rating}</div>
            </Grid>
        
    )
}

ReviewItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ReviewItem