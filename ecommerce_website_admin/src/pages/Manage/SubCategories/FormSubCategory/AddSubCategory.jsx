import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography, FormControl, Select, MenuItem } from '@mui/material'
import AddCircle from '@mui/icons-material/AddCircle'
import subCategoryApi from '../../../../apis/subCategoryApi'
import categoryApi from '../../../../apis/categoryApi'

function AddSubCategory({ setUpdate }) {
    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [category, setCategory] = useState(categories[0]?.id || 1)
    const handleChange = (event) => {
        setCategory(event.target.value)
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
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    const handleClickAdd = () => {
        subCategoryApi.addSubCategory(name, category)
            .then(() => {
                alert('Add Success')
                setUpdate(1)
            })
            .catch(error => {
                console.log(error)
                alert('Add Fail')
            })
        handleClose()
    }
    return (
        <div>
            <Button sx={{ fontWeight: 'bold' }} startIcon={<AddCircle />} variant="outlined" onClick={handleClickOpen}>
                New SubCategory
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle >Add New SubCategory</DialogTitle>
                <DialogContent >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '350px', mt: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>Name: </Typography>
                            <TextField fullWidth size='small' label="Name" onChange={(e) => setName(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography minWidth={'100px'}>Category: </Typography>
                            <FormControl size={'small'} fullWidth>
                                <Select value={category} onChange={handleChange} >
                                    {Array.isArray(categories) && categories?.map((category, index) => {
                                        return (
                                            <MenuItem key={index} value={category?.id}>{category?.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
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
export default AddSubCategory