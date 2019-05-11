import React, { Component } from 'react';
// import AddTasks from './ToDo Task/AddTask';
import ToDoList from './todolist';
import ToDoItem from './todoitem';
import {Row,Col,Table, Container} from 'react-bootstrap';
import CompletedTask from './completeTasks';
import './App.css';
import DeletedTask from './deleteTask';
export const context =React.createContext({data:[]});
class App extends Component {
  state={
    data:[],
    deletedtasks:[],
    completedtasks:[],
  }
  addtodo=(todo)=>{
    const {data}=this.state;
    this.setState({data:data.concat(todo)});
  }
  completetodo=(id)=>{
    
    this.state.data.find(t => (t.id === id)).completed = !(this.state.data.find(t => (t.id === id)).completed);
    if ( this.state.data.find(t => (t.id === id)).deleted)
    {
     

      this.state.data.find(t => (t.id === id)).completed=false;
      this.state.data.find(t => (t.id === id)).deleted=false;
    }
    const task=this.state.data.find(t => (t.id === id));
    this.setState({completedtasks:this.state.completedtasks.concat(task)});
  
  }
  deletetodo=(id)=>{
    this.state.data.find(t => (t.id === id)).deleted = true;
    this.state.data.find(t => (t.id === id)).completed = false;
        
    const task=this.state.data.find(t => (t.id === id));
    this.setState({deletedtasks:this.state.deletedtasks.concat(task)});
  }

  render() {
    const value={
      state:this.state,
      addtodo:this.addtodo,
      completetodo:this.completetodo,
      deletetodo:this.deletetodo
    }
    return (
      <Container>
      {/* hab3at ma3 el value de function hab3atha ll parent wl parent hyb3atha ll child y3del feha aw y3del fl data y3ny ba3den el child yb3at el function tany ll parent ba3d el ta3del */}
      <context.Provider value={value}>
        <ToDoItem />
       <Row>
       <Col md="4">
        <Table striped bordered hover className="tablesize" >
        <thead>
          <tr>
            <th className="text-center header">TaskName</th>
            <th className="text-center header">UserAction</th>

          </tr>
        </thead>
      
        <ToDoList/>
        </Table>
        </Col>
        <Col md="4">
        <Table striped bordered hover className="tablesize" >
        <thead>
          <tr>
            <th className="text-center header">DeletedTasks</th>
            <th className="text-center header">Action</th>
          </tr>
        </thead>
        <DeletedTask/>
        </Table>
        </Col>
        <Col md="4">
        <Table striped bordered hover className="tablesize" >
        <thead>
          <tr>
            <th className="text-center header">CompletedTasks</th>
            <th className="text-center header">Action</th>
          </tr>
        </thead>
        <CompletedTask/>
        </Table>
        </Col>
        </Row>
      </context.Provider>
      </Container>
    )
  }
}

export default App;
