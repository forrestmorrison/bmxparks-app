import { useState } from 'react';
import Modal from "react-modal"
import { useDispatch } from 'react-redux';
import { addNewPark } from '../features/parks/parkSlice';
import { 
  Box, 
  Button, 
  Checkbox, 
  FormControl, 
  FormControlLabel, 
  FormGroup, 
  FormLabel, 
  Radio, 
  RadioGroup, 
  TextField 
} from '@mui/material';

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

const TYPES = {
  dirt: false,
  race: false,
  street: false,
}

Modal.setAppElement("#root")

const AddPark = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [st, setSt] = useState('')
  const [zip, setZip] = useState('')
  const [type, setType] = useState(TYPES)  
  const [access, setAccess] = useState('')

  const [addRequestStatus, setAddRequestStatus] = useState("idle")

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const handleCityChange = (e) => {
    setCity(e.target.value)
  }

  const handleStChange = (e) => {
    setSt(e.target.value)
  }

  const handleZipChange = (e) => {
    setZip(e.target.value)
  }

  const handleTypeChange = (e) => {
    setType({
      ...type,
      [e.target.name]: e.target.checked,
    });
  };

  const { dirt, race, street } = type;

  const canSave = [name, address, city, st, zip, type, access].every(Boolean) && addRequestStatus === "idle"

  const onAddPark = (e) => {
    e.preventDefault()
    try {
        setAddRequestStatus('pending')
        const typeStr = Object.keys(type).reduce((arr, value) => {
          if (type[value]) arr.push(value)
          return arr
        }, []).join(', ')
        dispatch(addNewPark({ name, address, type: typeStr, user_id: 1, access })).unwrap()
        setName('')
        setAddress('')
        setType(TYPES)
        setAccess('')
        closeModal()
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
          m: 1,
          "&:hover": {
              backgroundColor: "purple",
              color: "white",
          }
        }}
      >
        Add Park
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
            <form noValidate autoComplete="off" className='form' onSubmit={onAddPark}>
              <h1>New Park</h1>
              <TextField
                onChange={handleNameChange}
                value={name}
                fullWidth
                label="park name"
                required
                sx={{
                  margin: 1,
                  display: 'block'
                }}
                variant="outlined"
              />
              <TextField
                onChange={handleAddressChange}
                value={address}
                fullWidth
                label="park address"
                required
                sx={{
                  margin: 1,
                  display: 'block'
                }}
                variant="outlined"
              />
              <TextField
                onChange={handleCityChange}
                value={city}
                fullWidth
                label="city"
                required
                sx={{
                  margin: 1,
                  display: 'block'
                }}
                variant="outlined"
              />
              <TextField
                onChange={handleStChange}
                value={st}
                fullWidth
                label="state"
                required
                sx={{
                  margin: 1,
                  display: 'block'
                }}
                variant="outlined"
              />
              <TextField
                onChange={handleZipChange}
                value={zip}
                fullWidth
                label="zip"
                required
                sx={{
                  margin: 1,
                  display: 'block'
                }}
                variant="outlined"
              />
              <Box>
                <FormControl sx={{ m: 1, display: 'flex', flexDirection: 'row' }} component="fieldset" variant="standard">
                  <FormLabel sx={{ m: 1 }}>type</FormLabel>
                  <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                    <FormControlLabel
                      control={
                        <Checkbox checked={dirt} onChange={handleTypeChange} name="dirt" />
                      }
                      label="dirt"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={race} onChange={handleTypeChange} name="race" />
                      }
                      label="race"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={street} onChange={handleTypeChange} name="street" />
                      }
                      label="street"
                    />
                  </FormGroup>
                </FormControl>
              </Box>
              <Box>
                <RadioGroup
                  value={access}
                  onChange={(e) => setAccess(e.target.value)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row'
                  }}
                >
                  <FormControlLabel value="free" control={<Radio />} label="free" />
                  <FormControlLabel value="paid" control={<Radio />} label="paid" />
                </RadioGroup>
              </Box>
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
                Add Park
              </Button>
            </form>
          </Box>
      </Modal>
    </>
  )
}

export default AddPark