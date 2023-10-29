import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, TableFooter, TablePagination, FormControl, Select, MenuItem } from '@mui/material'
import { People } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import AddUser from './FormUser/AddUser'
import ChangeStatusUser from './FormUser/ChangeStatusUser'
import Search from '../../../components/Search/Search'

function createData(id, fullName, username, email, phone, address, avatar, status) {
  return { id, fullName, username, email, phone, address, avatar, status }
}
const users = [
  createData(1, 'Frozen yoghurt', '12345', 1, 3, 4, 'https://th.bing.com/th/id/OIP.2HgWxlt6o5NKSicmnfV6rwHaHa?pid=ImgDet&rs=1'),
  createData(2, 'Ice cream sandwich', 237, 3, 1, 2, 'https://th.bing.com/th/id/OIP.2HgWxlt6o5NKSicmnfV6rwHaHa?pid=ImgDet&rs=1'),
  createData(3, 'Eclair', 262, 3, 3, 1, 'https://th.bing.com/th/id/OIP.2HgWxlt6o5NKSicmnfV6rwHaHa?pid=ImgDet&rs=1'),
  createData(4, 'Cupcake', 305, 3, 3, 1, 'https://th.bing.com/th/id/OIP.2HgWxlt6o5NKSicmnfV6rwHaHa?pid=ImgDet&rs=1'),
  createData(5, 'Gingerbread', 356, 3, 3, 1, 'https://th.bing.com/th/id/OIP.2HgWxlt6o5NKSicmnfV6rwHaHa?pid=ImgDet&rs=1')
]

function Users() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(6)
  const handleChangePage = (e, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const [select, setSelect] = useState(1)
  const handleChange = () => {

  }
  return (
    <Box sx={{ m: 5 }}>
      <Typography variant='h7' >Trang chủ / Quản lý tài khoản khách hàng</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <AddUser/>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 2 }}>
          <Search />
          <Typography variant='body1' fontWeight={'bold'} >Sắp xếp</Typography>
          <FormControl size={'small'} sx={{ m: 1, minWidth: 120 }}>
            <Select value={select} onChange={handleChange} defaultValue={1} >
              <MenuItem value={1}>Mới nhất</MenuItem>
              <MenuItem value={2}>Cũ nhất</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ height: 'fit-content', bgcolor: 'white', boxShadow: '0px 0px 10px' }}>
        <TableContainer >
          <Table>
            <TableHead>
              <TableRow >
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Fullname</TableCell>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {users?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{user?.id}</TableCell>
                    <TableCell align="center">{user?.fullName}</TableCell>
                    <TableCell align="center">{user?.username}</TableCell>
                    <TableCell align="center">{user?.email}</TableCell>
                    <TableCell align="center">{user?.phone}</TableCell>
                    <TableCell align="center">{user?.address}</TableCell>
                    <TableCell align="center"><img src={user?.avatar} alt='avatar' width={'50px'} height={'50px'}/></TableCell>
                    <TableCell align="center"><ChangeStatusUser user={user} /></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={12}
                  rowsPerPageOptions={[6, 10]}
                  count={users?.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default Users