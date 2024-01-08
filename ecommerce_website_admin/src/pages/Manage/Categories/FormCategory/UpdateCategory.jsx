import { useState } from 'react'
import {
  Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box,
  Typography, FormControl, Select, MenuItem, Alert, Snackbar
} from '@mui/material'
import { Create } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import categoryApi from '../../../../apis/categoryApi'
import { updateCategory } from '../../../../redux/actions/categories'

function UpdateCategory({ setUpdate, category }) {
  const dispatch = useDispatch()
  const [name, setName] = useState()
  const [enabled, setEnabled] = useState()
  const [open, setOpen] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [showAlertFail, setShowAlertFail] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
    setName(category?.name)
    setEnabled(category?.enabled)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleUpdate = () => {
    categoryApi.updateCategory(category?.id, name, enabled)
      .then((response) => {
        setShowAlert(true)
        setUpdate(response.data.id)
        dispatch(updateCategory(response.data))
      })
      .catch(error => {
        console.log(error)
        setShowAlertFail(true)
      })
    handleClose()
  }
  return (
    <div>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showAlert} autoHideDuration={1000} onClose={() => setShowAlert(false)}>
        <Alert severity="success" variant='filled' onClose={() => setShowAlert(false)}>
          Cập nhật danh mục thành công!
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showAlertFail} autoHideDuration={1000} onClose={() => setShowAlertFail(false)}>
        <Alert severity="error" variant='filled' onClose={() => setShowAlertFail(false)}>
          Cập nhật danh mục thất bại!
        </Alert>
      </Snackbar>
      <Button sx={{ bgcolor: 'orange', color: 'black' }} variant="outlined" onClick={handleClickOpen}><Create /></Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Category</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '350px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Name: </Typography>
              <TextField fullWidth size='small' value={name} onChange={(e) => setName(e.target.value)} />
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