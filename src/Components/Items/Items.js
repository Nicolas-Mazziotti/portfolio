import React from 'react'
import { CardsItem, CardMedia, LinkButton } from '../Styles/Items.styles'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,CardActions, Button } from '@mui/material';


const Items = ({cards}) => {
  return (
    <CardsItem>
      <Card sx={{ maxWidth: 500, backgroundColor: "#262126" }}>
        <CardActionArea>
          <CardMedia>
            <img src={cards.img} alt ="/"/>
            </CardMedia>
          <CardContent>
            <Typography variant="body2" color="#f9f5f5">
              {cards.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          <LinkButton target="_blank" rel="noreferrer" href={cards.link} alt="Link project page">Page</LinkButton>
        </Button>
        <Button size="small" color="primary">
        <LinkButton target="_blank" rel="noreferrer" href={cards.repository} alt="Link project page">Repository</LinkButton>
        </Button>
      </CardActions>
    </Card>
  </CardsItem>

  )
}

export default Items



