import { useState, useEffect } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography } from '@mui/material'
import { Create } from '@mui/icons-material'
import { format, parse } from 'date-fns'
import promotionApi from '../../../../apis/promotionApi'

function UpdatePromotion({ setUpdate, promotion }) {
  const [startDate, setStartDate] = useState(format(new Date(promotion?.startDate), 'yyyy-MM-dd'))
  const [endDate, setEndDate] = useState(format(new Date(promotion?.endDate), 'yyyy-MM-dd'))
  const [code, setCode] = useState(promotion?.code)
  const [value, setValue] = useState(promotion?.value)
  const [quantity, setQuantity] = useState(promotion?.quantity)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleUpdate = () => {
    promotionApi.updatePromotion(promotion?.id, startDate, endDate, code, value, quantity)
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
        <DialogTitle>Update Promotion</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '350px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Code: </Typography>
              <TextField fullWidth size='small' value={code} onChange={(e) => setCode(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Value: </Typography>
              <TextField fullWidth size='small' value={value} onChange={(e) => setValue(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>Quantity: </Typography>
              <TextField fullWidth size='small' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>StartDate: </Typography>
              <TextField fullWidth size='small' type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography minWidth={'100px'}>EndDate: </Typography>
              <TextField fullWidth size='small' type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleUpdate()}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default UpdatePromotion