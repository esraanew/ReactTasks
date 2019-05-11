import React ,{Component}from 'react';

import{Button}from 'react-bootstrap';

import Movies from './Components/movieData';
import MoviesList from './Components/movieList';
import Search from './Components/search';
class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            data:Movies,
            newdata:Movies
        }
    }

FindMovie(val)
{
const newdata=this.state.data.filter((item)=>{
return item.Title.toLowerCase().indexOf(val.toLowerCase()) >-1
}
)

this.setState({newdata});
    
}
handelClick()
    {

   const watchedMovies = this.state.data.filter(e=>e.Watched===true);
    this.setState({newdata:watchedMovies});
        
    }
    render(){

        return(
<div>
            <Search data={val => this.FindMovie(val)}/>
      <Button variant="outline-success"onClick={this.handelClick.bind(this)} className="btn-colors">Show Watched Movies</Button>

           <MoviesList moviesArray={this.state.newdata} />
           </div>
        )
    }


}
export default App;