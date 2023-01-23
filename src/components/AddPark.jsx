import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const AddPark = () => {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [nameError, setNameError] = useState(false)
  const [addressError, setAddressError] = useState(false)

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

    if (name && address) {
      console.log(name, address)
    }
  }

  return (
    <div className='form-container'>
      <form noValidate autoComplete="off" className='form' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setAddress(e.target.value)}
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
    </div>
  );
}

export default AddPark