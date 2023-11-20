import { Container, Grid, Typography, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product/Product'
import { formatCurrency } from '../../utils/price'
import cartItemApi from '../../apis/cartItemApi'


function Cart() {
  const navigate = useNavigate()
  const total = useSelector(state => state.cart.total) || 0
  const cart = useSelector(state => state.cart)
  const [cartItems, setCartItems] = useState([])
  const user = useSelector(state => state.auth)
  useEffect(() => {
    if (user && cart) {
      setCartItems(cart?.cartItems)
    }
    else {
      navigate('/login')
    }
  }, [cart, user, navigate])
  return (
    <Container maxWidth='lg' sx={{ mb: 2 }}>
      <Grid container spacing={3} mt={2} >
        {/* Phần sản phẩm */}
        <Grid item xs={12} sm={12} md={12} lg={8} >
          <Typography variant="body1" mb={2}>Trang chủ / Cart</Typography>
          <Typography variant="h5" fontWeight={'bold'}>Có {cartItems.length} Sản phẩm trong giỏ hàng</Typography>
          {Array.isArray(cartItems) && cartItems.map((cartItem, index) =>
            <Product key={index} product={cartItem.product} quantity={cartItem.quantity} customerId={user?.id} />)}
        </Grid>

        {/* Phần tổng cộng và đặt hàng */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between', mt: 2 }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Tổng tiền: </Typography>
            <Typography variant='h7' sx={{ fontWeight: 'bold' }}>{formatCurrency(total)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between', mt: 2 }}>
            <Typography variant='h7' sx={{ fontWeight: 'bold' }}>Phí vận chuyển: </Typography>
            <Typography variant='h7' sx={{ fontWeight: 'bold' }}>{formatCurrency(19000)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between', mt: 2 }}>
            <Typography variant='h7' sx={{ fontWeight: 'bold' }}>Giảm giá khuyến mãi: </Typography>
            <Typography variant='h7' sx={{ fontWeight: 'bold' }}>{formatCurrency(19000)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between', mt: 2, borderBottom: '1px solid gray' }}>
            <Typography variant='h7' sx={{ fontWeight: 'bold' }}>Giảm giá voucher: </Typography>
            <Typography variant='h7' sx={{ fontWeight: 'bold' }}>{formatCurrency(0)}</Typography>
          </Box>
          <Button sx={{ width: '100%', bgcolor: '#EE3B3B', color: 'white', mt: 2, borderRadius: 2, alignItems: 'center' }}
            onClick={() => navigate('/checkout')}>
            Đặt hàng
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart