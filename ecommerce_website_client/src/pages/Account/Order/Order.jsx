import { useEffect, useState } from 'react'
import { Typography, Box, Button, Grid } from '@mui/material'
import { LocalShipping, FiberManualRecord } from '@mui/icons-material'
import Search from '../../../components/Appbar/Search/Search'
import { formatCurrency } from '../../../utils/price'
import emptyOrder from '../../../assets/img/empty-order.png'

const useStyles = {
  flexBox: {
    display: 'flex', alignItems: 'center', gap: 2, mt: 1, mb: 1, justifyContent: 'space-between'
  },
  textContent: {
    fontWeight: 'bold', minWidth: '100px'
  },

  button: {
    width: '120px', height: '40px', color: 'inherit', ':focus': { borderBottom: '2px solid red' }
  }
}
function Order() {
  const [select, setSelect] = useState(0)
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent:'space-between'}}>
        <Typography variant='h6' sx={useStyles.textContent}>Đơn hàng của tôi</Typography>
        <Search />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={3} mt={2} >
          <Grid item xs={12} sm={2} md={2} lg={2} >
            <Button sx={useStyles.button} onClick={() => {setSelect(0)}}>Tất cả</Button>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} >
            <Button sx={useStyles.button} onClick={() => {setSelect(1)}}>Đã đặt hàng</Button>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} >
            <Button sx={useStyles.button} onClick={() => {setSelect(2)}}>Đang giao</Button>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} >
            <Button sx={useStyles.button} onClick={() => {setSelect(3)}}>Hoàn tất</Button>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} >
            <Button sx={useStyles.button} onClick={() => {setSelect(4)}}>Đã hủy</Button>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} >
            <Button sx={useStyles.button} onClick={() => {setSelect(5)}}>Trả hàng</Button>
          </Grid>

        </Grid>
        <Box>
          {select == 0 && <><Box sx={useStyles.flexBox}>
            <Box sx={useStyles.flexBox}>
              <Typography variant='h7' sx={useStyles.textContent}>Đơn hàng</Typography>
              <Typography variant='h8'>{3215122}</Typography>
            </Box>
            <Box sx={useStyles.flexBox}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <LocalShipping />
                <Typography variant='h7' sx={useStyles.textContent}>Giao hàng tận nơi</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }} color={'red'}>
                <FiberManualRecord />
                <Typography variant='body1'>Đã hủy</Typography>
              </Box>
            </Box>
          </Box><Box sx={useStyles.flexBox}>
              <Box sx={useStyles.flexBox}>
                <img src='https://th.bing.com/th/id/OIP.wyfA5DGLCMP57ZxNxX997AHaEK?pid=ImgDet&rs=1' style={{ width: '50px', height: '50px' }} />
                <Typography variant='h7' sx={useStyles.textContent}>Máy hút bụi mini 100 công suất</Typography>
              </Box>
              <Box sx={useStyles.flexBox}>
                <Typography variant='h7'>{formatCurrency(2590000)}</Typography>
                <Typography variant='h7'>x{1}</Typography>
              </Box>
            </Box><Box sx={useStyles.flexBox}>
              <Button size={'small'} sx={{ bgcolor: '#CD3333', color: 'white', borderRadius: 10, fontWeight: 'bold', ':hover': { bgcolor: 'red' } }}>Xem chi tiết</Button>
              <Typography variant='h6'>Thành tiền: {formatCurrency(2590000)}</Typography>
            </Box></>}
          {(select == 1) && <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 1 }}>
            <img src={emptyOrder}/>
            <Typography variant='h7' >Bạn chưa có đơn hàng nào</Typography>
            <Typography variant='h6' >Cùng khám phá hàng ngàn sản phẩm tại G2Store nhé!</Typography>
            <Button sx={{ bgcolor:'#CD3333', borderRadius: 10, color: 'white', fontWeight: 'bold', ':hover': { bgcolor: 'red' } }} >Khám phá ngay</Button>
          </Box>}
        </Box>
      </Box>
    </Box>
  )
}

export default Order