import { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography, FormControl, Select, MenuItem } from '@mui/material'
import { Create } from '@mui/icons-material'
import providerApi from '../../../../apis/providerApi'

function UpdateProvider({ provider, setUpdate }) {
  const [name, setName] = useState(provider?.name)
  const [brand, setBrand] = useState(provider?.brand)
  const [phoneNo, setPhoneNo] = useState(provider?.phoneNo)
  const [address, setAddress] = useState(provider?.address)
  const [enabled, setEnabled] = useState(provider?.enabled)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleUpdate = () => {
    providerApi.updateProvider(provider?.id, name, brand, phoneNo, address, enabled)
      .then(() => {
        alert('Update Success')
        setUpdate(3)
      })
      .catch(() => alert('Update Fail'))
    handleClose()
  }
  return (
    <div>
      <Button sx={{ bgcolor: 'orange', color: 'black' }} variant="outlined" onClick={handleClickOpen}><Create /></Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Provider</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '350px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Name: </Typography>
              <TextField fullWidth size='small' value={name} onChange={(e) => setName(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Brand: </Typography>
              <TextField fullWidth size='small' value={brand} onChange={(e) => setBrand(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Phone: </Typography>
              <TextField fullWidth size='small' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Address: </Typography>
              <TextField fullWidth size='small' value={address} onChange={(e) => setAddress(e.target.value)} />
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
export default UpdateProvider