import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableFooter, TablePagination, TableContainer, FormControl, Select, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Category } from '@mui/icons-material'
import AddCategory from './FormCategory/AddCategory'
import UpdateCategory from './FormCategory/UpdateCategory'
import DeleteCategory from './FormCategory/DeleteCategory'
import Search from '../../../components/Search/Search'

function createData(id, name) {
  return { id, name }
}
const categories = [
  createData(1, 'Frozen yoghurt'),
  createData(2, 'Ice cream sandwich'),
  createData(3, 'Eclair'),
  createData(4, 'Cupcake'),
  createData(5, 'Gingerbread')
]

function Categories() {
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
      <Typography variant='h7' >Trang chủ / Quản lý loại sản phẩm</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <AddCategory/>
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
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {categories?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((category, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{category?.id}</TableCell>
                    <TableCell align="center">{category?.name}</TableCell>
                    <TableCell align="center"><UpdateCategory category={category} /></TableCell>
                    <TableCell align="center"><DeleteCategory categoryId={category.id} /></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={6}
                  rowsPerPageOptions={[6, 10]}
                  count={categories?.length}
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

export default Categories