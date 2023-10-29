import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography } from '@mui/material'
import AddCircle from '@mui/icons-material/AddCircle'
import { mockData } from '../../../../apis/mockdata'

function AddPromotion() {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [discount, setDiscount] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleClickAdd = () => {

        handleClose()
    }
    return (
        <div>
            <Button sx={{ fontWeight: 'bold' }} startIcon={<AddCircle />} variant="outlined" onClick={handleClickOpen}>
                New Promotion
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle >Add New Promotion</DialogTitle>
                <DialogContent >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '350px' }}>
                        <Box sx={{ display: 'flex', alignItems:'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>Name: </Typography>
                            <TextField fullWidth size='small' onChange={(e) => setName(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems:'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>Description: </Typography>
                            <TextField fullWidth size='small' onChange={(e) => setDescription(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems:'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>Discount: </Typography>
                            <TextField fullWidth size='small' onChange={(e) => setDiscount(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems:'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>DayStart: </Typography>
                            <TextField fullWidth size='small' type='date' onChange={(e) => setStart(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems:'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>DayEnd: </Typography>
                            <TextField fullWidth size='small' type='date' onChange={(e) => setEnd(e.target.value)} />
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { handleClickAdd() }}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default AddPromotion