import React ,{Component}from 'react';

import {Form,FormControl} from 'react-bootstrap';
class Search extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            inputValue:'',

        }
    }
    FilterValue(e)
    { 
        this.setState({inputValue:e.target.value});
        this.props.data(e.target.value);
    } 
    
    render(){
        return (

            <Form inline >
      <FormControl type="text" onChange={this.FilterValue.bind(this)} placeholder="Search For Movie" className="m-4" />
    </Form>
        )
    }
} 
export default Search;