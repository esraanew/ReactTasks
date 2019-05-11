import React ,{Component} from 'react';
import {context} from './App';
// import DeletedTask from './deleteTask';
// import CompletedTask from './completeTasks';
class ToDoList extends  Component {
    checkboxChange =(completetodo,id)=> (e) => {
        completetodo(id);
    }
    deleteChange = (deletetodo,id)=>(e) => {
        deletetodo(id);
    }
    
    render() {
        return(
        <context.Consumer>
            {
                value => (

                    <>
                        {

                            value.state.data.filter(t => (!t.completed && !t.deleted)).map(t =>{  
                                        
                                return (
                                
                                <tbody key={t.id}>
                                <tr className="text-center">
                                <td><span className="name">{t.text}</span></td><td><span className="btn btn-danger  mt-1" onClick={this.deleteChange(value.deletetodo,t.id)} >delete</span> <span className="btn btn-success mt-1"  onClick={this.checkboxChange(value.completetodo,t.id)}>Done</span></td>
                                </tr>
                                </tbody>
                               
                                )
                        } )
            }
            </>
                )
        }
            
            </context.Consumer>
        )
    }
}

export default ToDoList;
