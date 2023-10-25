import { Container, Grid, Typography, Box, FormControl, Select, MenuItem, Checkbox } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Product from '../Dashboard/BoardContent/ListRow/Row/ListProduct/Product/Product'
import { mockData } from '../../apis/mockdata'
import FilterByCheck from './FilterByCheck/FilterByCheck'
import FilterByPrice from './FilterByPrice/FilterByPrice'

const prices = [
  'Tất cả', '1 - 2 trăm', '2 - 5 trăm', 'Trên 1 triệu'
]

function GenreDetail() {
  const products = mockData.products
  const categories = mockData.categories
  const [select, setSelect] = useState(1)

  const handleSelect = (event) => {
    setSelect(event.target.value)
  }

  const handleChange = () => {

  }

  return (
    <Container sx={{ mb: 2 }}>
      <Grid container mt={2} maxWidth='lg' spacing={1} >
        {/* Phần lọc */}
        <Grid item xs={12} sm={12} md={2} lg={2} >
          <Typography variant="body1" mb={2} >Trang chủ / Sản phẩm</Typography>
          <Typography variant="h6" fontWeight={'bold'} >Loại sản phẩm</Typography>
          {categories?.map((category, index) =>
            <FilterByCheck key={index} category={category} />)}
          <Typography variant="h6" fontWeight={'bold'} >Mức giá</Typography>
          {prices.map((price, index) =>
            <FilterByCheck key={index} price={price} />)}
        </Grid>

        {/* Phần sản phẩm */}
        <Grid mt={1} item container xs={12} sm={12} md={10} lg={10} >
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 2 }}>
              <Typography variant='body1' fontWeight={'bold'} >Sắp xếp</Typography>
              <FormControl size={'small'} sx={{ m: 1, minWidth: 120 }}>
                <Select value={select} onChange={handleChange} defaultValue={10} >
                  <MenuItem value={1}>Bán chạy nhất</MenuItem>
                  <MenuItem value={2}>Giá thấp</MenuItem>
                  <MenuItem value={3}>Giá cao</MenuItem>
                </Select>
              </FormControl>
              <FilterByPrice />
            </Box>
          </Grid>
          {products.map((product) => (
            <Grid key={product._id} item xs={6} sm={6} md={3} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>

      </Grid>
    </Container >
  )
}

export default GenreDetail