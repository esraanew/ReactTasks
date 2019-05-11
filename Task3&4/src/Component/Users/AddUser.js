import React ,{Component} from 'react';
import SimpleSchema from 'simpl-schema';
import{Form,Col,Row,Button, Container} from 'react-bootstrap';
import axios from 'axios';
export default class AddPost extends Component {
    state = {
        name: '',
        username: '',
        email: '',
        errors: '',
    }
    handelChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }
    handelSubmit = (e) => {
        e.preventDefault();
        const { name, username, email } = this.state;
        const Validationcontext = new SimpleSchema(
            {
                name: {
                    type: String,
                    max: 40,
                    min: 1,
                },
                username: {
                    type: String,
                    max: 40,
                    min: 1,

                },
                email: {
                  type:String,
                  max: 100,
                  min:1,  
                  regEx: SimpleSchema.RegEx.Email, 

                },
            }
        ).newContext();
        Validationcontext.validate({ name, username, email});
        if (Validationcontext.isValid()) {
            axios.post('https://jsonplaceholder.typicode.com/users', { name, username, email})
                .then((response) => {
                    console.log(response);
                    this.setState({ errors: 'No Error' })
                  
                    }
                
                )
                .catch((error) => {
                    console.log(error);
                });
                this.props.history.push('/users')  ;  
        }
        else {
          
          let errors= Validationcontext._validationErrors.reduce((result,current)=>{
                return (current.name+" error     "+result);
            }," ");
            console.log(Validationcontext._validationErrors.name)
            this.setState({ errors: errors })
        }
    }
 
    render() {
        return (
            <Container className="mt-5">

                <Form  onSubmit={this.handelSubmit}>

                <Form.Group as={Row} controlId="formHorizontalTitle">
                  <Form.Label column sm={2}>
                   Name
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Control name="name" onChange={this.handelChange} value={this.state.name} type="text" placeholder="name" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalBidy">
                  <Form.Label column sm={2}>
                    UserName
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Control name="username" onChange={this.handelChange} value={this.state.username }type="text" placeholder="username" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalBidy">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={5}>
                  <Form.Control name="email" onChange={this.handelChange} value={this.state.email }type="text" placeholder="email" />
                </Col>
              </Form.Group>

                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Add</Button>
                  </Col>
                </Form.Group>
              </Form>

                <div>
                    {
                        <h1>{this.state.errors}</h1>
                    }
                </div>
            </Container>
        )
    }
}