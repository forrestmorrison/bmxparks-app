import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
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
    <Box
      sx={{
        width: 500,
        flexGrow: 1 
      }}
    >
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
        <FormGroup
          sx={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Typography
            sx={{
              margin: 2
            }}
          >
            park type:
          </Typography>
          <FormControlLabel control={<Checkbox />} label="Dirt" />
          <FormControlLabel control={<Checkbox />} label="Race" />
          <FormControlLabel control={<Checkbox />} label="Street" />
        </FormGroup>
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
  );
}

export default AddPark