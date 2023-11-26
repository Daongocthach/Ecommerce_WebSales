import { Typography, Box, Button, Grid } from '@mui/material'
import { formatCurrency } from '../../../../utils/price'
function OrderItem({ orderItem }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1, mb: 1, justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1, mb: 1, justifyContent: 'space-between' }}>
                <img src={orderItem?.product.image} style={{ width: '50px', height: '50px' }} />
                <Typography variant='h7' sx={{ fontWeight: 'bold', minWidth: '100px' }}>{orderItem?.product?.name}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1, mb: 1, justifyContent: 'space-between' }}>
                <Typography variant='h7'>{formatCurrency(orderItem?.product.price)}</Typography>
                <Typography variant='h7'>x{orderItem?.quantity}</Typography>
            </Box>
        </Box>
    )
}

export default OrderItem