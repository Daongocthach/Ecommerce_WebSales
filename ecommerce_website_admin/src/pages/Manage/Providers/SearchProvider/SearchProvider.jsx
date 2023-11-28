import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, TextField, Autocomplete, Stack } from '@mui/material'
import { useState, useEffect } from 'react'
import providerApi from '../../../../apis/providerApi'

function SearchProvider({ setProviders }) {
    const [datas, setDatas] = useState([])
    const colorChangeByTheme = (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black')
    const handleDatasSelect = (event, value) => {
        if (value !== null) {
            providerApi.getProviderById(value.id)
                .then(response => {
                    setProviders([response.data])
                })
                .catch(err => { console.log(err) })
        }
        else { setProviders(datas) }

    }
    useEffect(() => {
        providerApi.getAllProviders()
            .then(response => {
                setDatas(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                freeSolo
                options={datas}
                getOptionLabel={(data) => (data && data.name) || ''}
                onChange={handleDatasSelect}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search..."
                        type="text"
                        size='small'
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }} />
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            minWidth: '120px',
                            maxWidth: '300px',
                            '& label': { color: colorChangeByTheme },
                            '& input': { color: colorChangeByTheme },
                            '& label.Mui-focused': { fontWeight: 'bold' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: colorChangeByTheme },
                                '&:hover fieldset': { borderColor: colorChangeByTheme },
                                '&.Mui-focused fieldset': { borderColor: colorChangeByTheme }
                            }
                        }} />)} />
        </Stack>
    )
}

export default SearchProvider