import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stepper, Step, StepLabel, Box } from '@mui/material'
import { Create, Visibility } from '@mui/icons-material'

const steps = [
  'Đã xác nhận',
  'Đã đóng gói',
  'Đang giao hàng',
  'Đã nhận hàng'
]

function ViewOrder({ order }) {
  const [activeStep, setActiveStep] = useState(0)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleNext = () => {
    if (activeStep == 3)
      return
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    if (activeStep == 0)
      return
    setActiveStep(activeStep - 1)
  }
  return (
    <div>
      <Button sx={{ bgcolor: '#EE6363', color: 'black' }} variant="outlined" onClick={handleClickOpen}><Visibility /></Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>View Order</DialogTitle>
        <DialogContent>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default ViewOrder