import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Boton = () => (
  <div>
    <Box sx={{ width: "80%", margin: "1rem auto" }}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </Box>
  </div>
)

export default Boton