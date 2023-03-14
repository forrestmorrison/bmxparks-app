import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/users/authSlice'
import { Box, Button, TextField } from '@mui/material';

const Login = () => {
    const dispatch  = useDispatch();
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
        
    const handleEmailChange = e => setEmail(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)
    
    const canSave = [email, password].every(Boolean) && addRequestStatus === 'idle';

    const onLogin = async () => {
        try {
            setAddRequestStatus('pending')
            const data = await dispatch(loginUser({ email, password })).unwrap()            
            setEmail('')
            setPassword('')
            navigate('/parks')
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
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1 
                }}
            >
                <h1>Log In</h1>
                <form noValidate autoComplete='off' className='form'>
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
                        type="button"
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
                        disabled={!canSave}
                        onClick={onLogin} 
                    >
                        Log In
                    </Button>
                </form>
            </Box>
        </>
    )
}


export default Login