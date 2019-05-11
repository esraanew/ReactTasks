import React ,{Component}from 'react';

import axios from 'axios';

import {Container,Row,Col} from 'react-bootstrap';

import PostCared from '../Posts/postCard';
class UserPosts extends Component{
    constructor(props){
        super(props)
        this.state={
            userId:props.match.params.id,
            UserPosts:[]
        }
    }
    componentDidMount()
    {
    axios.get('https://jsonplaceholder.typicode.com/posts?userId='+this.state.userId).then((res)=>
    {
        this.setState({UserPosts:res.data})
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
    
    <Container>
    <Row>
    {this.state.UserPosts.map(post => {
         return (<Col className="mt-5" key={post.id} ><PostCared id={post.id} post={post}/></Col>)
    })}
    </Row>
    </Container>
      
    
  )
}
}

export default UserPosts;