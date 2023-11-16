import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, TextField, Stack, Button, Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { setCookie } from '../../utils/cookie'
import { mockData } from '../../apis/mockdata'
import loginImage from '../../assets/img/loginImage.jpg'
import { login } from '../../redux/actions/auth'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const users = mockData.users
  const onFinish = () => {
    navigate('/dashboard')
  }
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        bgcolor: 'black'
      }}>
        <img src={loginImage} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <Box sx={{
          position: 'absolute',
          width: '400px',
          height: 'auto',
          borderRadius: '5px',
          top: '30%',
          left: '50%',
          bgcolor: 'black',
          opacity: 0.8,
          transform: 'translate(-50%, -30%)'
        }}>
          <h2 style={{ textAlign: 'center', color: 'white' }}> Sign In</h2>
          <Stack
            component="form"
            sx={{ m: 3 }}
            spacing={4}
          >
            <TextField
              placeholder='Input email'
              variant="filled"
              size="small"
              sx={{ bgcolor: 'white', borderRadius: 3 }}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              placeholder='Input password'
              variant="filled"
              size="small"
              sx={{ bgcolor: 'white', borderRadius: 3 }}
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button sx={{ bgcolor: 'red', color: 'white', fontWeight: 'bold' }} onClick={() => onFinish()}>Sign In</Button>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link to={'/reset-password'} style={{ color: 'white' }}>Forgot Password?</Link>
              <Link to={'/'} style={{ color: 'white' }}>Need help?</Link>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

export default Login