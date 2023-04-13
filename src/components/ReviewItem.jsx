import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { Box, Grid, Rating } from '@mui/material'

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
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        sx={{
                            mt: 2
                        }}
                        onChange={(event, newValue) => {
                        onChange(newValue);
                        }}
                    />
                </Box>
            </Grid>
        
    )
}

ReviewItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ReviewItem