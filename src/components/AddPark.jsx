import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import { useState } from 'react';

const AddPark = () => {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [nameError, setNameError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [type, setType] = useState('')
  const [radio, setRadio] = useState('')

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
      console.log(name, address, type, radio)
    }
  }

  return (
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
          value={type}
          onChange={(e) => setType(e.target.value)}
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
          <FormControlLabel value="dirt" control={<Checkbox />} label="dirt" />
          <FormControlLabel value="race" control={<Checkbox />} label="race" />
          <FormControlLabel value="street" control={<Checkbox />} label="street" />
        </FormGroup>
        <RadioGroup
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
          sx={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <FormControlLabel value="free" control={<Radio />} label="free" />
          <FormControlLabel value="paid" control={<Radio />} label="paid" />
        </RadioGroup>
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