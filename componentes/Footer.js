import React from "react";
import {Box, Typography } from '@mui/material';


const Footer = () => (
    <div>
      <Box sx={{
        width:"100%",
        height:"200px",
        backgroundColor:"#aaa" 

      }}>

        <Typography variant="h4" sx={{
          textAlign: "center",
          fontSize: "30px"
      }}>
          Pagina Realizada por Zeniquel Santiago
        </Typography>

        <Typography sx={{margin:"10px 0", fontSize: "20px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">Linkedin</a>
        </Typography>
        

        



      </Box>

      
    </div>
)

export default Footer