import React from 'react';

import {Row,Col, Container} from 'react-bootstrap';

import Movie from './movie';
const MoviesList = ({moviesArray})=>{   
const items=moviesArray.map((movieitem)=>{
       return(<Col className="mb-4" key={movieitem.imdbID}><Movie key={movieitem.imdbID} movie={movieitem}/></Col>)
})

return (
  <Container>
  <Row className="mt-4">
    {items}
    </Row>
  </Container>
)

}
export default MoviesList;