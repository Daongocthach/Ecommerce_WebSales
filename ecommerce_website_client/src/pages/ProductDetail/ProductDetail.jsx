import { useEffect, useState } from 'react'
import { Rating, Box, Typography, Button } from '@mui/material'
import { CheckCircleOutline, ShoppingCart, PointOfSale } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CommentSection from './CommentSection/CommentSection'
import momo from '../../assets/img/momo.png'
import productApi from '../../apis/productApi'
import { formatCurrency } from '../../utils/price'
import cartItemApi from '../../apis/cartItemApi'
import { addToCart } from '../../redux/actions/cart'

function ProductDetail() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
  var productId = window.location.search.substring(1)
  const [product, setProduct] = useState()
  const [showMore, setShowMore] = useState(3)

  // function handleShowMoreClick() {
  //   setShowMore(showMore + 3)
  // }
  function handleClickAddToCart() {
    if (user && product) {
      const cartItem = {
        'id': {
          'customerId': user.id,
          'productId': product.id
        },
        'customer': {
          'id': user.id
        },
        'product': {
          'id': product.id
        },
        'quantity': 1
      }
      cartItemApi.addCartItem(cartItem)
        .then(response => {
          alert('Thêm vào giỏ hàng thành công')
          dispatch(addToCart(response.data))
        })
        .catch(error => {
          console.error('Lỗi khi thêm vào giỏ hàng:', error)
        })
    } else {
      console.error('User hoặc Product không tồn tại.')
    }
  }
  function handleClickBuy() {

  }
  useEffect(() => {
    productApi.getProductById(productId)
      .then(response => {
        setProduct(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [productId])
  return (
    <div>
      <Box sx={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{
          width: '80vw', height: '100%', overflow: 'hidden', pt: 5, pl: 5,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#363636' : '#FFFFF0')
        }}>
          <Typography variant='h4' fontWeight={'bold'} sx={{ mb: 1 }}>{product?.name}</Typography>
          <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-start', gap: 5 }}>
            <Box >
              <img src={product?.image} style={{ objectFit: 'contain', borderRadius: '15px', width: '590px', height: '350px' }} />
              <Typography variant='h5' fontWeight={'bold'}>Thông tin sản phẩm</Typography>
              <Typography variant='body1'> {product?.description}</Typography>
            </Box>
            <Box>
              <Typography variant='h5' fontWeight={'bold'} sx={{ color: 'red' }} >{formatCurrency(product?.price)}</Typography>
              <Typography variant='h7' >Giảm giá: {product?.discount}%</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                <Typography variant='body1' color={'blue'}>{'1583 Đánh giá'}</Typography>
                <Rating name="size-medium" size='large' value={4.5} precision={0.1} />
                <Typography variant='subtitle2'>Your Rating: 5</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <b>Loại sản phẩm:</b> <Typography variant='body1'>{product?.subCategory?.name}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <b>Nhà cung cấp</b> <Typography variant='body1'>{product?.provider?.name}</Typography>
              </Box>
              <img src={momo} alt='momo' style={{ objectFit: 'cover', borderRadius: '15px', width: '100%', height: '50px' }} />
              <Typography variant='h7' fontWeight={'bold'} >Nhận ngay khuyến mãi đặc biệt</Typography>
              <ul style={{ padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 1 }}> <CheckCircleOutline /> 'Nhận mã giảm giá giao hàng'</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 1 }}> <CheckCircleOutline /> 'Tích xu đổi thưởng khi đơn hàng thành công'</li>
              </ul>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button sx={{ color: 'white', ':hover': { bgcolor: 'gray' }, bgcolor: '#EE3B3B' }} startIcon={<PointOfSale />} onClick={handleClickAddToCart}>Mua Ngay</Button>
                <Button sx={{ bgcolor: '#1E90FF', color: 'white', ':hover': { bgcolor: 'gray' } }} startIcon={<ShoppingCart />} onClick={handleClickAddToCart}>Thêm vào giỏ</Button>
              </Box>
            </Box>
          </Box>
          {/* <Box sx={{ mb: 2 }}>
            <Typography variant='h4' fontWeight={'bold'}>Đánh giá sản phẩm</Typography>
            {reviews?.slice(0, showMore).map((review, index) =>
              <Box key={index} sx={{ display: 'flex', borderRadius: 3, width: '100%', gap: 2, alignItems: 'center', mt: 3 }}>
                <Avatar alt="Remy Sharp" src={review?.avatar} />
                <Box sx={{}}>
                  <Typography variant='subtitle1'>{review?.name}</Typography>
                  <Typography variant='body1'>{review?.comment}</Typography>
                </Box>
              </Box>
            )}
            {reviews.length > showMore && (
              <Button onClick={handleShowMoreClick} sx={{ color: 'gray', '&:hover': { bgcolor: 'darkgray' } }}>Show More</Button>
            )}
            <CommentSection />
          </Box> */}
        </Box>
      </Box>
    </div>
  )
}

export default ProductDetail