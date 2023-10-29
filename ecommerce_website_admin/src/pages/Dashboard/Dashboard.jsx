import { Box, Container, Grid, Typography } from '@mui/material'
import Data from './Statistical/Data'
import LineChart from './Statistical/LineChart'
import PieChart from './Statistical/PieChart'

function Dashboard() {
  return (
    <Container>
      <Grid container alignItems={'center'} spacing={3} >
        < Grid item xs={12} sm={12} md={6} lg={6}>
          <LineChart />
        </Grid>
        < Grid item xs={12} sm={12} md={6} lg={6}>
          <PieChart />
        </Grid>
      </Grid>-

    </Container>
  )
}

export default Dashboard