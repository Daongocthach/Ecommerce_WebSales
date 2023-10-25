import { Container, Grid, Typography, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Product from './Product/Product'
import { formatCurrency } from '../../utils/price'

const useStyles = {
  flexBox: {
    display: 'flex', alignItem: 'center', justifyContent: 'flex-start', gap: 1
  },
  flexBoxPrice: {
    display: 'flex', alignItem: 'center', justifyContent: 'space-between', mt: 2
  },
  textPrice: {
    fontWeight: 'bold'
  },
  input: {
    minWidth: '200px', width: '500px'
  },
  textTitle: {
    fontWeight: 'bold', color: 'gray', minWidth: '100px'
  }
}

function Cart() {
  const navigate = useNavigate()
  return (
    <Container maxWidth='lg' sx={{ mb: 2 }}>
      <Grid container spacing={3} mt={2} >
        {/* Phần sản phẩm */}
        <Grid item xs={12} sm={12} md={12} lg={8} >
          <Typography variant="body1" mb={2}>Trang chủ / Cart</Typography>
          <Typography variant="h5" fontWeight={'bold'}>Có {2} Sản phẩm trong giỏ hàng</Typography>
          <Product />
          <Product />
          <Product />
          <Product />
        </Grid>

        {/* Phần tổng cộng và đặt hàng */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={useStyles.flexBoxPrice}>
            <Typography variant='h5' sx={useStyles.textPrice}>Tổng tiền: </Typography>
            <Typography variant='h7' sx={useStyles.textPrice}>{formatCurrency(1290000)}</Typography>
          </Box>
          <Box sx={useStyles.flexBoxPrice}>
            <Typography variant='h7' sx={useStyles.textPrice}>Phí vận chuyển: </Typography>
            <Typography variant='h7' sx={useStyles.textPrice}>{formatCurrency(19000)}</Typography>
          </Box>
          <Box sx={useStyles.flexBoxPrice}>
            <Typography variant='h7' sx={useStyles.textPrice}>Giảm giá khuyến mãi: </Typography>
            <Typography variant='h7' sx={useStyles.textPrice}>{formatCurrency(19000)}</Typography>
          </Box>
          <Box sx={{ ...useStyles.flexBoxPrice, borderBottom: '1px solid gray' }}>
            <Typography variant='h7' sx={useStyles.textPrice}>Giảm giá voucher: </Typography>
            <Typography variant='h7' sx={useStyles.textPrice}>{formatCurrency(0)}</Typography>
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