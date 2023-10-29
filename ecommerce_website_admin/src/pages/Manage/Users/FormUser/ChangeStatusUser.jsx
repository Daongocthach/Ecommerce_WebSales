import { useState } from 'react'
import { Switch } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'


function ChangeStatusUser({ user }) {
    return (
        <div>
             <Switch checked={true}/>
        </div>
    )
}
export default ChangeStatusUser