// import React from "react";
import { Stack, TextField } from "@mui/material";
import '../styles/MuiTextField.css'

export const MuiTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Input' variant='outlined'/>
                <TextField label='Input' variant='filled'/>
                <TextField label='Input' variant='standard'/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Small secondary' size='small' color='secondary'/>
                <TextField
                    label='Disabled prompt'
                    size='small'
                    disabled
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Form input' required />
                <TextField
                    label='Password'
                    helperText='Do not share you password with anyone!'
                    type='password'
                />
            </Stack>
        </Stack>
    )
}