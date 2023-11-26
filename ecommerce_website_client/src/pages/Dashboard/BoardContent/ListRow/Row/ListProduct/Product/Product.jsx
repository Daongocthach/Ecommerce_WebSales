import { Button, Typography, Tooltip, CardActions, CardMedia, CardContent, Card as MuiCard } from '@mui/material'
import { Help, Visibility, ShoppingCart } from '@mui/icons-material'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { formatCurrency } from '../../../../../../../utils/price'
import cartItemApi from '../../../../../../../apis/cartItemApi'
import { addToCart } from '../../../../../../../redux/actions/cart'

const color = (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black')

function Product({ product }) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth)
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true)
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }
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
    return (
        <MuiCard
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                cursor: 'pointer',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#363636' : 'white'),
                borderRadius: '10px',
                height: '280px',
                width: '220px',
                p: 0.5
            }}>
            {product?.image &&
                <Link to={`/product-detail?${product?.id}`}>
                    <CardMedia sx={{ height: '150px', borderRadius: '6px', objectFit: 'contain' }}
                        image={product?.image} />
                </Link>
            }
            <CardContent sx={{ p: 0 }}>
                <Typography variant='body1' sx={{ fontWeight: 'bold', height: '50px' }}>
                    {product?.name}
                </Typography>
                <Typography variant='body1' fontWeight={'bold'} color={'red'}>
                    {formatCurrency(product?.price)}
                </Typography>
            </CardContent>

            <CardActions>
                <Tooltip title="View"><Button size="small" startIcon={<Visibility />} sx={{ color: 'red' }} onClick={() => { navigate(`/product-detail?${product?.id}`) }}></Button></Tooltip>
                <Tooltip title="Add To Cart"><Button size="small" startIcon={<ShoppingCart />} sx={{ color: color }} onClick={handleClickAddToCart}></Button></Tooltip>
                <Tooltip title="Help"><Button size="small" startIcon={<Help />} sx={{ color: color }}></Button></Tooltip>
            </CardActions>

        </MuiCard>
    )
}

export default Product