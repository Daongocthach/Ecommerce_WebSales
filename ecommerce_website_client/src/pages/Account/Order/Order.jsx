import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Typography, Box, Button, Grid } from '@mui/material'
import { LocalShipping, FiberManualRecord } from '@mui/icons-material'
import Search from '../../../components/Appbar/Search/Search'
import { formatCurrency } from '../../../utils/price'
import emptyOrder from '../../../assets/img/empty-order.png'
import orderApi from '../../../apis/orderApi'
import OrderItem from './OrderItem/OrderItem'

const useStyles = {
  flexBox: {
    display: 'flex', alignItems: 'center', gap: 2, mt: 1, mb: 1, justifyContent: 'space-between'
  },
  button: {
    width: '120px', height: '40px', color: 'inherit', ':focus': { borderBottom: '2px solid red' }
  }
}
function Order() {
  const [orders, setOrders] = useState([])
  const user = useSelector(state => state.auth)
  const customerId = user.id
  const handleAllOrders = () => {
    orderApi.getOrderByCustomerId(customerId)
      .then((response) => { setOrders(response.data) })
  }
  const handlePending = () => {
    orderApi.getOrderByCustomerIdPending(customerId)
      .then((response) => { setOrders(response.data) })
  }
  const handleConfirmed = () => {
    orderApi.getOrderByCustomerIdConfirmed(customerId)
      .then((response) => { setOrders(response.data) })
  }
  const handleOnDelivery = () => {
    orderApi.getOrderByCustomerIdOnDelivery(customerId)
      .then((response) => { setOrders(response.data) })
  }
  const handleCancel = () => {
    orderApi.getOrderByCustomerIdCancel(customerId)
      .then((response) => { setOrders(response.data) })
  }
  const handleSuccess = () => {
    orderApi.getOrderByCustomerIdSuccess(customerId)
      .then((response) => { setOrders(response.data) })
  }
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Đơn hàng của tôi</Typography>
        <Search />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={3} mt={2} >
          <Grid item xs={12} sm={2} md={2} lg={2} >
            <Button sx={useStyles.button} onClick={handleAllOrders}>Tất cả</Button>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} >
            <Button sx={useStyles.button} onClick={handlePending}>Đã đặt hàng</Button>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} >
            <Button sx={useStyles.button} onClick={handleConfirmed}>Đã xác nhận</Button>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} >
            <Button sx={useStyles.button} onClick={handleOnDelivery}>Đang giao</Button>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} >
            <Button sx={useStyles.button} onClick={handleCancel}>Đã hủy</Button>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} >
            <Button sx={useStyles.button} onClick={handleSuccess}>Hoàn tất</Button>
          </Grid>
        </Grid>
        <Box>
          {Array.isArray(orders) && orders.map((order, index) =>
            <Box key={index}>
              <Box sx={useStyles.flexBox}>
                <Box sx={useStyles.flexBox}>
                  <Typography variant='h7' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Đơn hàng</Typography>
                  <Typography variant='h8'>{order?.id}</Typography>
                </Box>
                <Box sx={useStyles.flexBox}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <LocalShipping />
                    <Typography variant='h7' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Giao hàng tận nơi</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }} color={'red'}>
                    <FiberManualRecord />
                    <Typography variant='body1'>{order?.orderStatus}</Typography>
                  </Box>
                </Box>
              </Box>
              {order?.orderItems.map((orderItem, index) =>
                <OrderItem key={index} orderItem={orderItem} />)}
              <Box sx={useStyles.flexBox}>
                <Button size={'small'} sx={{ bgcolor: '#CD3333', color: 'white', borderRadius: 10, fontWeight: 'bold', ':hover': { bgcolor: 'red' } }}>Xem chi tiết</Button>
                <Typography variant='h6'>Thành tiền: {formatCurrency(order.total)}</Typography>
              </Box>
            </Box>)}
          {orders.length < 1 && <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <img src={emptyOrder} />
            <Typography variant='h7' >Bạn chưa có đơn hàng nào</Typography>
            <Typography variant='h6' >Cùng khám phá hàng ngàn sản phẩm tại G2Store nhé!</Typography>
            <Button sx={{ bgcolor: '#CD3333', borderRadius: 10, color: 'white', fontWeight: 'bold', ':hover': { bgcolor: 'red' } }} >
              Khám phá ngay
            </Button>
          </Box>}
          
        </Box>
      </Box>
    </Box >
  )
}

export default Order