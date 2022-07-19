import React from 'react'
import { CardsItem } from '../Styles/Items.styles'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,CardActions, Button } from '@mui/material';

const Items = ({cards}) => {
  return (
    <CardsItem>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={cards.img}
            alt="xi-celulares"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cards.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          Page
        </Button>
        <Button size="small" color="primary">
          Repository
        </Button>
      </CardActions>
    </Card>
  </CardsItem>

  )
}

export default Items



