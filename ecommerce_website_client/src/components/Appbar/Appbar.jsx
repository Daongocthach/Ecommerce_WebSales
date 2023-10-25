import { ShoppingCart, HelpOutline, Store } from '@mui/icons-material'
import { Box, Button, Badge, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ModeSelect from './ModeSelect/ModeSelect'
import Account from './Account/Account'
import Search from './Search/Search'
import G2Logo from '../../assets/img/G2Logo.png'

const useStyles = {
  container: {
    position: 'static',
    width: '100%',
    height: (theme) => theme.webCustom.appBarHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: 'none',
    overflow: 'auto',
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1C1C1C' : '#FFFAFA')
  },
  component: {
    display: 'flex', alignItems: 'center', gap: 2, paddingX: 3
  },
  button: {
    color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'),
    border: 'none',
    fontWeight: 'bold',
    '&:hover': { color: 'red' }
  }
}

function AppBar() {
  const navigate = useNavigate()
  return (
    <Box sx={useStyles.container}>
       <Box sx={useStyles.component}>
        {/* <Store color="white" onClick={() => navigate('/')} /> */}
        <img src={G2Logo} style={{ height: '60px', width: '60px', color: 'black' }}/>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Typography variant="h4" fontWeight="bold" color= {(theme) => (theme.palette.mode === 'dark' ? 'white' : '#363636')}> G2Store</Typography>
        </Link>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Link to={'/genre-detail'}><Button sx={useStyles.button}>Sản phẩm</Button></Link>
          <Link to={'/promotion'}><Button sx={useStyles.button}>Khuyến mãi</Button></Link>
        </Box>
      </Box>
      <Box sx={useStyles.component}>
        <Search />
        <ModeSelect />
        <Tooltip title="Cart">
          <Badge color="warning" badgeContent={4} sx={{ cursor: 'pointer' }}>
            <ShoppingCart sx={useStyles.button} onClick={() => navigate('/cart')}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help" sx={{ cursor: 'pointer' }}>
          <HelpOutline sx={useStyles.button} />
        </Tooltip>
        <Account />
      </Box>
    </Box>
  )
}

export default AppBar