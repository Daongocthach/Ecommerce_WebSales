import { Box, Typography } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart'

export default function BasicPie() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 400 }}>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'Monday' },
              { id: 1, value: 15, label: 'Tuesday' },
              { id: 2, value: 20, label: 'Wednesday' },
              { id: 3, value: 20, label: 'Thursday' },
              { id: 4, value: 20, label: 'Friday' },
              { id: 5, value: 20, label: 'Saturday' },
              { id: 6, value: 20, label: 'Sunday' }
            ],
          }
        ]}
        width={500}
        height={300}
      
      />
      <Typography variant='h6' fontWeight={'bold'} color={(theme) => theme.palette.mode=== 'dark'?'orange':'green'}>Biểu đồ số lượt mua hàng trong tuần</Typography>
    </Box>
  )
}