import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { formatCurrency } from '../../../utils/price'

function Product() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 4 }}>
            <img src='https://i.pinimg.com/736x/22/98/cb/2298cb267f745cebcbec821857e00800.jpg' alt='omachi'
                style={{ objectFit: 'cover', borderRadius: '5px', height: '70px', with: '70px' }} />
            <Box ml={2}>
                <Typography variant='h6' fontWeight={'bold'}>Mì omachi Sốt Spaghetty Nước sốt thịt bằm cà chua</Typography>
                <Typography variant='h6' color={'red'} fontWeight={'bold'}>{formatCurrency(129000)}</Typography>
            </Box>
        </Box>
    )
}

export default Product