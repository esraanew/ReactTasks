import React ,{Component} from 'react';
import SimpleSchema from 'simpl-schema';
import{Form,Col,Row,Button, Container} from 'react-bootstrap';
import axios from 'axios';
export default class AddPost extends Component {
    state = {
        title: '',
        body: '',
        userId: '',
        errors: '',
    }
    handelChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }
    handelSubmit = (e) => {
        e.preventDefault();
        const { title, body, userId } = this.state;
        const Validationcontext = new SimpleSchema(
            {
                title: {
                    type: String,
                    max: 40,
                    min: 1,
                },
                body: {
                    type: String,
                    max: 40,
                    min: 1,

                },
                userId: {
                    type: SimpleSchema.Integer,
                    optional: true,

                },
            }
        ).newContext();
        Validationcontext.validate({ title, body, userId: +userId });
        if (Validationcontext.isValid()) {
            axios.post('https://jsonplaceholder.typicode.com/posts', { title, body, userId: +userId })
                .then((response) => {
                    console.log(response);
                    this.setState({ errors: 'No Error' })
                  
                    }
                
                )
                .catch((error) => {
                    console.log(error);
                });
                this.props.history.push('/posts')  ;  
        }
        else {
          
          let errors= Validationcontext._validationErrors.reduce((result,current)=>{
                return (current.name+" error     "+result);
            }," ");
            console.log(Validationcontext._validationErrors.name)
            this.setState({ errors: errors })
        }
    }
    // componentDidMount() {
    //     return <Redirect to="/posts" />
    // }
    render() {
        return (
            <Container className="mt-5">

                <Form  onSubmit={this.handelSubmit}>

                <Form.Group as={Row} controlId="formHorizontalTitle">
                  <Form.Label column sm={2}>
                    TiTle
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Control name="title" onChange={this.handelChange} value={this.state.title} type="text" placeholder="Title" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalBidy">
                  <Form.Label column sm={2}>
                    body
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Control name="body" onChange={this.handelChange} value={this.state.body }type="text" placeholder="body" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalBidy">
                <Form.Label column sm={2}>
                  userId
                </Form.Label>
                <Col sm={5}>
                  <Form.Control name="userId" onChange={this.handelChange} value={this.state.userId }type="text" placeholder="userId" />
                </Col>
              </Form.Group>

                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Add</Button>
                  </Col>
                </Form.Group>
              </Form>;

                <div>
                    {
                        <h1>{this.state.errors}</h1>
                    }
                </div>
            </Container>
        )
    }
}