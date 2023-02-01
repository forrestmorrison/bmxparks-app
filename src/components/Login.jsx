import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const { email, username, password, confirmPassword } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const {addUser} = useContext(UserContext)

  const [userModal, setUserModal] = useState(false)

  const toggleUserModal = () => {
    setUserModal(!userModal)
  }

  if(userModal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email.trim().length > 8 && username.trim().length > 8 && password.trim().length > 8) {
      const newUser = {
        email,
        username,
        password
      }

      addUser(newUser)
    }
  }

  return (
    <>
      <Button onClick={toggleUserModal} className="btn-modal">login</Button>

      {userModal && (
        <div className="modal">
          <div className="overlay" onClick={toggleUserModal}></div>
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
                <h1>new user</h1>
                <TextField
                  onChange={onChange}
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
                  onChange={onChange}
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
                  onChange={onChange}
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
                  onChange={onChange}
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
          </div>
        </div>
      )}
    </>
  )
}

export default Login