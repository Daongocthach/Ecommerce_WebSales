import { Container, Grid, Typography, Box, FormControl, Select, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Product from '../Dashboard/BoardContent/ListRow/Row/ListProduct/Product/Product'
import FilterByCheck from './FilterByCheck/FilterByCheck'
import FilterByPrice from './FilterByPrice/FilterByPrice'
import productApi from '../../apis/productApi'

const prices = [
  'Tất cả', '1 - 2 trăm', '2 - 5 trăm', 'Trên 1 triệu'
]

function GenreDetail() {
  const subCategoryId = useSelector(state => state.subCategory.id)
  const [products, setProducts] = useState([])
  const [select, setSelect] = useState(1)

  const handleSelect = (event) => {
    setSelect(event.target.value)
  }

  useEffect(() => {
    if (subCategoryId == 0) {
      productApi.getAllProducts()
        .then(response => {
          setProducts(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    } else {
      productApi.getProductsBySubCategoryId(subCategoryId)
        .then(response => {
          setProducts(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }, [subCategoryId])

  return (
    <Container sx={{ mb: 2 }}>
      <Grid container mt={2} maxWidth='lg' spacing={1} >
        {/* Phần lọc */}
        <Grid item xs={12} sm={12} md={2} lg={2} >
          <Typography variant="body1" mb={2} >Trang chủ / Sản phẩm</Typography>
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
                <Select value={select} onChange={handleSelect} >
                  <MenuItem value={1}>Bán chạy nhất</MenuItem>
                  <MenuItem value={2}>Giá thấp</MenuItem>
                  <MenuItem value={3}>Giá cao</MenuItem>
                </Select>
              </FormControl>
              <FilterByPrice />
            </Box>
          </Grid>
          {products.map((product) => (
            <Grid key={product.id} item xs={6} sm={6} md={3} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container >
  )
}

export default GenreDetail