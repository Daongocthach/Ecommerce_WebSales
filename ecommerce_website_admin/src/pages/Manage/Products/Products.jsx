import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableFooter, TablePagination, TableContainer, FormControl, Select, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Filter9Plus } from '@mui/icons-material'
import AddProduct from './FormProduct/AddProduct'
import UpdateProduct from './FormProduct/UpdateProduct'
import DeleteProduct from './FormProduct/DeleteProduct'
import Search from '../../../components/Search/Search'

function createData(id, name, description, price, image, category_id, provider_id) {
  return { id, name, description, price, image, category_id, provider_id }
}
const products = [
  createData(1, 'Frozen yoghurt', 3, 4, 'https://th.bing.com/th/id/OIP.2HgWxlt6o5NKSicmnfV6rwHaHa?pid=ImgDet&rs=1', 6, 7),
  createData(2, 'Ice cream sandwich', 3, 4, 'https://th.bing.com/th/id/OIP.2HgWxlt6o5NKSicmnfV6rwHaHa?pid=ImgDet&rs=1', 6, 7),
  createData(3, 'Eclair', 3, 4, 'https://th.bing.com/th/id/OIP.2HgWxlt6o5NKSicmnfV6rwHaHa?pid=ImgDet&rs=1', 6, 7),
  createData(4, 'Cupcake', 3, 4, 'https://th.bing.com/th/id/OIP.2HgWxlt6o5NKSicmnfV6rwHaHa?pid=ImgDet&rs=1', 6, 7),
  createData(5, 'Gingerbread', 3, 4, 'https://th.bing.com/th/id/OIP.2HgWxlt6o5NKSicmnfV6rwHaHa?pid=ImgDet&rs=1', 6, 7)
]

function Products() {
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
      <Typography variant='h7' >Trang chủ / Quản lý sản phẩm</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <AddProduct />
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
      <Box sx={{ height: 'fit-content', bgcolor: 'white', boxShadow: '0px 0px 10px  ' }}>
        <TableContainer >
          <Table>
            <TableHead>
              <TableRow >
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Id</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Description</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Category</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Provider</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Image</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Update</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{product?.id}</TableCell>
                    <TableCell align="center">{product?.name}</TableCell>
                    <TableCell align="center">{product?.description}</TableCell>
                    <TableCell align="center">{product?.price}</TableCell>
                    <TableCell align="center">{product?.category_id}</TableCell>
                    <TableCell align="center">{product?.provider_id}</TableCell>
                    <TableCell align="center">{<img src={product?.image} alt='avatar' width={'50px'} height={'50px'} />}</TableCell>
                    <TableCell align="center"><UpdateProduct product={product} /></TableCell>
                    <TableCell align="center"><DeleteProduct productId={product?.id} /></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={12}
                  rowsPerPageOptions={[6, 10]}
                  count={products?.length}
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

export default Products