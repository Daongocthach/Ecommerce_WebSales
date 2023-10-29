import { LineChart } from '@mui/x-charts/LineChart'
import { Box, Typography } from '@mui/material'
export default function BasicLineChart() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 430 }}>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5, 2, 2, 2, 2, 2, 2]
          }
        ]}
        width={500}
        height={300}
      />
      <Typography variant='h6' fontWeight={'bold'} color={(theme) => theme.palette.mode=== 'dark'?'orange':'green'}>Biểu đồ số lượt mua hàng trong tháng</Typography>
    </Box>
  )
}