import React,{Component}  from 'react';

import axios from 'axios';
import {Link} from 'react-router-dom';

import {Container,Row,Col} from 'react-bootstrap';

import UserCard from './userCard';


class AllPosts extends Component{

    constructor(props){
        super(props)
        this.state={
        Users:[],
        }
      }

    componentDidMount()
    {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>
    {
        this.setState({Users:res.data})
      }).catch((err) =>
      {
        console.log(err)
      }).then(()=>
      {
        // console.log(this.state.data)
    })
    }
      render(){
        return (
        <>
        <Container>
        <Link  className="add" to="/user/add">Add New User</Link>

        <Row>
        {this.state.Users.map(user => {
             return (<Col className="mt-5" key={user.id} > <UserCard  id={user.id} user={user} /></Col>)
        })}
        </Row>
        </Container>
        </>
          )
        }
}

export default AllPosts;