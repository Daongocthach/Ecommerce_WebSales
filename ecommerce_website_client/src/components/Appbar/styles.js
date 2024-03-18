import { makeStyles } from '@mui/material'

const useStyles = makeStyles((theme) => ({
    container: {
        color: 'blue',
        backgroundColor: 'lightgrey',
        padding: theme.spacing(2), // Sử dụng theme.spacing() để tạo ra khoảng cách giữa các phần tử
    }
}))
