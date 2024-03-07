import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './RegFormComp.css'


import { useState } from "react";
import { useNavigate } from "react-router-dom"


function RegFormComp() {


  const [customer, setCustomer] = useState({});
  let navigate = useNavigate();
  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setCustomer(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    let demo = JSON.stringify(customer);
    console.log(JSON.parse(demo));
    fetch("https://localhost:7003/api/Customer", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: demo
    }).then(response => {
      if (response.ok) { alert("Customer registered successfully!");}  
      else { alert("Customer registration failed."); }     
    })
  //   .catch(error => {
  //     // Handle any network or other errors here
  //     console.error("An error occurred while registering the customer:", error);
  // });
    event.preventDefault();
    navigate('/login');
   // alert("!!!  You have Succefully Registred !!!");
}


  return (
    <div className='Form' >
      <Form onSubmit={handleSubmit}  >

      <h2 style={{ textAlign: 'center', color: 'red' }}>Registration Form</h2>

        <Row className="mb-3">
          <Col>
            <Form.Label class="green-label">First Name</Form.Label>
            <Form.Control type="text" name= "customerName" placeholder="First name" onChange={handleChange} required />
          </Col>

          {/* <Col>
            <Form.Label class="green-label">Last Name</Form.Label>
            <Form.Control type="text" name= "lastName" placeholder="Last name" onChange={handleChange} required />
          </Col> */}
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label class="green-label">Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} required />
          </Form.Group>


        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGridage"  >
              <Form.Label class="green-label">Age</Form.Label>
              <Form.Control placeholder="Enter age" type='number' name="age" onChange={handleChange} required max="99" min="18" />
            </Form.Group>
          </Col>


          <Col>
            <Form.Group className="mb-3" controlId="formGridgender">
              <Form.Label class="green-label">Gender</Form.Label>
              <Form.Control as="select" placeholder="Select Gender" name="gender" onClick={handleChange} required>
                <option value="" >Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
              </Form.Control>
            </Form.Group>
          </Col>

          </Row>

          <Row>

          <Col>
            <Form.Group className="mb-3" controlId="formGridCode">
              <Form.Label class="green-label">Country Code</Form.Label>
              <Form.Control
                type="number"
                name="countryCode"
                pattern="[0-9]*"
                placeholder="Enter Code"
                onChange={handleChange}
                required
                max="999"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid numeric country code with up to 3 digits.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formGridmobile">
              <Form.Label class="green-label">Contact Number</Form.Label>
              <Form.Control
                type="tel"
                name = "mobileNumber"
                pattern="[0-9]{10}"
                placeholder="Enter Number"
                onChange={handleChange}
                required />
              <Form.Control.Feedback type="invalid">
                Please enter a 10-digit numeric contact number.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGridmobile">
              <Form.Label class="green-label">Aadhaar Number</Form.Label>
              <Form.Control
                type="tel"
                name = "aadharNumber"
                pattern="[0-9]{12}"
                placeholder="Enter Adhar Number"
                onChange={handleChange}
                required />
              <Form.Control.Feedback type="invalid">
                Please enter a 12-digit Adhar Number.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label class="green-label">Address</Form.Label>
              <Form.Control type="text" name="address" placeholder="Enter Address" onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label class="green-label">Create Username</Form.Label>
            <Form.Control type="text" name= "username" placeholder="Enter Username" onChange={handleChange} required />
          </Col>

          <Col>
            <Form.Label class="green-label">Create Password</Form.Label>
            <Form.Control type="text" name= "password" placeholder="Enter Password" onChange={handleChange} required />
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RegFormComp;