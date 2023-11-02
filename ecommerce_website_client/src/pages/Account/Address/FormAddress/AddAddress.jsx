import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography, MenuItem, Switch } from '@mui/material'
import { Business, Home } from '@mui/icons-material'


function AddAddress() {
    const cities = ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng']
    const districts = ['Quận 1', 'Quận 2', 'Quận 3']
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')

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
            <Button size={'small'} sx={{ bgcolor: '#CD3333', color: 'white', borderRadius: 10, fontWeight: 'bold', ':hover': { bgcolor: 'red' } }} onClick={handleClickOpen}>Thêm địa chỉ mới</Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle >Thêm địa chỉ mới</DialogTitle>
                <DialogContent >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '500px' }}>
                        <Typography minWidth={'100px'} fontWeight={'bold'}>Thông tin người nhận</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <TextField fullWidth size='small' label="Nhập họ và tên" onChange={(e) => setName(e.target.value)} />
                            <TextField fullWidth size='small' label="Nhập số điện thoại" onChange={(e) => setName(e.target.value)} />
                        </Box>
                        <Typography minWidth={'100px'} fontWeight={'bold'}>Địa chỉ nhận hàng</Typography>
                        <TextField fullWidth select size='small' label="Tỉnh/Thành phố" value={city} onChange={(e) => setCity(e.target.value)}>
                            {cities.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <TextField fullWidth select size='small' label="Quận/Huyện" value={district} onChange={(e) => setDistrict(e.target.value)}>
                                {districts.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField fullWidth select size='small' label="Phường/Xã" value={district} onChange={(e) => setDistrict(e.target.value)}>
                                {districts.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                        <TextField fullWidth inputMode='text' size='small' label="Đường/Tòa nhà"></TextField>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between' }}>
                            <Typography variant='h7' fontWeight={'bold'}>Loại địa chỉ</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Button size='small' startIcon={<Home />} sx={{ color: 'inherit', ':focus': { bgcolor: '#FCDAD5' } }}>Nhà</Button>
                                <Button size='small' startIcon={<Business />} sx={{ color: 'inherit', ':focus': { bgcolor: '#FCDAD5' } }}>Văn phòng</Button>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between' }}>
                            <Typography variant='h7' fontWeight={'bold'}>Đặt làm địa chỉ mặc định</Typography>
                            <Switch />
                        </Box>
                    </Box>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClickAdd}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default AddAddress