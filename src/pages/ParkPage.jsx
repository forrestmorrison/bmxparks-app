import { useEffect, useState } from "react"
import Modal from "react-modal"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@mui/material"
import { showPark } from "../features/parks/parkSlice"


const customStyles = {
    content: {
      width: "600px",
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

const ParkPage = ({item}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { parkId } = useParams()

    const [park, setPark] = useState()

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => setModalIsOpen(true)
    const closeModal = () => setModalIsOpen(false)

    useEffect(() => {
        dispatch(showPark(parkId)).unwrap()
        .then(parkData => {
            setPark(parkData)
        })
    }, [parkId])

    // const onDeletePark = () => {
    //     try {           
    //         dispatch(deletePark(item.id)).unwrap()
    //         navigate("/")
    //     } catch (err) {
    //         console.error('Failed to delete the post', err)
    //     } 
    //   }

    return (
        <div className="park-page">
            {
                park && 
                <>
                    <header>
                        <h1>{park.name}</h1>
                        <h3>{park.address}</h3>
                    </header>
                    <section>
                        <div className="park-info">
                            <div className="page-data"><div className="page-data-label">type:</div>{park.type}</div>
                            <div className="page-data"><div className="page-data-label">access:</div>{park.access}</div>
                        </div>
                        <div>
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
                            <Button 
                                sx={{
                                    backgroundColor: "red",
                                    color: "white",
                                    m: 1,
                                    "&:hover": {
                                        backgroundColor: "white",
                                        color: "red",
                                    }
                                }}
                            >
                                Delete Park
                            </Button>
                        </div>
                        
                    </section>
                    <article>
                        <h2>Reviews</h2>
                        <Modal 
                            isOpen={modalIsOpen} 
                            onRequestClose={closeModal} 
                            style={customStyles}
                            contentLabel="add review"
                        >
                            
                        </Modal>
                    </article>
                    
                </>
            }
        </div>
    )
}

export default ParkPage