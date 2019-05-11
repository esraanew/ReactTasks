import React from 'react';

import {Card} from 'react-bootstrap';

import {Link} from 'react-router-dom';
const PostCared =(props)=>{
    return(
     <Card  id={props.id} style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>{props.user.name}</Card.Title>
    <Card.Text>
    {props.user.email}
    </Card.Text>
    <Link className="Link"  to={"user/"+props.id+"/posts/"}>ViewPosts</Link>
    <Link className="Link" to={"user/"+props.id+"/details"}>UserInfo</Link>
  </Card.Body>
</Card>
    )
}
export default PostCared;



// "id": 1,
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "address": {
//   "street": "Kulas Light",
//   "suite": "Apt. 556",
//   "city": "Gwenborough",
//   "zipcode": "92998-3874",
//   "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"