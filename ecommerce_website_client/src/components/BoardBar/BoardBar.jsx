import { Box, Chip } from '@mui/material'
import { Link } from 'react-router-dom'
import { Person, PersonAdd, FiberManualRecord } from '@mui/icons-material'

function BoardBar() {
    return (
        <Box sx={{
            width: '100%', height: (theme) => theme.webCustom.boardBarHeight, display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', borderTop: '1px solid #D3D3D3',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#363636' : '#E6E6FA')
        }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, pl: 5 }}>
                <Chip icon={<FiberManualRecord sx={{ fontSize: '10px' }} />} label='Giao hàng nhanh' sx={{ bgcolor: 'inherit' }} />
                <Chip icon={<FiberManualRecord sx={{ fontSize: '10px' }} />} label='Vô vàn khuyến mãi' sx={{ bgcolor: 'inherit' }} />
                <Chip icon={<FiberManualRecord sx={{ fontSize: '10px' }} />} label='Sản phẩm đa dạng' sx={{ bgcolor: 'inherit' }} />
                <Chip icon={<FiberManualRecord sx={{ fontSize: '10px' }} />} label='Đảm bảo chất lượng' sx={{ bgcolor: 'inherit' }} />
            </Box>
            {/* <Box sx={{ display: 'flex', gap: 2 }}>
                <Link to={'/login'} ><Chip icon={<Person />} label='Đăng nhập' /></Link>
                <Link to={'/register'} ><Chip icon={<PersonAdd />} label='Đăng Ký' /></Link>
            </Box> */}
        </Box>
    )
}

export default BoardBar