import React, {Component} from 'react';

import axios from 'axios';

import{Container} from 'react-bootstrap';
class SpecificPost extends Component{
constructor(props){
    super(props)
    this.state={
        userId:props.match.params.id,
        UserDetails:[],
    }
}

    componentDidMount()
    {  

    axios.get('https://jsonplaceholder.typicode.com/users/'+this.state.userId).then((res)=>
    {
        this.setState({UserDetails:res.data})  
      }).catch((err) =>
      {
        console.log(err)
      }).then(()=>
      {
    })
}

 CompanyName=()=>{
    if(this.state.UserDetails.company)
    {
        return <>{this.state.UserDetails.company.name}</>
    }
  
}
GetAddress=()=>{
if(this.state.UserDetails.address)
{
    return <>{this.state.UserDetails.address.street}</>
}
}


render(){

    // console.log(this.state.UserDetails.Component["name"])
    return <Container>
    <div  className="userdetails">
    <h3 className="mb-3 ml-5 mt-4">UserNumber = <span>{this.state.userId}</span></h3>
    <h3 className="mb-3 ml-5 ">UserName = <span>{this.state.UserDetails.username}</span></h3>
     <h3 className="mb-3 ml-5">UserSite = <span>{this.state.UserDetails.website}</span></h3>    
    <h3 className="mb-3 ml-5 ">Name = <span>{this.state.UserDetails.name}</span></h3>
    <h3 className="mb-3 ml-5">Email = <span>{this.state.UserDetails.email}</span></h3>
    <h3 className="mb-3 ml-5">UserAddress = <span>{this.GetAddress()}</span></h3>    
    <h3 className="mb-3 ml-5">CompanyName = <span>{this.CompanyName()}</span></h3>    
    <h3 className="mb-3 ml-5">UserPhone = <span>{this.state.UserDetails.phone}</span></h3>
   
    </div>

    </Container>
}    
}
export default SpecificPost;