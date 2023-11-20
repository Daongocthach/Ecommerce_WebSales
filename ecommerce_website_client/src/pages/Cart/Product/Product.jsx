import { Box, Typography, TextField, Checkbox, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DeleteItem from '../DeleteItem/DeleteItem'
import { formatCurrency } from '../../../utils/price'
import cartItemApi from '../../../apis/cartItemApi'

function Product({ product, quantity, customerId }) {
    const [update, setUpdate] = useState(0)
    const [updateQuantity, setUpdateQuantity] = useState(quantity)
    const handleUpdateQuantity = (e) => {
        setUpdateQuantity(e.target.value)
        cartItemApi.updateCartItem(product?.id, customerId, updateQuantity)
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 4 }}>
            <img src={product?.image} alt='omachi'
                style={{ objectFit: 'cover', borderRadius: '5px', height: '150px', with: '150px' }} />
            <Box ml={2} minWidth={'300px'}>
                <Typography variant='h6' fontWeight={'bold'} maxWidth={'280px'}>{product?.name}</Typography>
                <Typography variant='h6' color={'red'} fontWeight={'bold'}>{formatCurrency(product?.price)}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                    <Typography variant='body1' fontWeight={'bold'} color={'gray'} >Số lượng</Typography>
                    <TextField type='number' size='small' InputProps={{ inputProps: { min: 1, max: 50 } }}
                        value={updateQuantity} onChange={(e) => handleUpdateQuantity(e)} />
                </Box>
            </Box>
            <Box >
                <DeleteItem customerId={customerId} productId={product?.id}/>
            </Box>
        </Box>
    )
}

export default Product