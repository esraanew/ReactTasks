import React ,{Component} from 'react';

import { BrowserRouter , Route} from "react-router-dom";

import './App.css';

import Home from './Component/Home';
import Header from './Component/header';
import Comments from './Component/Posts/Comments';
import AllPosts from './Component/Posts/allPosts';
import SpecificPost from './Component/Posts/specificPost';
import SpecificUser from './Component/Users/specificUser';
import UserPosts from './Component/Users/userPosts';
import Users from './Component/Users/users';
import AddPost from './Component/Posts/AddPost';
import AddUser from './Component/Users/AddUser';

class App extends Component{

  constructor(props)
  {
    super(props)
    this.state={
        clicked:''  
    }
  }
  render()
  {
    return (
      <>      
    <BrowserRouter>
    <Header/>
    <Route exact path="/" component={Home}/>

    <Route  path="/posts" component={AllPosts}/>
    <Route  path="/post/add" component={AddPost}/>
    <Route  path="/user/add" component={AddUser}/>

    <Route  path={"/post/:id/comments/"} component={Comments}/>
    
    <Route exact path="/post/:id/Details/" component={SpecificPost}/>
    <Route exact path="/users" component={Users}/>
    <Route exact path="/user/:id/Details/" component={SpecificUser}/>
    <Route exact path="/user/:id/posts/" component={UserPosts}/>
    <Route exact path="/user/:id/posts/post/:id/comments/" component={Comments}/>
    <Route exact path="/user/:id/posts/post/:id/details/" component={SpecificPost}/>


    </BrowserRouter>
    </>
    )
  }
}
export default App;