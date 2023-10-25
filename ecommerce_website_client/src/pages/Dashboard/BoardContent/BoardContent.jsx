import { Box } from '@mui/material'
import ListRow from './ListRow/ListRow'

function BoardContent() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#363636' : '#F0FFFF'),
      overflowX: 'hidden'
    }}>
      <ListRow />
    </Box>
  )
}

export default BoardContent
