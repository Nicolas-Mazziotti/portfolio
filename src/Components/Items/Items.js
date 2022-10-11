import React from 'react'
import { CardsItem, CardMedia, LinkButton } from '../Styles/Items.styles'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,CardActions, Button } from '@mui/material';


const Items = ({cards}) => {
  return (
  //   <CardsItem>
  //     <Card sx={{ maxWidth: 500, backgroundColor: "#262126", margin:"auto"}}>
  //       <CardActionArea>
  //         <CardMedia>
  //           <a target="_blank" rel="noreferrer" href={cards.link} alt="Link project Page"><img className='img-fluid' src={cards.img} alt ="/"/></a>
  //           </CardMedia>
  //         <CardContent sx={{ cursor: "default"}}>
  //           <Typography variant="body2" color="#f9f5f5" >
  //             {cards.description}
  //           </Typography>
  //         </CardContent>
  //       </CardActionArea>
  //       <CardActions>
  //       <Button size="small" color="primary">
  //         <LinkButton target="_blank" rel="noreferrer" href={cards.link} alt="Link project page">Page</LinkButton>
  //       </Button>
  //       <Button size="small" color="primary">
  //       <LinkButton target="_blank" rel="noreferrer" href={cards.repository} alt="Link project page">Repository</LinkButton>
  //       </Button>
  //     </CardActions>
  //   </Card>
  // </CardsItem>
      <CardsItem className="card m-5" >
      <img src={cards.img} className="card-img-top img-fluid" alt="..."/>
        <div className="card-body text-white">
          <p className="card-text">{cards.description}</p>
          <a href={cards.link} className="btn btn-dark me-2">Page</a>
          <a href={cards.repository} className="btn btn-dark">Repository</a>
        </div>
    </CardsItem>

  )
}

export default Items



