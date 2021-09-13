import React, { useEffect } from 'react';
import { useState } from 'react';
import {CssBaseline,Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography} from '@material-ui/core';

import useStyles from './HomeStyle';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    const classes = useStyles();
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res=> res.json())
        .then(data=> setLeagues(data.leagues))
    },[])
    return (
        <>
        <CssBaseline />
        
        <div className={classes.container}>
          <Container className={classes.cardGrid} maxWidth = "md">
            <Grid container spacing={4}>
                {
                    leagues.map((league)=>(
                        <Grid item key={league.idLeague} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image = "https://source.unsplash.com/random"
                            title = "Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5">
                                {league.strLeague}
                            </Typography>
                            <Typography>
                                SportsType: Football
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary">Explore</Button>                            
                        </CardActions>
                        </Card>
        
                      </Grid>
                    ))
                }

             
            </Grid>
          </Container>

        </div>

        
      
      </>
    );
};

export default Home;