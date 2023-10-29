import { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, Box, Typography } from '@mui/material'
import AddCircle from '@mui/icons-material/AddCircle'


function AddUser() {
    const [open, setOpen] = useState(false)
    const [fullname, setFullName] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [status, setStatus] = useState('active')
    const [avatar, setAvatar] = useState('')

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleClickAdd = () => {
        handleClose()
    }
    const handleAvatarChange = (e) => {
        const file = e.target.files[0]
        if (file) {
          const reader = new FileReader()
          reader.onload = () => {
            setAvatar(reader.result)
          };
          reader.readAsDataURL(file)
        }
      }
    return (
        <div>
            <Button startIcon={<AddCircle />} variant="outlined" onClick={handleClickOpen}>
                New User
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle >Add New User</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '350px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>FullName: </Typography>
                            <TextField fullWidth size='small' onChange={(e) => setFullName(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>UserName: </Typography>
                            <TextField fullWidth size='small' onChange={(e) => setUserName(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>Email: </Typography>
                            <TextField fullWidth size='small' onChange={(e) => setEmail(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>Password: </Typography>
                            <TextField fullWidth size='small' onChange={(e) => setPassword(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>Phone: </Typography>
                            <TextField fullWidth size='small' onChange={(e) => setPhone(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>Adress: </Typography>
                            <TextField fullWidth size='small' onChange={(e) => setAddress(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>Avatar: </Typography>
                            <TextField fullWidth size='small' type={'file'} onChange={handleAvatarChange} />
                        </Box>
                        { avatar && <img src={avatar} style={{ height: '50px', width: '50px' }}/>}
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
export default AddUser