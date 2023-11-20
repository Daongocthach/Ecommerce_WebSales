import { useEffect, useState } from 'react'
import {Typography, Box, Input, Button } from '@mui/material'
import { PersonOutline } from '@mui/icons-material'
import { useSelector } from 'react-redux'

const useStyles = {
  flexBox: {
    display: 'flex', alignItems: 'center', gap: 3, mt: 1, mb: 1
  },
  textTitle: {
    fontWeight: 'bold', minWidth: '100px'
  },
  textContent: {
    fontWeight: 'bold', minWidth: '100px'
  },
  input: {
    minWidth: '500px'
  },
  button: {
    color: 'white', width: '100px', height: '40px', ':hover': { bgcolor: '#666666' }
  }
}
function Profile() {
  const user = useSelector(state => state.auth)
  const [username, setUsername] = useState(user?.name || '')
  const [phone, setPhone] = useState(user?.phoneNo || '')
  const [image, setImage] = useState(user?.name || '')
  const [address, setAdress] = useState(user?.name || '')

  const onUpdate = () => {
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
      <Box sx={{ ...useStyles.flexBox }}>
        <Typography variant='h6' sx={useStyles.textContent}>Tài khoản ID: {123456}</Typography>
        <PersonOutline sx={{ color: 'red' }} />
        <Typography variant='h8' sx={useStyles.textContent}>Thành viên từ tháng {5} năm {2021}</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Box sx={useStyles.flexBox}>
          <Typography variant='h6' sx={useStyles.textTitle}>Email</Typography>
          <Input sx={useStyles.input} value={'thach752002@gmail.com'} />
        </Box>
        <Box sx={useStyles.flexBox}>
          <Typography variant='h6' sx={useStyles.textTitle}>Họ và Tên</Typography>
          <Input sx={useStyles.input} value={username} onChange={e => setUsername(e.target.value)} />
        </Box>
        <Box sx={useStyles.flexBox}>
          <Typography variant='h6' sx={useStyles.textTitle}>Điện thoại</Typography>
          <Input sx={useStyles.input} value={phone} onChange={e => setPhone(e.target.value)} />
        </Box>
        <Box sx={useStyles.flexBox}>
          <Typography variant='h6' sx={useStyles.textTitle}>Địa chỉ</Typography>
          <Input sx={useStyles.input} value={'TPHCM Thủ Đức'} />
        </Box>
      </Box>
      <Box sx={useStyles.flexBox}>
        <Button sx={{ ...useStyles.button, bgcolor: '#FF0000' }} onClick={() => onUpdate()}>Cập nhật</Button>
        <Button sx={{ ...useStyles.button, bgcolor: '#EE9A00' }}>Cài Đặt</Button>
      </Box>
      <Box sx={useStyles.flexBox}>
        <Typography variant='h6' sx={{ minWidth: '250px' }}>Thông tin gói dịch vụ</Typography>
        <Typography variant='h8' sx={useStyles.textContent}>Miễn phí</Typography>
      </Box>
      <Box sx={useStyles.flexBox}>
        <Typography variant='h6' sx={{ minWidth: '250px' }}>Bảo mật & Quyền riêng tư</Typography>
        <Typography variant='h8' sx={useStyles.textContent} >Kiểm soát quyền truy cập vào tài khoản này</Typography>
      </Box>
    </Box>
  )
}

export default Profile