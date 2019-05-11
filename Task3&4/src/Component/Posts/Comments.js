import React ,{Component}from 'react';

import axios from 'axios';

import { Container} from 'react-bootstrap';

class Comment extends Component{
    constructor(props){
        super(props)
        this.state={
            postId:props.match.params.id,
            postComments:[]
        }
    }
    componentDidMount()
    {
    axios.get('https://jsonplaceholder.typicode.com/comments?postId='+this.state.postId).then((res)=>
    {
        this.setState({postComments:res.data})
        console.log(res.data)
      }).catch((err) =>
      {
        console.log(err)
      }).then(()=>
      {
    })
    }


render(){
  return (
    
      <Container>
    
      {
        this.state.postComments.map(comment=>{
         return (


            <div className="comment" key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            
            
            </div>
            )})
        }
      
        </Container>
      
    
  )
}
}

export default Comment;