import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableFooter, TablePagination, TableContainer, FormControl, Select, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import { Reorder } from '@mui/icons-material'
import UpdateOrder from './FormOrder/UpdateOrder'
import ViewOrder from './FormOrder/ViewOrder'
import orderApi from '../../../apis/orderApi'
import { sortByMaxId, sortByMinId } from '../../../utils/sort'

function Orders() {
  const [orders, setOrders] = useState([])
  const [update, setUpdate] = useState(0)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(6)
  const [select, setSelect] = useState(1)
  const handleChangePage = (e, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const handleChange = (event) => {
    setSelect(event.target.value)
  }
  useEffect(() => {
    orderApi.getAllOrders()
      .then(response => {
        setOrders(sortByMaxId(response.data))
      })
      .catch(error => {
        console.error(error)
      })
  }, [update])
  useEffect(() => {
    switch (select) {
      case 1:
        setOrders(sortByMaxId(orders))
        break
      case 2:
        setOrders(sortByMinId(orders))
        break
      default:
        break
    }
  }, [select])
  return (
    <Box sx={{ m: 5 }}>
      <Typography variant='h7' >Trang chủ / Quản lý đơn hàng</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Reorder />
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 2 }}>
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
                <TableCell sx={{ fontWeight: 'bold' }} align="center">CreateDate</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Total</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Notes</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">CustomerId</TableCell>
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
                    <TableCell align="center">{Date(order?.createdDate)}</TableCell>
                    <TableCell align="center">{order?.total}</TableCell>
                    <TableCell align="center">{order?.note}</TableCell>
                    <TableCell align="center">{order?.customer.id}</TableCell>
                    <TableCell align="center">{order?.orderStatus}</TableCell>
                    <TableCell align="center"><UpdateOrder setUpdate={setUpdate} order={order} /></TableCell>
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