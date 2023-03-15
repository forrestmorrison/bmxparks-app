import { useState } from 'react';
import Modal from "react-modal"
import { useDispatch } from 'react-redux';
import { 
  Box, 
  Button, 
  TextField 
} from '@mui/material';
import { addNewReview } from '../features/reviews/reviewSlice';
import ReviewRating from "./ReviewRating"

const customStyles = {
  content: {
    width: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
  },
}

Modal.setAppElement("#root")

const AddReview = ({ parkId }) => {
  const dispatch = useDispatch()

  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(0)

  const [addRequestStatus, setAddRequestStatus] = useState("idle")

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handleRatingChange = (e) => {
    setRating(e.target.value)
  }

  const canSave = [comment, rating].every(Boolean) && addRequestStatus === "idle"

  const onAddReview = (e) => {
    e.preventDefault()
    try {
        setAddRequestStatus('pending')
        dispatch(addNewReview({ comment, rating, user_id: 1, park_id: parkId })).unwrap()
        closeModal()
        setRating(0)
        setComment('')
    } catch (err) {
        console.error('Failed to save the post', err)
    } finally {
        setAddRequestStatus('idle')
    }
  }

  return (
    <>
      <Button 
        onClick={openModal} 
        sx={{
          backgroundColor: "purple",
          color: "white",
          m: 1,
          "&:hover": {
              backgroundColor: "white",
              color: "purple",
          }
        }}
      >
        Add Review
      </Button>

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        style={customStyles}
        contentLabel="add note"
      >
          <Box
            sx={{
              width: {
                xs: 350,
                sm: 500,

              },
              flexGrow: 1 
            }}
          >
            <form noValidate autoComplete="off" className='form' onSubmit={onAddReview}>
              <h1>New Review</h1>
              <TextField
                onChange={handleCommentChange}
                value={comment}
                fullWidth
                id="outlined-basic" 
                label="comment"
                required
                sx={{
                  margin: 1,
                  display: 'block'
                }}
                variant="outlined"
              />
              <ReviewRating onChange={setRating} rating={rating} />
              
              <Button
                type="submit"
                color="primary"
                disabled={!canSave}
                sx={{
                  margin: 1,
                  backgroundColor: "purple",
                  color: "white",
                  "&:hover": {
                      backgroundColor: "white",
                      color: "purple",
                  },
                  "&.Mui-disabled": {
                      background: "white",
                      color: "grey"
                  }
                }}
              >
                Add Review
              </Button>
            </form>
          </Box>
      </Modal>
    </>
  )
}

export default AddReview