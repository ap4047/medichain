import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Home from './Home';
function AddPatient() {
 
  const registerpatient=(event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const patientid=event.target.patientid.value;
    const age=event.target.age.value;
    const gender=event.target.gender.value;
    const height=event.target.height.value;
    const weight=event.target.weight.value;
    const location=event.target.location.value;
    const contact=event.target.contact.value;
    const email=event.target.email.value;
    const password=event.target.password.value;


  }

  
  return (
    <div className='container'>
    <Home/>
    <div className='Patient'>
    <Form onSubmit={registerpatient}>
    <Form.Group className="mb-6" controlId="name">
      <Form.Label>Name</Form.Label>
      <Form.Control name="name"  size="sm" type="text" placeholder="Enter Name" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="patientid">
      <Form.Label>Enter Patient Id</Form.Label>
      <Form.Control name="patientid" size="sm" type="number" placeholder="Enter id" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="age">
      <Form.Label>Enter Age</Form.Label>
      <Form.Control name="age" size="sm" type="number" placeholder="Enter age" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="gender">
      <Form.Label>Enter gender</Form.Label>
      <Form.Control name="gender" size="sm" type="text" placeholder="Enter gender" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="height">
      <Form.Label>"Enter height"</Form.Label>
      <Form.Control name="height" size="sm" type="number" placeholder="Enter height" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="weight">
      <Form.Label>Enter weight</Form.Label>
      <Form.Control name="weight" size="sm" type="number" placeholder="Enter weight" />
    </Form.Group>
   
  
  
    <Form.Group className="mb-6" controlId="location">
      <Form.Label>Location</Form.Label>
      <Form.Control name="location" size="sm" type="text" placeholder="Enter location" />
    </Form.Group> 
    <Form.Group className="mb-6" controlId="contact">
      <Form.Label>contact</Form.Label>
      <Form.Control name="contact" size="sm" type="number" placeholder="Enter contact" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="Email">
      <Form.Label>contact</Form.Label>
      <Form.Control name="email" size="sm" type="email" placeholder="Enter Email" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="Password">
      <Form.Label>Password</Form.Label>
      <Form.Control name="password" size="sm" type="password" placeholder="Password" />
    </Form.Group>
   
    <Button onClick={registerpatient} variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
  </div>
  );
}

export default AddPatient;