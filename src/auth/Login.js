import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/authSlice'

const Login = () => {
    const dispatch  = useDispatch();
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
        
    const onEmailChanged = e => setEmail(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)
    
    const canSave = [username, password].every(Boolean) && addRequestStatus === 'idle';

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
                <input 
                    type="text"
                    name="password"
                    value={email}
                    onChange={onEmailChanged}
                />
                <label htmlFor="password">PASSWORD:</label>
                <input type='password' name="password" value={password} onChange={onPasswordChanged} />
                <button type="button" disabled={!canSave} onClick={onLogin}>Log In</button>
            </form>
        </div>
    )
}


export default Login