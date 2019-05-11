import React from 'react';

import {Container} from 'react-bootstrap';

import {Link} from 'react-router-dom';
//  import AllPosts from './allPosts';
const Header =(props)=>{
  
    return (
        <Container>
       
        <nav className="mr-auto">
          <Link className="link" to="/" >Home</Link>  
          <Link className="link" to="/posts" >Posts</Link>  
          <Link className="link" to="/users" >Users</Link>        
          </nav>
    
        </Container>
    )
}
export  default Header ;


