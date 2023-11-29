import { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { Home } from '@mui/icons-material'
import AddAddress from './FormAddress/AddAddress'
import UpdateAddress from './FormAddress/UpdateAddress'
import DeleteAddress from './FormAddress/DeleteAddress'

function Address() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h6' fontWeight={'bold'}>Sổ địa chỉ nhận hàng</Typography>
        <AddAddress />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Home />
          <Box borderRight={'1px solid #BEBEBE'} p={1}>
            <Typography variant='h6'>Đào Ngọc Thạch</Typography>
            <Typography variant='body1'>Bcons Plaza, Dĩ an, Bình Dương</Typography>
          </Box>
          <Typography variant='h6'>0373060206</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <UpdateAddress />
          <DeleteAddress />
        </Box>
      </Box>
    </Box>
  )
}

export default Address