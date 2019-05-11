import React from 'react';
 import {Card} from 'react-bootstrap';

const Movie=({movie})=>{

    return (
        
        <Card  style={{ width: '18rem' ,height:'400px'}}>
        <Card.Img style={{ height: '12rem' }} variant="top" src={movie.Poster === "N/A"?"https://iprx.ten.com.au/ImageHandler.ashx?f=jpg&u=https%3A%2F%2Fimages.tenplay.com.au%2F%7E%2Fmedia%2FTV%2520Shows%2FMovies%2520Hub%2FMovies_Logo_500x281.jpg":movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card content.
          </Card.Text>
          <span style={{backgroundColor:'lightgreen',padding:'5px',borderRadius:'5px'}}>{movie.Watched===true?"Watched":'notWatched' }</span>
        </Card.Body>
      </Card>     
        
    )
}
export default Movie;
