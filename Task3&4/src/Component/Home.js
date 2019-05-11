import React,{Component}  from 'react';

import axios from 'axios';

import {Container,Row,Col} from 'react-bootstrap';

import UserCard from './Users/userCard';


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
    })
    }
      render(){
        return (
        <>
        <Container>
        <Row>
        {this.state.Users.slice(0,9).map(user => {
             return (<Col className="mt-5" key={user.id} > <UserCard  id={user.id} user={user} /></Col>)
        })}
        </Row>
        </Container>
        </>
          )
        }
}

export default AllPosts;