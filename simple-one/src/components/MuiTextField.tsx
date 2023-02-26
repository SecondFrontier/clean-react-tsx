// import React from "react";
import { Stack, TextField } from "@mui/material";
import '../styles/MuiTextField.css'

export const MuiTextField = () => {
    return (
        <Stack spacing={2}>
            <Stack direction='row' spacing={2}>
                <TextField label='Input' variant='filled' size='small'/>
                <TextField label='Input' variant='standard' size='small'/>
                <TextField label='Input' variant='outlined' size='small'/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Small secondary' size='small' color='secondary'/>
                <TextField
                    label='Disabled prompt'
                    size='small'
                    disabled
                />
                <TextField
                    type='password'
                    size='small'
                    placeholder='some password'
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
                <TextField
                    label='Read only'
                    placeholder='readonly value'
                    InputProps={{ readOnly: true }}
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Info - by default'
                    placeholder='color= info'
                    size='small'
                    color='info'
                />
                <TextField
                    label='Primary - like Info'
                    placeholder='color= primary'
                    size='small'
                    color='primary'
                />
                <TextField
                    label='Secondary - magenta'
                    placeholder='color= secondary'
                    size='small'
                    color='secondary'
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Success - green!'
                    placeholder='color= success'
                    size='small'
                    color='success'
                />
                <TextField
                    label='Warning - warm!'
                    placeholder='color= warning'
                    size='small'
                    color='warning'
                />
                <TextField
                    label='Error - red!'
                    placeholder='color= error'
                    size='small'
                    color='error'
                />
            </Stack>
        </Stack>
    )
}