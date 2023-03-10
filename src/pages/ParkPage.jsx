import { useEffect, useState } from "react"
import Modal from "react-modal"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
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

const ParkPage = () => {
    const dispatch = useDispatch();

    const { parkId } = useParams();

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
                        <div className="page-data"><div className="page-data-label">type:</div>{park.type}</div>
                        <div className="page-data"><div className="page-data-label">access:</div>{park.access}</div>
                    </section>
                    <article>
                        <h2>Reviews</h2>
                        <Button onClick={openModal}>Add Review</Button>
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