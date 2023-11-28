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
function UpdateOrder({ setUpdate, order }) {
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

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleUpdate = () => {
    orderApi.updateOrderStatus(order?.id, activeStep)
      .then(() => {
        alert('Update Success')
        setUpdate(3)
      })
      .catch(error => {
        console.log(error)
        alert('Update Fail')
      })
    console.log(activeStep)
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
    </div>
  )
}
export default UpdateOrder