import { useContext, useState } from 'react';
import ParkContext from '../context/ParkContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField';

const AddPark = () => {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [nameError, setNameError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [type, setType] = useState({
    dirt: false,
    race: false,
    street: false,
  })
  const [access, setAccess] = useState('')

  const {addPark} = useContext(ParkContext)

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const handleTypeChange = (e) => {
    setType({
      ...type,
      [e.target.name]: e.target.checked,
    });
  };

  const { dirt, race, street } = type;

  const handleSubmit = (e) => {
    e.preventDefault()

    setNameError(false)
    setAddressError(false)

    if (name === '') {
      setNameError(true)
    }

    if (address === '') {
      setAddressError(true)
    }

    if (name.trim().length > 1 && address.trim().length > 1) {
      const newPark = {
        name,
        address,
        type,
        access
      }

      addPark(newPark)
    }
  }

  return (
    <>
      <Button onClick={toggleModal} className="btn-modal">add park</Button>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <Box
              sx={{
                width: {
                  xs: 350,
                  sm: 500,

                },
                flexGrow: 1 
              }}
            >
              <form noValidate autoComplete="off" className='form' onSubmit={handleSubmit}>
                <h1>add park</h1>
                <TextField
                  onChange={handleNameChange}
                  value={name}
                  fullWidth
                  id="outlined-basic" 
                  label="park name"
                  required
                  sx={{
                    margin: 1,
                    display: 'block'
                  }}
                  variant="outlined"
                  error={nameError}
                />
                <TextField
                  onChange={handleAddressChange}
                  value={address}
                  fullWidth
                  id="outlined-basic" 
                  label="park address"
                  required
                  sx={{
                    margin: 1,
                    display: 'block'
                  }}
                  variant="outlined"
                  error={addressError}
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
                  sx={{
                    margin: 1
                  }}
                >
                  Add Park
                </Button>
              </form>
            </Box>
          </div>
        </div>
      )}
    </>
  )
}

export default AddPark