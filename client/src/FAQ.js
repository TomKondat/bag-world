import React from "react";
import {
  Container,
  Accordion,
  Form,
  Modal,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function FAQ() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card className="Background1" border="light">
      <Container style={{ maxWidth: "1000px", padding: "20px 30px" }}>
        <Card.Header className="headers">
          <h1>Frequently Asked Questions</h1>
        </Card.Header>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How long it takes for the shipping to arrive?
            </Accordion.Header>
            <Accordion.Body className="faqAnswers">
              Our shippings takes between 8-11 days.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Do you have a store anywhere?</Accordion.Header>
            <Accordion.Body className="faqAnswers">
              No, Bag World is an online shop only.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Does your website works on holidays?
            </Accordion.Header>
            <Accordion.Body className="faqAnswers">
              You could order during a holiday but the shipping will take
              longer.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What should I do if I get a defective product?
            </Accordion.Header>
            <Accordion.Body className="faqAnswers">
              You have one year warranty and you will get a full refund.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              How much does the Shipping cost to Eilat?
            </Accordion.Header>
            <Accordion.Body className="faqAnswers">
              The shipping cost are the same price to all over the countery and
              its 30$, if you order over 200$ you get a free shipping.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br></br>
        <br></br>
        <div>
          <Card.Header className="headers">
            <h1>Ask Us Your Questions Here:</h1>
          </Card.Header>
        </div>
        <br></br>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter your question here:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>

        <Button variant="primary" onClick={handleShow}>
          Send Question
        </Button>
        <br></br>
        <br></br>
        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title className="blueColor">
              {" "}
              Thank you for your question{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <h5>Your question has been sent.</h5>
            <p>We will send the answer to your Email adress.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button as={Link} to="/" variant="primary" onClick={handleClose}>
              Go Home
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Card>
  );
}
export default FAQ;
