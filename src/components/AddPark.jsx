import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPark } from '../features/parks/parkSlice';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

const TYPES = {
  dirt: false,
  race: false,
  street: false,
}

const AddPark = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [type, setType] = useState(TYPES)
  const [access, setAccess] = useState('')

  const [addRequestStatus, setAddRequestStatus] = useState("idle")

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

  const canSave = [name, address, type, access].every(Boolean) && addRequestStatus === "idle"

  const onAddPark = (e) => {
    e.preventDefault()
    try {
        setAddRequestStatus('pending')
        const typeStr = Object.keys(type).reduce((arr, value) => {
          if (type[value]) arr.push(value)
          return arr
        }, []).join(',')
        dispatch(addNewPark({ name, address, type: typeStr, user_id: 1, access })).unwrap()
        setName('')
        setAddress('')
        setType(TYPES)
        setAccess('')
    } catch (err) {
        console.error('Failed to save the post', err)
    } finally {
        setAddRequestStatus('idle')
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
              <form noValidate autoComplete="off" className='form' onSubmit={onAddPark}>
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
                    margin: 1
                  }}
                >
                  add park
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