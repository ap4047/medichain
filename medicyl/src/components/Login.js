import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Home from './Home';
function Login() {
 
  const login = (event)=>{
    event.preventDefault();
    const username=event.target.username.value;
    const password=event.target.password.value;
  
    

    
  }
  

  
  return (
    <div className="container">

   <Home/>
    <Form   onSubmit={login}>
   

    <Form.Group className="mb-6" controlId="doctorid">
      <Form.Label>Enter UserName</Form.Label>
      <Form.Control  name="username" size="sm"  type="number" placeholder="Enter username" />
    </Form.Group>
   
    <Form.Group className="mb-6" controlId="tests">
      <Form.Label>password</Form.Label>
      <Form.Control   name="password" size="sm" type="text" placeholder="password" />
    </Form.Group>    
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
  );
}

export default Login;