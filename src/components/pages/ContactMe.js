import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactMe() {
  return (
    <div className="container">
    <div class="text-color">
<h1 className="text-center py-4 px-4"> Send me a message!</h1>
    <Form className= "px-4 py-4">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control type="Message" placeholder="Message" />
      </Form.Group>
      <Button variant="btn btn-dark btn-outline-light btn-lg" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default ContactMe;