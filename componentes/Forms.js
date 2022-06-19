import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Forms = () => (
    <div>
          
        <Box 
        component="form" 
        sx={{ width: "80%", margin:"3rem auto",}}
        >
        <TextField id="filled-basic" label="Nombre" variant="filled" sx={{
            width: "100%"
        }} />
        <TextField id="filled-basic" label="Apellido" variant="filled" sx={{
            width: "100%"
        }} />
        <TextField type="email" required id="filled-basic" label="Email" variant="filled" sx={{
            width: "100%"

        }} />
        </Box> 

   


    


    </div>
)

export default Forms