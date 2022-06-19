import Box from '@mui/material/Box';
import hero from '../public/imagenes/hero.jpg'


const Hero = () => (
  
    <>
      
     <Box
      sx={{
        width: "100%",
        height: "94vh",
        backgroundImage: `url(${hero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"

      }}
    />
    </>
)

export default Hero

