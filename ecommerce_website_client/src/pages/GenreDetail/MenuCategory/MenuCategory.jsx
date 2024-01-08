import { useEffect, useState } from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Box, Typography, ListItemButton, List, Collapse } from '@mui/material'
import subCategoryApi from '../../../apis/subCategory'
import { setSubCategory } from '../../../redux/actions/subCategory'

export default function MenuCategory({ category }) {
  const dispatch = useDispatch()
  const [subCategories, setSubCategories] = useState([])
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  const handleClickItem = (subCategory) => {
    dispatch(setSubCategory(subCategory))
  }

  useEffect(() => {
    subCategoryApi.getSubCategoriesByCateId(category?.id)
      .then(response => {
        setSubCategories(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  return (
    <Box mt={2}>
      <ListItemButton onClick={handleClick} sx={{ p: 0, justifyContent: 'space-between' }} >
        <Typography variant='body1' sx={{ fontWeight: 'bold', minWidth: '120px' }}>{category?.name}</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subCategories?.map((subCategory) => (
            <ListItemButton sx={{ pl: 4 }} key={subCategory.id} onClick={() => handleClickItem(subCategory)}>
              {subCategory.name}
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </Box>
  )
}