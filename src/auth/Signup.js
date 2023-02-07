import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addNewUser } from '../features/users/authSlice'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Signup = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const [addRequestStatus, setAddRequestStatus] = useState("idle")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const canSave = [email, name, password].every(Boolean) && addRequestStatus === "idle"

  const onSignUp = () => {
    try {
        setAddRequestStatus('pending')
        dispatch(addNewUser({ email, name, password })).unwrap()
        setEmail('')
        setName('')
        setPassword('')
    } catch (err) {
        console.error('Failed to save the post', err)
    } finally {
        setAddRequestStatus('idle')
    }        
  }

  return (
    <>
      <Box
        sx={{
          width: {
            xs: 350,
            sm: 500,
          },
          flexGrow: 1 
        }}
      >
        <form noValidate autoComplete="off" className='form' onSubmit={onSignUp}>
          <h1>new user</h1>
          <TextField
            onChange={handleEmailChange}
            value={email}
            fullWidth
            id="outlined-basic" 
            label="email"
            required
            sx={{
              margin: 1,
              display: 'block'
            }}
            variant="outlined"
          />
          <TextField
            onChange={handleNameChange}
            value={name}
            fullWidth
            id="outlined-basic" 
            label="name"
            required
            sx={{
              margin: 1,
              display: 'block'
            }}
            variant="outlined"
          />
          <TextField
            onChange={handlePasswordChange}
            value={password}
            fullWidth
            id="outlined-basic" 
            label="password"
            required
            sx={{
              margin: 1,
              display: 'block'
            }}
            variant="outlined"
          />
          <Button
            type="submit"
            color="primary"
            disabled={!canSave}
            sx={{
              margin: 1
            }}
          >
            create account
          </Button>
        </form>
      </Box>          
    </>
  )
}

export default Signup