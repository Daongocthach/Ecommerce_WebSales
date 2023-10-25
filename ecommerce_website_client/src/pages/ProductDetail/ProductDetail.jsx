import { useEffect, useState } from 'react'
import { Rating, Box, Stack, Typography, Button, Avatar } from '@mui/material'
import {CheckCircleOutline, ShoppingCart, PointOfSale } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import CommentSection from './CommentSection/CommentSection'
import { mockData } from '../../apis/mockdata'
import momo from '../../assets/img/momo.png'

const useStyles = {
  container: {
    height: '100vh', width: '100%', display: 'flex', justifyContent: 'center'
  },
  boxReSize: {
    width: '80vw', height: '100%', overflow: 'hidden', pt: 5, pl: 5,
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#363636' : '#FFFFF0')
  },
  infoBox: {
    width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-start', gap: 5
  },
  boxLeftRight: {
    gap: 1
  },
  text: {
    fontWeight: 'bold', fontSize: '20px'
  },
  button: {
    bgcolor: '#1E90FF', color: 'white', ':hover': { bgcolor: 'gray' }
  },
  image: {
    objectFit: 'cover', borderRadius: '15px'
  },
  boxFlex: {
    display: 'flex', alignItems: 'center', gap: 1
  }
}

function ProductDetail() {
  const product = mockData.products[0]
  const categories = mockData.categories
  const reviews = mockData.products[0].reviews
  const [showMore, setShowMore] = useState(3)

  function handleShowMoreClick() {
    setShowMore(showMore + 3)
  }
  function handleClickAddToCart() {

  }
  function handleClickBuy() {

  }
  return (
    <div>
      <Box sx={useStyles.container}>
        <Box sx={useStyles.boxReSize}>
          <Typography variant='h4' fontWeight={'bold'} sx={{ mb: 1 }}>{product?.name}</Typography>
          <Box sx={useStyles.infoBox}>
            <Box sx={{}}>
              <img src={product?.image} style={{ ...useStyles.image, width: '590px', height: '350px' }} />
              <Typography variant='h5' fontWeight={'bold'}>Thông tin sản phẩm</Typography>
              <Typography variant='body1'> {product?.description}</Typography>
            </Box>
            <Box sx={{}}>
              <Typography variant='h5' fontWeight={'bold'} sx={{ color: 'red' }} >129.000đ </Typography>
              <Typography variant='h7' >HSD: 20/8/2023 - 20/12/2024</Typography>
              <Box sx={{ ...useStyles.boxFlex, mt: 2 }}>
                <Typography variant='body1' color={'blue'}>{'1583 Đánh giá'}</Typography>
                <Rating name="size-medium" size='large' value={4.5} precision={0.1} />
                <Typography variant='subtitle2'>Your Rating: 5</Typography>
              </Box>
              <Box sx={{ ...useStyles.boxFlex, mb: 2 }}>
                <b>Loại sản phẩm:</b> {categories?.map(category => <Typography key={category._id} variant='body1'>{category.name}</Typography>)}
              </Box>
              <img src={momo} alt='momo' style={{ ...useStyles.image, width: '100%', height: '50px' }} />
              <Typography variant='h7' fontWeight={'bold'} >Nhận ngay khuyến mãi đặc biệt</Typography>
              <ul style={{ padding: 0 }}>
                  <li style={useStyles.boxFlex}> <CheckCircleOutline /> 'Nhận mã giảm giá giao hàng'</li>
                  <li style={useStyles.boxFlex}> <CheckCircleOutline /> 'Tích xu đổi thưởng khi đơn hàng thành công'</li>
              </ul>
              <Box sx={useStyles.boxFlex}>
                <Button sx={{ ...useStyles.button, bgcolor: '#EE3B3B' }} startIcon={<PointOfSale/>} onClick={() => handleClickBuy()}>Mua Ngay</Button>
                <Button sx={useStyles.button} startIcon={<ShoppingCart/>} onClick={() => handleClickAddToCart()}>Thêm vào giỏ</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mb: 2 }}>
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
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default ProductDetail