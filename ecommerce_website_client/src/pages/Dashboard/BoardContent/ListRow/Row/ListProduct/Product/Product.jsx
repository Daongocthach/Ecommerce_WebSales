import { Button, Typography, Tooltip, CardActions, CardMedia, CardContent, Card as MuiCard } from '@mui/material'
import { Help, Visibility, ShoppingCart } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatCurrency } from '../../../../../../../utils/price'

const color = (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black')

function Product({ product }) {
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true)
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    return (
        <MuiCard
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                cursor: 'pointer',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#363636' : 'white'),
                borderRadius: '10px',
                height: '220px',
                width: '220px',
                p: 0.5
            }}>
            {product?.image &&
                <CardMedia sx={{ height: '150px', borderRadius: '6px' }}
                    image={product?.image}
                />
            }
            {!isHovered && (
                <CardContent sx={{ p: 0 }}>
                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                        {product?.name}
                    </Typography>
                    <Typography variant='body1' fontWeight={'bold'} color={'red'}>
                        {formatCurrency(product?.price)}
                    </Typography>
                </CardContent>
            )}
            {isHovered && (
                <CardActions sx={{}}>
                    <Tooltip title="View"><Button size="small" startIcon={<Visibility />} sx={{ color: 'red' }} onClick={() => { navigate('/product-detail') }}></Button></Tooltip>
                    <Tooltip title="Add To Cart"><Button size="small" startIcon={<ShoppingCart />} sx={{ color: color }}></Button></Tooltip>
                    <Tooltip title="Help"><Button size="small" startIcon={<Help />} sx={{ color: color }}></Button></Tooltip>
                </CardActions>
            )}
        </MuiCard>
    )
}

export default Product