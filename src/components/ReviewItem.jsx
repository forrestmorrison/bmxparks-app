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
                    margin: 2,
                    padding: 1
                }}
            >
                <div className='rating-display'>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Rating
                            name="read-only"
                            value={item.rating}
                            readOnly
                            sx={{
                                m: 1
                            }}
                        />
                    </Box>
                </div>
                <div className='comment-display'>{item.comment}</div>
            </Grid>        
    )
}

ReviewItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ReviewItem