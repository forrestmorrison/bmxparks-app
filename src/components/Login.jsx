import { useState } from 'react';
import UserContext from '../context/UserContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = () => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
        <form noValidate autoComplete="off" className='form' onSubmit={handleSubmit}>
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
            onChange={handleUsernameChange}
            value={username}
            fullWidth
            id="outlined-basic" 
            label="username"
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
          <TextField
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
            fullWidth
            id="outlined-basic" 
            label="confirmPassword"
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

export default Login