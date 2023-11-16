import { useState, useEffect } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography, FormControl, Select, MenuItem } from '@mui/material'
import { Create } from '@mui/icons-material'
import subCategoryApi from '../../../../apis/subCategoryApi'
import providerApi from '../../../../apis/providerApi'
import productApi from '../../../../apis/productApi'

function UpdateProduct({ setUpdate, product }) {
  const [subCategories, setSubCategories] = useState([])
  const [providers, setProviders] = useState([])
  const [name, setName] = useState(product?.name)
  const [price, setPrice] = useState(product?.price)
  const [description, setDescription] = useState(product?.description)
  const [discount, setDiscount] = useState(product?.discount)
  const [subCategory, setSubCategory] = useState(product?.subCategory?.id || 1)
  const [provider, setProvider] = useState(product?.provider?.id || 1)
  const [image, setImage] = useState(product?.image)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleChangeSubCategory = (event) => {
    setSubCategory(event.target.value)
  }
  const handleChangeProvider = (event) => {
    setProvider(event.target.value)
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  useEffect(() => {
    subCategoryApi.getAllSubCategories()
      .then(response => {
        setSubCategories(response.data)
      })
      .catch(error => {
        console.error(error)
      })
    providerApi.getAllProviders()
      .then(response => {
        setProviders(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  const handleUpdate = () => {
    productApi.updateProduct(product?.id, name, price, description, discount, subCategory, provider, image)
      .then(() => {
        alert('Update Success')
        setUpdate(3)
      })
      .catch(error => {
        console.log(error)
        alert('Update Fail')
      })
    handleClose()
  }
  return (
    <div>
      <Button sx={{ bgcolor: 'orange', color: 'black' }} variant="outlined" onClick={handleClickOpen}><Create /></Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '350px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Name: </Typography>
              <TextField fullWidth size='small' value={name} onChange={(e) => setName(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Description: </Typography>
              <TextField fullWidth size='small' value={description} onChange={(e) => setDescription(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Price: </Typography>
              <TextField fullWidth size='small' value={price} onChange={(e) => setPrice(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Discount: </Typography>
              <TextField fullWidth size='small' value={discount} onChange={(e) => setDiscount(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>SubCategory: </Typography>
              <FormControl size={'small'} fullWidth>
                <Select value={subCategory} onChange={handleChangeSubCategory} >
                  {Array.isArray(subCategories) && subCategories?.map((subCategory, index) => {
                    return (
                      <MenuItem key={index} value={subCategory?.id}>{subCategory?.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Provider: </Typography>
              <FormControl size={'small'} fullWidth>
                <Select value={provider} onChange={handleChangeProvider} >
                  {Array.isArray(providers) && providers?.map((provider, index) => {
                    return (
                      <MenuItem key={index} value={provider?.id}>{provider?.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Image: </Typography>
              <TextField fullWidth size='small' type={'file'} onChange={handleImageChange} />
            </Box>
            {image && <img src={image} style={{ height: '50px', width: '50px' }} />}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default UpdateProduct