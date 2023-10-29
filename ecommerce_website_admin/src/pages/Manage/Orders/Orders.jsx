import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableFooter, TablePagination, TableContainer, FormControl, Select, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Reorder } from '@mui/icons-material'
import UpdateOrder from './FormOrder/UpdateOrder'
import ViewOrder from './FormOrder/ViewOrder'
import Search from '../../../components/Search/Search'

function createData(id, date, total, notes, user_id, status) {
  return { id, date, total, notes, user_id, status }
}
const orders = [
  createData(1, 'Frozen yoghurt', 3, 4, 6, 7),
  createData(2, 'Ice cream sandwich', 3, 4, 6, 7),
  createData(3, 'Eclair', 3, 4, 6, 7),
  createData(4, 'Cupcake', 3, 4, 6, 7),
  createData(5, 'Gingerbread', 3, 4, 6, 7)
]

function Orders() {
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
      <Typography variant='h7' >Trang chủ / Quản lý đơn hàng</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Reorder/>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 2 }}>
          <Search />
          <Typography variant='body1' fontWeight={'bold'} >Sắp xếp</Typography>
          <FormControl size={'small'} sx={{ m: 1, minWidth: 120 }}>
            <Select value={select} onChange={handleChange} defaultValue={10} >
              <MenuItem value={1}>Mới nhất</MenuItem>
              <MenuItem value={2}>Cũ nhất</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ height: 'fit-content', width: '100%', bgcolor: 'white', boxShadow: '0px 0px 10px' }}>
        <TableContainer component={Paper}>
          <Table aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Id</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Date</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Total</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Notes</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">UserId</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Update</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{order?.id}</TableCell>
                    <TableCell align="center">{order?.date}</TableCell>
                    <TableCell align="center">{order?.total}</TableCell>
                    <TableCell align="center">{order?.notes}</TableCell>
                    <TableCell align="center">{order?.user_id}</TableCell>
                    <TableCell align="center">{order?.status}</TableCell>
                    <TableCell align="center"><UpdateOrder order={order} /></TableCell>
                    <TableCell align="center"><ViewOrder order={order} /></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={12}
                  rowsPerPageOptions={[6, 10]}
                  count={orders?.length}
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

export default Orders