import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Home from './Home';
function AddDoctor() {
 
  const registerdoctor= (event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const address=event.target.address.value;
    const doctorid=event.target.doctorid.value;
    const specification=event.target.specification.value;
    const contact=event.target.contact.value;
    const location=event.target.location.value; 
    const password=event.target.password.value;
  }

  
  return (
    <div className='container'>
      <Home/>
   
    <div className='container'>
    <Form >
    <Form.Group className="mb-6" controlId="name">
      <Form.Label>Name</Form.Label>
      <Form.Control name="name"  size="sm"  type="text" placeholder="Enter Name" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="Address">
      <Form.Label>account address </Form.Label>
      <Form.Control name="address" size="sm" type="text" placeholder="Enter account address" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="doctorid">
      <Form.Label>Enter Doctor Id</Form.Label>
      <Form.Control name="doctorid" size="sm" type="number" placeholder="Enter id" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="specification">
      <Form.Label>specification</Form.Label>
      <Form.Control name="specification" size="sm" type="text" placeholder="specification" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="contact">
      <Form.Label>contact</Form.Label>
      <Form.Control name="contact" size="sm" type="number" placeholder="Enter contact" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="location">
      <Form.Label>Location</Form.Label>
      <Form.Control name="location" size="sm" type="text" placeholder="Enter location" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="BasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name="password" size="sm" type="password" placeholder="Password" />
    </Form.Group>
   
    <Button  onClick={registerdoctor}variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
  </div>
  );
}

export default AddDoctor;