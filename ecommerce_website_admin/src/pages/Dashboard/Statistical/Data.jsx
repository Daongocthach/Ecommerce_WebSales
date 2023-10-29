import { Box, Typography, Grid } from '@mui/material'
import { Person, PersonOutline, Category, Flag, Slideshow } from '@mui/icons-material'
import { useSelector } from 'react-redux'

const customBox = {
    display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center'
}

function Data() {
    return (
        <Grid container spacing={1} mt={2} >
            <Grid item xs={12} sm={6} md={3} lg={3} sx={customBox}>
                <Person />
                <Typography variant='h6' fontWeight={'bold'}>Số lượng tài khoản: {0}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} sx={customBox}>
                <Slideshow />
                <Typography variant='h6' fontWeight={'bold'}>Số lượng sản phẩm: {0}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} sx={customBox}>
                <Category />
                <Typography variant='h6' fontWeight={'bold'}>Các loại sản phẩm: {0}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} sx={customBox}>
                <Category />
                <Typography variant='h6' fontWeight={'bold'}>Nhà cung cấp: {0}</Typography>
            </Grid>
        </Grid>
    )
}

export default Data