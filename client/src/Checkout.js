import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaShippingFast } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";

function Checkout() {
  const [show, setShow] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      setShow(false);
      setShowThanks(true);
    }
  };

  const returnHome = () => {
    setShowThanks(false);
    window.location.href = "/";
  };

  return (
    <React.Fragment>
      <Button variant="success" onClick={() => setShow(true)}>
        Checkout
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Shipping and Payment <FaShippingFast />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Password" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCreditCard">
                <Form.Label>Credit Card</Form.Label>
                <Form.Control placeholder="**** **** **** ****" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>CVV</Form.Label>
                <Form.Control placeholder="***" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                required
                label="Im not a robot"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Complete order
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showThanks} onHide={returnHome}>
        <Modal.Header closeButton>
          <Modal.Title className="greenColor">
            Thank you for your order <BsBagCheck />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your order has been accepted and the shipping will arrive to your
          local post office in 8-11 days.
          <br></br>
          <br></br>
          <center>
            <img
              alt="logo"
              src="data:image/png;base64,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"
              width="180px"
              height="120px"
            />
          </center>
          <hr></hr>
          <Button href="/" variant="primary" onClick={returnHome}>
            Return Home
          </Button>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default Checkout;
