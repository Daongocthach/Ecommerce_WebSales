import { Box,  Typography, TextField, Checkbox } from '@mui/material'
import { useEffect, useState } from 'react'
import DeleteItem from '../DeleteItem/DeleteItem'
import { formatCurrency } from '../../../utils/price'

function Product() {
    const [quantity, setQuantity] = useState(1)
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 4 }}>
            <img src='https://i.pinimg.com/736x/22/98/cb/2298cb267f745cebcbec821857e00800.jpg' alt='omachi'
                style={{ objectFit: 'cover', borderRadius: '5px', height: '150px', with: '150px' }} />
            <Box ml={2}>
                <Typography variant='h6' fontWeight={'bold'}>Mì omachi Sốt Spaghetty Nước sốt thịt bằm cà chua</Typography>
                <Typography variant='h6' color={'red'} fontWeight={'bold'}>{formatCurrency(129000)}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                    <Typography variant='body1' fontWeight={'bold'} color={'gray'} >Số lượng</Typography>
                    <TextField type='number' size='small' InputProps={{ inputProps: { min: 1, max: 50 } }}
                        value={quantity} onChange={e => setQuantity(e.target.value)} />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center', ml: 2, gap: 2 }}>
                <DeleteItem/>
                <Checkbox/>
            </Box>
        </Box>
    )
}

export default Product