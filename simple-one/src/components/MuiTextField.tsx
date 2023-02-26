// import React from "react";
import { Stack, TextField } from "@mui/material";
import '../styles/MuiTextField.css'

export const MuiTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Input' />
            </Stack>
        </Stack>
    )
}