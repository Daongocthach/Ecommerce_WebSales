import { Container, Grid, Typography, Button, Box, Input, Radio } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { formatCurrency } from '../../utils/price'
import imgMomo from '../../assets/img/imgMomo.png'
import Product from './Product/Product'
import orderApi from '../../apis/orderApi'
import { getCurrentTime } from '../../utils/date'

const useStyles = {
  flexBox: {
    display: 'flex', alignItem: 'center', justifyContent: 'flex-start', gap: 1, mt: 1
  },
  flexBoxPrice: {
    display: 'flex', alignItem: 'center', justifyContent: 'space-between', mt: 2
  }
}

function Checkout() {
  const cart = useSelector(state => state.cart)
  const cartItems = cart.cartItems
  const user = useSelector(state => state.auth)
  const navigate = useNavigate()

  function handleClickOrder() {
    if (user) {
      const currentTimeString = getCurrentTime()
      const orderItems = cartItems.map(cartItem => ({
        product: {
          id: cartItem.product.id,
          price: cartItem.product.price
        },
        quantity: cartItem.quantity
      }))
      const order = {
        'createdDate': currentTimeString,
        'orderStatus': 'PENDING',
        'customer': {
          'id': user?.id
        },
        'orderItems': orderItems
      }
      orderApi.addOrder(order)
        .then(response => {
          alert('Đặt hàng thành công')
          navigate(`/thanks?${cartItems.length}`)
        })
        .catch(error => {
          console.error('Lỗi khi đặt hàng:', error)
          navigate('/cart')
        })
    } else {
      alert('Vui lòng đăng nhập!')
      navigate('/login')
    }
  }
  return (
    <Container maxWidth="lg" sx={{ mb: 2 }}>
      <Grid container spacing={3} mt={2}>
        {/* Phần thông tin đơn hàng */}
        <Grid item xs={12} sm={6} md={6} lg={8}>
          <Typography variant="body1" mb={2}>Trang chủ / Checkout</Typography>
          <Typography variant="h5">Thông tin đơn hàng</Typography>
          {Array.isArray(cartItems) && cartItems.map((cartItem, index) =>
            <Product key={index} product={cartItem.product} quantity={cartItem.quantity} />)}
        </Grid>

        {/* Phần tổng cộng và thanh toán */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Typography variant='h5' sx={useStyles.textPrice}>Thông tin người nhận</Typography>
          <Box sx={useStyles.flexBox}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'gray', minWidth: '100px' }}>Họ và tên:</Typography>
            <Input sx={{ minWidth: '200px', width: '500px' }} value={user?.fullName} />
          </Box>
          <Box sx={useStyles.flexBox}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'gray', minWidth: '100px' }}>Phone:</Typography>
            <Input sx={{ minWidth: '200px', width: '500px' }} value={user?.phoneNo} />
          </Box>
          <Box sx={useStyles.flexBox}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'gray', minWidth: '100px' }}>Địa chỉ:</Typography>
            <Input sx={{ minWidth: '200px', width: '500px' }} value={user?.address} />
          </Box>
          <Button sx={{ bgcolor: '#EE3B3B', color: 'white', mt: 2, borderRadius: 2, alignItems: 'center' }}>Xác nhận thông tin</Button>
          <Box sx={{ ...useStyles.flexBoxPrice, borderTop: '1px solid gray' }}>
            <Typography variant='h5' sx={useStyles.textPrice}>Tổng tiền: </Typography>
            <Typography variant='h7' sx={useStyles.textPrice}>{formatCurrency(cart?.total)}</Typography>
          </Box>
          <Box sx={useStyles.flexBoxPrice}>
            <Typography variant='h7' sx={useStyles.textPrice}>Phí vận chuyển: </Typography>
            <Typography variant='h7' sx={useStyles.textPrice}>{formatCurrency(5000)}</Typography>
          </Box>
          <Box sx={useStyles.flexBoxPrice}>
            <Typography variant='h7' sx={useStyles.textPrice}>Giảm giá khuyến mãi: </Typography>
            <Typography variant='h7' sx={useStyles.textPrice}>{formatCurrency(0)}</Typography>
          </Box>
          <Box sx={{ ...useStyles.flexBoxPrice, borderBottom: '1px solid gray' }}>
            <Typography variant='h7' sx={useStyles.textPrice}>Giảm giá voucher: </Typography>
            <Typography variant='h7' sx={useStyles.textPrice}>{formatCurrency(0)}</Typography>
          </Box>
          <Typography variant='h5' sx={{ mt: 3 }}>Phương thức thanh toán</Typography>
          <Box sx={useStyles.flexBox}>
            <Radio sx={{ height: '30px', width: '30px' }} />
            <Typography variant='h7'>Thanh toán khi nhận hàng</Typography>
          </Box>
          <Box sx={useStyles.flexBox}>
            <Radio sx={{ height: '30px', width: '30px' }} />
            <Typography variant='h7' >Thanh toán bằng momo</Typography>
            <img src={imgMomo} alt='thanh toan momo' style={{ height: '30px', width: '30px' }} />
          </Box>
          <Button sx={{ width: '100%', bgcolor: '#EE3B3B', color: 'white', mt: 2, borderRadius: 2, alignItems: 'center' }}
            onClick={handleClickOrder}>
            Hoàn tất đặt hàng
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Checkout
