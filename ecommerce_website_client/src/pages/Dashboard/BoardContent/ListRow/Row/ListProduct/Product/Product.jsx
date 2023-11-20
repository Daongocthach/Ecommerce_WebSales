import { Button, Typography, Tooltip, CardActions, CardMedia, CardContent, Card as MuiCard } from '@mui/material'
import { Help, Visibility, ShoppingCart } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
                <Tooltip title="Add To Cart"><Button size="small" startIcon={<ShoppingCart />} sx={{ color: color }}></Button></Tooltip>
                <Tooltip title="Help"><Button size="small" startIcon={<Help />} sx={{ color: color }}></Button></Tooltip>
            </CardActions>

        </MuiCard>
    )
}

export default Product