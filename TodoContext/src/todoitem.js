import React from 'react';
import uuidv4 from 'uuid/v4';
import {context} from './App';
class AddTask extends React.Component {
    state={
        text:'',
    }
    addItem =(addtodo)=> (e) => {
        e.preventDefault();
        if (this.state.text === '') return;
        let items ={ text: this.state.text, completed: false, deleted: false, id: uuidv4() };
        addtodo(items);
        this.setState({text : ""});
    }
    handelChange=(e)=>{
        this.setState({text:e.target.value})
    }
    render() {


        return (
            <context.Consumer>
                {
                    value => (

                        <>
                        <form  className="add" onSubmit={this.addItem(value.addtodo)}>

                            <input  type="text" onChange={this.handelChange}  value={this.state.text}/>
                            <button type="submit" >Add</button>
                        </form>
                        </>
                    )
                }
            </context.Consumer>

        )
    }
}

export default AddTask;
