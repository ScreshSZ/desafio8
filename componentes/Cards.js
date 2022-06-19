import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const Cards = () => (
    <div>
        <Grid container spacing={2} sx={{  /*spacing es para el gap en las cards*/
            margin: "3rem auto",           /*Esto es para centrarlo*/
            width: "98%",
            
        }}>
            <Grid item xs={12} sm={12} md={4}>
                <Card sx={{
                    gap: "5px"
                }} >
                    <CardMedia
                        component="img"
                        height="200"
                        width="100%"
                        image="../imagenes/card1.jpg"       /*LAS IMAGENES PONERLAS EN LA CARPETA PUBLIC PARA QUE LAS TOME AL IGUAL QUE EN LAS CARDS*/
                        alt="green iguana"
                        
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Rugby
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        El rugby​​ es un deporte de evasión y contacto -con excepción de la modalidad de rugby sin contacto-, en equipo, nacido en Inglaterra. Fue en ese país donde tomó su nombre a partir de las reglas del fútbol elaboradas en el colegio de la ciudad de Rugby en el siglo XIX. Para completar.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Compartir</Button>
                        <Button size="small">Leer mas</Button>
                    </CardActions>
                </Card>

            </Grid>

            <Grid item xs={12} sm={12} md={4}>
                <Card >
                    <CardMedia
                        component="img"
                        height="200"
                        width="100%"
                        image="../imagenes/card2.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Golf
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        El golf es un deporte cuyo objetivo es introducir una bola en los hoyos que están distribuidos en el campo con el menor número de golpes, utilizando para cada tipo de golpe uno de entre un conjunto de palos ligeramente diferentes entre sí, ya que la cabeza del palo tiene ángulos distintos, al igual que las varillas tienen longitudes diferentes.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Compartir</Button>
                        <Button size="small">Leer Mas</Button>
                    </CardActions>
                </Card>

            </Grid>

            <Grid item xs={12} sm={12} md={4}>
                <Card >
                    <CardMedia
                        component="img"
                        height="200"
                        image="../imagenes/card3.jpg"
                        alt="green iguana"
                        width="100%"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Futbol
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        El futbol es un deporte de equipo jugado entre dos conjuntos de once jugadores cada uno mientras que algunos árbitros que se ocupan de que las normas se cumplan correctamente. Es ampliamente considerado el deporte más popular del mundo, pues lo practican unas 270 millones de personas.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Compartir</Button>
                        <Button size="small">Leer Mas</Button>
                    </CardActions>
                </Card>

            </Grid>


        </Grid>

    </div>
)

export default Cards