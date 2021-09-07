import React from 'react';

import {CssBaseline,Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography} from '@material-ui/core';
import useStyles from './DetailStyle'



    

const Details = (props) => {
    const classes = useStyles();
    const {idLeague, strLeague, strSport, strLeagueAlternate} = props.league;
    return (

      //shift this component to home and map through leagues to generate card
      <>
        <CssBaseline />
        
        <div className={classes.container}>
          <Container className={classes.cardGrid} maxWidth = "md">
            <Grid container spacing={4}>

              <Grid item key={props.league} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image = "https://source.unsplash.com/random"
                    title = "Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                        {strLeague}
                    </Typography>
                    <Typography>
                        This is a media card. You can use this section to describe the content.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                </CardActions>
                </Card>

              </Grid>
            </Grid>
          </Container>

        </div>

        
      
      </>
    );
};

export default Details;