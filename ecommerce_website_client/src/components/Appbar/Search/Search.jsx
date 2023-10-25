import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Search() {
    const colorChangeByTheme = (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black')
    const [searchValue, setSearchValue] = useState('')
    return (
        <TextField
            id="outlined-search"
            label="Search..."
            type="text"
            size='small'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }} />
                    </InputAdornment>
                ),
                endAdornment: (
                    <CloseIcon
                        fontSize='small'
                        sx={{ color: searchValue ? (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') : 'transparent', cursor: 'pointer' }}
                        onClick={() => setSearchValue('')}
                    />
                )
            }}
            sx={{
                minWidth: '120px',
                maxWidth: '300px',
                '& label': { color: colorChangeByTheme },
                '& input': { color: colorChangeByTheme },
                '& label.Mui-focused': { fontWeight:'bold' },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: colorChangeByTheme },
                    '&:hover fieldset': { borderColor: colorChangeByTheme },
                    '&.Mui-focused fieldset': { borderColor: colorChangeByTheme }
                }
            }} />
    )
}

export default Search