import {
  Container, Grid, Typography, Box, FormControl, Select, MenuItem,
  FormGroup, FormControlLabel, Checkbox, Menu, Slider, TextField, Button, Breadcrumbs, Link
} from '@mui/material'
import DehazeIcon from '@mui/icons-material/Dehaze'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Product from '../Dashboard/BoardContent/ListRow/Row/ListProduct/Product/Product'
import productApi from '../../apis/productApi'
import { sortByMaxId, sortByMaxPrice, sortByMinPrice, sortByMaxIdAndPriceRange } from '../../utils/price'
import { formatCurrency } from '../../utils/price'
import providerApi from '../../apis/providerApi'
import categoryApi from '../../apis/categoryApi'
import MenuCategory from './MenuCategory/MenuCategory'

function GenreDetail() {
  const subCategoryId = useSelector(state => state.subCategory.id)
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const productsBySelect = products
  const [productsByPrice, setProductsByPrice] = useState(products)
  const [providers, setProviders] = useState([])
  const [checked, setChecked] = useState([])
  const [select, setSelect] = useState(1)
  const [minPrice, setMinPrice] = useState(1000)
  const [maxPrice, setMaxPrice] = useState(1000000)
  const [value, setValue] = useState([1000, 1000000])
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleSelect = (event) => {
    setSelect(event.target.value)
    switch (event.target.value) {
      case 1:
        setProducts(sortByMaxId(productsBySelect))
        break
      case 2:
        setProducts(sortByMinPrice(productsBySelect))
        break
      case 3:
        setProducts(sortByMaxPrice(productsBySelect))
        break
      default:
        break
    }
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleSlider = (e, newValue) => {
    setValue(newValue)
    setMinPrice(newValue[0])
    setMaxPrice(newValue[1])
  }
  const handleFileterByPrice = () => {
    setProductsByPrice(products)
    setProducts(sortByMaxIdAndPriceRange(productsByPrice, minPrice, maxPrice))
  }
  const handleCancelFilter = () => {
    productApi.getAllEnabledProducts()
      .then(response => {
        setProducts(sortByMaxId(response.data))
        setMinPrice(1000)
        setMaxPrice(1000000)
        setValue([1000, 1000000])
      })
      .catch(error => {
        console.error(error)
      })
  }
  useEffect(() => {
    categoryApi.getAllEnabledCategories()
      .then(response => {
        setCategories(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  useEffect(() => {
    if (subCategoryId == 0) {
      productApi.getAllEnabledProducts()
        .then(response => {
          setProducts(sortByMaxId(response.data))
          setProductsByPrice(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    } else {
      productApi.getProductsBySubCategoryId(subCategoryId)
        .then(response => {
          setProducts(response.data)
          setProductsByPrice(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }, [subCategoryId])
  // const handleCheck = (id) => {
  //   setChecked(prev => {
  //     const isChecked = checked.includes(id)
  //     if (isChecked) {
  //       return checked.filter(item => item != id)
  //     }
  //     else {
  //       return [...prev, id]
  //     }
  //   })
  // }
  // useEffect(() => {
  //   const productsByProviders = productsBySelect.filter(product => checked.includes(product.provider.id))
  //   setProductsByProvider(productsByProviders)
  // }, [checked])
  return (
    <Container sx={{ mb: 2, borderRadius: 5, bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#363636' : '#E6E6FA') }}>
      <Grid container mt={2} maxWidth='lg' spacing={3}>
        <Grid item xs={12} sm={12} md={2} lg={2} >
          <Breadcrumbs>
            <Link underline="hover" color="inherit" href="/">
              Trang chủ
            </Link>
            <Link underline="hover" color="inherit" href="/genre-detail">
              Sản phẩm
            </Link>
          </Breadcrumbs>
          <Box display={'flex'} alignItems={'center'} gap={1} >
            <DehazeIcon />
            <Typography variant="h6" fontWeight={'bold'}>Danh Mục</Typography>
          </Box>
          {categories?.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
          {/* <FormGroup>
            {providers.map((provider, index) => (<FormControlLabel key={index} control={
              <Checkbox
                checked={checked.includes(provider.id)}
                onChange={() => handleCheck(provider.id)}
              />
            } label={provider?.brand} />))}
          </FormGroup> */}
        </Grid>
        <Grid mt={1} item xs={12} sm={12} md={10} lg={10} >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 2 }}>
              <Typography variant='body1' fontWeight={'bold'} >Sắp xếp</Typography>
              <FormControl size={'small'} sx={{ m: 1, minWidth: 120 }}>
                <Select value={select} onChange={handleSelect} >
                  <MenuItem value={1}>Mới nhất</MenuItem>
                  <MenuItem value={2}>Giá thấp</MenuItem>
                  <MenuItem value={3}>Giá cao</MenuItem>
                </Select>
              </FormControl>
              <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem >
                  <Box sx={{ width: 500, height: 120, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <TextField value={formatCurrency(minPrice)} InputProps={{ readOnly: true }} />
                      ---
                      <TextField value={formatCurrency(maxPrice)} InputProps={{ readOnly: true }} />
                    </Box>
                    <Slider step={1000} value={value} onChange={handleSlider} min={1000} max={1000000} />
                    <Button sx={{ bgcolor: '#1874CD', color: 'white', ':hover': { bgcolor: '#1874CD' } }} fullWidth
                      onClick={handleFileterByPrice}>
                      Xem kết quả
                    </Button>
                  </Box>
                </MenuItem>
              </Menu>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                <Typography variant='body1' fontWeight={'bold'} minWidth={'70px'}>Chọn giá</Typography>
                <TextField onClick={handleClick} sx={{ minWidth: '250px' }} size='small' value={'Từ ' + formatCurrency(minPrice) + ' - ' + formatCurrency(maxPrice)} />
              </Box>
              <Button sx={{ bgcolor: '#1C86EE', color: 'white' }} onClick={handleCancelFilter}>Bỏ lọc</Button>
            </Box>
            <Grid container spacing={1} maxWidth='lg' >
              {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={12} md={4} lg={3} >
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container >
  )
}

export default GenreDetail