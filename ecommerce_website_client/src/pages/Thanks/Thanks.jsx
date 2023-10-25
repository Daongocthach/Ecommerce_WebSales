import { Container, Grid, Typography } from '@mui/material'
import Product from './Product/Product'
import thanksImage from '../../assets/img/thanks.gif'

function Thanks() {
    return (
        <Container maxWidth='lg' >
            <Grid container spacing={3} mt={2} minHeight={'63vh'}>
                {/* Phần sản phẩm */}
                <Grid item xs={12} sm={12} md={12} lg={6} >
                    <Typography variant="body1" mb={2}>Trang chủ / Thanks</Typography>
                    <Typography variant="h5" fontWeight={'bold'}>Bạn đã mua {2} sản phẩm</Typography>
                    <Product />
                    <Product />
                </Grid>

                {/* Thanks */}
                <img src={thanksImage} alt='thanks'
                    style={{ objectFit: 'cover', borderRadius: '5px', height: '400px', with: '400px' }} />
            </Grid>
        </Container>
    )
}

export default Thanks