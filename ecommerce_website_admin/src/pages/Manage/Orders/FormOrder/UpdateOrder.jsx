import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stepper, Step, StepLabel, Box } from '@mui/material'
import { Create } from '@mui/icons-material'
import orderApi from '../../../../apis/orderApi'

const steps = [
  'PENDING',
  'CONFIRMED',
  'ON_DELIVERY',
  'CANCEL',
  'SUCCESS'
]
function UpdateOrder({ order }) {
  var status
  if (order?.orderStatus == 'PENDING') {
    status = 0
  }
  if (order?.orderStatus == 'CONFIRMED') {
    status = 1
  }
  if (order?.orderStatus == 'ON_DELIVERY') {
    status = 2
  }
  if (order?.orderStatus == 'CANCEL') {
    status = 3
  }
  if (order?.orderStatus == 'SUCCESS') {
    status = 4
  }
  const [activeStep, setActiveStep] = useState(status || 0)
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpen1 = () => {
    setOpen1(true)
  }
  const handleClose1 = () => {
    setOpen1(false)
    setOpen(false)
  }
  const handleSuccess = () => {
    orderApi.updateOrderStatus(order?.id, activeStep)
      .then(() => {
        alert('Update Success')
      })
      .catch(error => {
        console.log(error)
        alert('Update Fail')
      })
    handleClose1()
  }
  const handleUpdate = () => {
    if (activeStep == 4) {
      handleClickOpen1()
    }
    else {
      orderApi.updateOrderStatus(order?.id, activeStep)
        .then(() => {
          alert('Update Success')
        })
        .catch(error => {
          console.log(error)
          alert('Update Fail')
        })
    }
    handleClose()
  }
  const handleNext = () => {
    if (activeStep == 4) {
      return
    }
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    if (activeStep == 0)
      return
    setActiveStep(activeStep - 1)
  }
  return (
    <div>
      <Button sx={{ bgcolor: 'orange', color: 'black' }} variant="outlined" onClick={handleClickOpen}><Create /></Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Order</DialogTitle>
        <DialogContent>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open1} onClose={handleClose1} >
        <DialogTitle >Are you sure to complete this order?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose1}>Cancel</Button>
          <Button onClick={handleSuccess}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default UpdateOrder