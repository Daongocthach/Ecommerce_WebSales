import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableFooter, TablePagination, TableContainer, FormControl, Select, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MoneyOff } from '@mui/icons-material'
import AddPromotion from './FormPromotion/AddPromotion'
import UpdatePromotion from './FormPromotion/UpdatePromotion'
import DeletePromotion from './FormPromotion/DeletePromotion'
import Search from '../../../components/Search/Search'

function createData(id, name, description, start, end, productid) {
  return { id, name, description, start, end, productid }
}
const promotions = [
  createData(1, 'Frozen yoghurt', '12345', 6.0, 24, 4.0),
  createData(2, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(3, 'Eclair', 262, 16.0, 24, 6.0),
  createData(4, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(5, 'Gingerbread', 356, 16.0, 49, 3.9)
]

function Promotions() {
  const categories = ''
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
      <Typography variant='h7' >Trang chủ / Quản lý khuyến mãi</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <AddPromotion/>
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
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Id</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Description</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Start</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">End</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Update</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {promotions?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((promotion, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{promotion?.id}</TableCell>
                    <TableCell align="center">{promotion?.name}</TableCell>
                    <TableCell align="center">{promotion?.description}</TableCell>
                    <TableCell align="center">{promotion?.start}</TableCell>
                    <TableCell align="center">{promotion?.end}</TableCell>
                    <TableCell align="center"><UpdatePromotion promotion={promotion} /></TableCell>
                    <TableCell align="center"><DeletePromotion promotion={promotion} /></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow >
                <TablePagination
                  colSpan={12}
                  rowsPerPageOptions={[6, 10]}
                  count={promotions?.length}
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

export default Promotions