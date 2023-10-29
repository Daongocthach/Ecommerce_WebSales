import { useEffect, useState } from 'react'
import { Box, Button, Typography, Input, Container } from '@mui/material'
import { PersonOutline } from '@mui/icons-material'

const useStyles = {
  alignBox: {
    display: 'flex', alignItems: 'flex-start', flexDirection: 'column'
  },
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
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [image, setImage] = useState('')
  const [address, setAdress] = useState('')

  const onUpdate = () => {
  }

  return (
    <Container >
      <Typography variant='h7' >Trang Chủ / Profile</Typography>
      <Box sx={useStyles.alignBox}>
        <Box sx={{ ...useStyles.flexBox, mt: 6 }}>
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
          <Typography variant='h6' sx={{ minWidth: '250px', fontWeight: 'bold' }}>Thông tin gói dịch vụ</Typography>
          <Typography variant='h8' sx={useStyles.textContent}>Miễn phí</Typography>
        </Box>
        <Box sx={useStyles.flexBox}>
          <Typography variant='h6' sx={{ minWidth: '250px', fontWeight: 'bold' }}>Bảo mật & Quyền riêng tư</Typography>
          <Typography variant='h8' sx={useStyles.textContent} >Kiểm soát quyền truy cập vào tài khoản này</Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Profile