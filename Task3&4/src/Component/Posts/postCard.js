import React from 'react';

import {Card} from 'react-bootstrap';

import {Link} from 'react-router-dom';
const PostCared =(props)=>{
    return(
     <Card  id={props.id} style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>{props.post.title}</Card.Title>
    <Card.Text>
    {props.post.body}
    </Card.Text>
    <Link className="Link" to={"post/"+props.id+"/comments/"}>Comments</Link>
    <Link className="Link" to={"post/"+props.id+"/details"}>Details</Link>
  </Card.Body>
</Card>
    )
}
export default PostCared;