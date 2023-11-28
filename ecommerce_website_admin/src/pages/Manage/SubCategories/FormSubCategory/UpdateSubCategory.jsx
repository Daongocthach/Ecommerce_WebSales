import { useState, useEffect } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography, FormControl, Select, MenuItem } from '@mui/material'
import { Create } from '@mui/icons-material'
import subCategoryApi from '../../../../apis/subCategoryApi'
import categoryApi from '../../../../apis/categoryApi'

function UpdateCategory({ setUpdate, subCategory }) {
  const [categories, setCategories] = useState([])
  const [name, setName] = useState(subCategory?.name)
  const [select, setSelect] = useState(subCategory?.category?.id)
  const [enabled, setEnabled] = useState(subCategory?.enabled)
  const [open, setOpen] = useState(false)
  const handleChange = (event) => {
    setSelect(event.target.value)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {
    categoryApi.getAllCategories()
      .then(response => {
        setCategories(response.data)
        setUpdate(0)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  const handleUpdate = () => {
    subCategoryApi.updateSubCategory(subCategory?.id, name, select, enabled)
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
        <DialogTitle>Update SubCategory</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '350px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Name: </Typography>
              <TextField fullWidth size='small' value={name} onChange={(e) => setName(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Category: </Typography>
              <FormControl size={'small'} fullWidth>
                <Select value={select} onChange={handleChange}>
                  {Array.isArray(categories) && categories?.map((category, index) => {
                    return (
                      <MenuItem key={index} value={category?.id}>{category?.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Status: </Typography>
              <FormControl size={'small'} fullWidth>
                <Select value={enabled} onChange={(e) => setEnabled(e.target.value)} >
                  <MenuItem value={true}>Enable</MenuItem>
                  <MenuItem value={false}>Disable</MenuItem>
                </Select>
              </FormControl>
            </Box>
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
export default UpdateCategory