import { Container, Grid, Typography, Button, Box, Input, Radio } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { formatCurrency } from '../../utils/price'
import imgMomo from '../../assets/img/imgMomo.png'
import Product from './Product/Product'
const useStyles = {
  flexBox: {
    display: 'flex', alignItem: 'center', justifyContent: 'flex-start', gap: 1, mt: 1
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

function Checkout() {
  const navigate = useNavigate()
  return (
    <Container maxWidth="lg" >
      <Grid container spacing={3} mt={2}>
        {/* Phần thông tin đơn hàng */}
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Typography variant="body1" mb={2}>Trang chủ / Checkout</Typography>
          <Typography variant="h5">Thông tin đơn hàng</Typography>
          <Product />
          <Box sx={useStyles.flexBox}>
            <Typography variant='h6' sx={useStyles.textTitle}>Họ và tên:</Typography>
            <Input sx={useStyles.input} value={'Đào Ngọc Thạch'} />
          </Box>
          <Box sx={useStyles.flexBox}>
            <Typography variant='h6' sx={useStyles.textTitle}>Email:</Typography>
            <Input sx={useStyles.input} value={'thach752002@gmail.com'} />
          </Box>
          <Box sx={useStyles.flexBox}>
            <Typography variant='h6' sx={useStyles.textTitle}>Phone:</Typography>
            <Input sx={useStyles.input} value={'0373060206'} />
          </Box>
          <Box sx={useStyles.flexBox}>
            <Typography variant='h6' sx={useStyles.textTitle}>Địa chỉ:</Typography>
            <Input sx={useStyles.input} value={'Thủ đức, TPHCM'} />
          </Box>
          <Button sx={{ bgcolor: '#EE3B3B', color: 'white', mt: 2, borderRadius: 2, alignItems: 'center' }}>Xác nhận địa chỉ</Button>
        </Grid>

        {/* Phần tổng cộng và thanh toán */}
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
            onClick={() => {navigate('/thanks')}}>
            Hoàn tất đặt hàng
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Checkout
