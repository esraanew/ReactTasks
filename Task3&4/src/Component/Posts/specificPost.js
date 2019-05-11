import React, {Component} from 'react';

import axios from 'axios';

class SpecificPost extends Component{
    debugger;
constructor(props){
    super(props)
    this.state={
        postId:props.match.params.id,
        PostDetails:''
    }
}

    componentDidMount()
    {  

    axios.get('https://jsonplaceholder.typicode.com/posts/'+this.state.postId).then((res)=>
    {
        this.setState({PostDetails:res.data})
    
      }).catch((err) =>
      {
        console.log(err)
      }).then(()=>
      {
    })
}
render(){
    console.log(this.state.postId);
    return <div  className="postdetails">
    <h3 className="mb-3">PostTitle</h3>
    <h4>{this.state.PostDetails.title}</h4>
    <h3 className="mb-3 mt-4">Postbody</h3>
    <p className="mb-5">{this.state.PostDetails.body}</p>
    <hr></hr>
    <div className="mt-5">
    <span className="mb-3 mr-5 mt-5">PostNumber = {this.state.PostDetails.id}</span>
    <span className="mb-3 ml-5 mt-5">UserNumber = {this.state.PostDetails.userId}</span>
    </div>


    
    </div>

}    
}
export default SpecificPost;