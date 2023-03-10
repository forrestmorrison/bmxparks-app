import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/users/authSlice'
import { Button, TextField } from '@mui/material';

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
        <div>
            <h1>Log In</h1>
            <form>
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
                    color="primary"
                    sx={{
                        margin: 1
                    }} 
                    disabled={!canSave} 
                    onClick={onLogin}
                >
                    Log In
                </Button>
            </form>
        </div>
    )
}


export default Login