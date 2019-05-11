import React from 'react';
import {context} from './App';
class CompletedTask extends React.Component {
    checkboxChange=(completetodo,id)=>(e)=>
    {
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
                            value.state.data.filter(t => (t.completed === true)).map(t => 
                                
                                <tbody key={t.id}>
                                <tr className="text-center">
                                <td>{t.text}</td>
                                <td><span className="btn btn-primary  mt-1" onClick={this.checkboxChange(value.completetodo,t.id)}>Undo</span> 
                                
                                <span className="btn btn-danger  mt-1" onClick={this.deleteChange(value.deletetodo,t.id)}>delete</span> 
                                </td>
                                </tr>
                                </tbody>

                            )}
                        
                    </>
                )
            }
        </context.Consumer>
        )
    }
}

export default CompletedTask;
