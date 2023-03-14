import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addNewUser } from '../features/users/authSlice'
import { Box, Button, TextField } from '@mui/material';

const Signup = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [addRequestStatus, setAddRequestStatus] = useState("idle")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const canSave = [email, username, password].every(Boolean) && addRequestStatus === "idle"

  const onSignUp = (e) => {
    e.preventDefault()
    try {
        setAddRequestStatus('pending')
        dispatch(addNewUser({ email, username, password })).unwrap()
        setEmail('')
        setUsername('')
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
        <form noValidate autoComplete="off" className="form" onSubmit={onSignUp}>
          <h1>Sign Up</h1>
          <TextField
            onChange={handleEmailChange}
            value={email}
            fullWidth
            id="outlined-basic" 
            label="email"
            required
            sx={{
              margin: 1,
              display: "block"
            }}
            variant="outlined"
          />
          <TextField
            onChange={handleUsernameChange}
            value={username}
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
            Create Account
          </Button>
        </form>
      </Box>          
    </>
  )
}

export default Signup