import React,{Component}  from 'react';

import axios from 'axios';

import {Container,Row,Col} from 'react-bootstrap';

import PostCared from './postCard';
import {Link} from 'react-router-dom';

class AllPosts extends Component{

    constructor(props){
        super(props)
        this.state={
        posts:[],
        }
      }

    componentDidMount()
    {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>
    {
        this.setState({posts:res.data})
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
        <Link  className="add" to="/post/add">Add New Post</Link>
        <Row>
        {this.state.posts.map(post => {
          
             return (<Col className="mt-5" key={post.id} ><PostCared id={post.id} post={post}/></Col>)
        })}
        </Row>
        </Container>
        </>
          )
        }
}

export default AllPosts;