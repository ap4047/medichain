import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Home from './Home';
function AddRecord() {
 
  const registerrecord = (event)=>{
    event.preventDefault();
    const address=event.target.address.value;
    const doctorid=event.target.doctorid.value;
    const patientid=event.target.patientid.value;
    const recordid=event.target.recordid.value;
    const diagnosis=event.target.diagnosis.value;
    const treatment=event.target.treatment.value;
    const prescription=event.target.prescription.value;
    const tests=event.target.tests.value;
    const date=event.target.date.value;
    

    
  }
  

  
  return (
    <div className="container">

   <Home/>
    <Form   onSubmit={registerrecord}>
   
    <Form.Group className="mb-6" controlId="Address">
      <Form.Label>account address </Form.Label>
      <Form.Control   name="address" size="sm" type="text" placeholder="Enter account address" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="doctorid">
      <Form.Label>Enter Doctor Id</Form.Label>
      <Form.Control  name="doctorid" size="sm"  type="number" placeholder="Enter id" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="doctorid">
      <Form.Label>Enter Patient Id</Form.Label>
      <Form.Control  name="patientid" size="sm"  type="number" placeholder="Enter id" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="doctorid">
      <Form.Label>Enter record Id</Form.Label>
      <Form.Control  name="recordid" size="sm"  type="number" placeholder="Enter id" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="Diagnosis">
      <Form.Label>Diagnosis</Form.Label>
      <Form.Control name="diagnosis" size="sm" type="text" placeholder="Enter Diagnosis" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="treatment">
      <Form.Label>treatment</Form.Label>
      <Form.Control name="treatment" size="sm"  type="text" placeholder="treatment" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="prescription">
      <Form.Label>prescription</Form.Label>
      <Form.Control   name="prescription"size="sm" type="text" placeholder="prescription" />
    </Form.Group>
    <Form.Group className="mb-6" controlId="tests">
      <Form.Label>tests</Form.Label>
      <Form.Control   name="tests" size="sm" type="text" placeholder="tests" />
    </Form.Group>    <Form.Group className="mb-6" controlId="date">
      <Form.Label>date</Form.Label>
      <Form.Control   name="date"size="sm"  type="text" placeholder="date" />
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
  );
}

export default AddRecord;