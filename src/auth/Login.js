import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/users/authSlice'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
            navigate('/')
        } catch (err) {
            console.error('Failed to save the post', err)
        } finally {
            setAddRequestStatus('idle')
        }        
    }

    return (
        <div>
            <div>LOGIN</div>
            <form>
                <label htmlFor="username">EMAIL:</label>
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
                <label htmlFor="password">PASSWORD:</label>
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