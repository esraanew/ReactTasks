import React from 'react';
import {context} from './App';

class DeletedTask extends React.Component
{
    checkboxChange=(completetodo,id)=>(e)=>
    {

        completetodo(id);
    }
  
render()
{
    return(
        
        <context.Consumer>
        {
            
            value => (

<>
    {value.state.data.filter(t => (t.deleted===true)).map(t =>

  
        <tbody key={t.id}>
        <tr className="text-center">
        <td>{t.text}</td>

        <td><span className="btn btn-primary  mt-1" onClick={this.checkboxChange(value.completetodo,t.id)}>Undo</span> </td>
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

export default DeletedTask;