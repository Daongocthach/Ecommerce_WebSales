import { useEffect, useState } from 'react'
import { Typography, Box, Input, Button, TextField } from '@mui/material'
import { PersonOutline } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import authenApi from '../../../apis/authenApi'
import { login } from '../../../redux/actions/auth'

function Profile() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
  const [fullName, setFullName] = useState(user?.fullName || '')
  const [phoneNo, setPhoneNo] = useState(user?.phoneNo || '')
  const [avatar, setAvatar] = useState(user?.avatar || '')
  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setAvatar(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  const onUpdate = () => {
    authenApi.updateProfile(user?.id, fullName, phoneNo, avatar)
      .then(response => {
        dispatch(login(response.data))
        alert('Cập nhật thông tin thành công')
      })
      .catch(() => alert('Cập nhật thông tin thất bại'))
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 1, mb: 1 }}>
        <PersonOutline sx={{ color: 'red' }} />
        <Typography variant='h6' sx={{ minWidth: '250px' }}>Tài khoản ID: {user?.id}</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 1, mb: 1 }}>
          <Typography variant='h6' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Email</Typography>
          <Input sx={{ minWidth: '500px' }} value={user.email} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 1, mb: 1 }}>
          <Typography variant='h6' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Họ và Tên</Typography>
          <Input sx={{ minWidth: '500px' }} value={fullName} onChange={e => setFullName(e.target.value)} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 1, mb: 1 }}>
          <Typography variant='h6' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Điện thoại</Typography>
          <Input sx={{ minWidth: '500px' }} value={phoneNo} onChange={e => setPhoneNo(e.target.value)} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 1, mb: 1 }}>
          <Typography variant='h6' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Địa chỉ</Typography>
          <Input sx={{ minWidth: '500px' }} value={user?.address + ', ' + user?.ward + ', ' + user?.district + ', Tỉnh ' + user?.province} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 1, mb: 1 }}>
          <Typography variant='h6' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Avatar</Typography>
          <TextField fullWidth size='small' type={'file'} onChange={handleAvatarChange} />
          <img src={avatar} width={'50px'} height={'50px'} style={{ borderRadius: 10 }} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 1, mb: 1 }}>
        <Button sx={{ color: 'white', width: '100px', height: '40px', ':hover': { bgcolor: '#666666' }, bgcolor: '#FF0000' }} onClick={() => onUpdate()}>Cập nhật</Button>
        <Button sx={{ color: 'white', width: '100px', height: '40px', ':hover': { bgcolor: '#666666' }, bgcolor: '#EE9A00' }}>Cài Đặt</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 1, mb: 1 }}>
        <Typography variant='h6' sx={{ minWidth: '250px' }}>Thông tin gói dịch vụ</Typography>
        <Typography variant='h8' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Miễn phí</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 1, mb: 1 }}>
        <Typography variant='h6' sx={{ minWidth: '250px' }}>Bảo mật & Quyền riêng tư</Typography>
        <Typography variant='h8' sx={{ fontWeight: 'bold', minWidth: '100px' }} >Kiểm soát quyền truy cập vào tài khoản này</Typography>
      </Box>
    </Box>
  )
}

export default Profile