import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, TextField, Stack, Button, Box, Checkbox, Alert, Snackbar } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { setCookie } from '../../../utils/cookie'
import authenApi from '../../../apis/authenApi'
import loginImage from '../../../assets/img/loginImage.jpg'
import { login } from '../../../redux/actions/auth'
import { setCart } from '../../../redux/actions/cart'
import cartItemApi from '../../../apis/cartItemApi'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState(false)
  const [showAlertFail, setShowAlertFail] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onFinish = () => {
    authenApi.signin(username, password)
      .then(response => {
        dispatch(login(response.data))
        setCookie('userId', response.data.id, 1)
        setShowAlert(true)
        cartItemApi.getCartItemsByCustomerId(response.data.id)
          .then(response => { dispatch(setCart(response.data)) })
        setTimeout(() => {
          navigate('/')
        }, 1000)
      })
      .catch(error => {
        setShowAlertFail(true)
      })
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
          width: { xs: '90%', sm: '70%', md: '30%' },
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
              id="filled-hidden-label-small"
              placeholder='Input Username'
              variant="filled"
              size="small"
              sx={{ bgcolor: 'white', borderRadius: 3 }}
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              id="filled-hidden-label-normal"
              placeholder='Input password'
              variant="filled"
              size="small"
              sx={{ bgcolor: 'white', borderRadius: 3 }}
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              sx={{ bgcolor: 'red', color: 'white', fontWeight: 'bold' }}
              onClick={() => onFinish()}
            >Sign In</Button>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', m: 0, color: 'white' }}>
                <Checkbox sx={{ color: 'white' }} />
                Remember me?
              </Box>
              <Link to={'/register'} style={{ color: 'white' }}>Sign Up Now?</Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link to={'/reset-password'} style={{ color: 'white' }}>Forgot Password?</Link>
              <Link to={'/'} style={{ color: 'white' }}>Need help?</Link>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showAlert} autoHideDuration={1000} onClose={() => setShowAlert(false)}>
        <Alert severity="success" variant='filled' onClose={() => setShowAlert(false)}>
          Đăng nhập thành công!
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showAlertFail} autoHideDuration={1000} onClose={() => setShowAlertFail(false)}>
        <Alert severity="error" variant='filled' onClose={() => setShowAlertFail(false)}>
          Sai tên đăng nhập hoặc mật khẩu!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Login