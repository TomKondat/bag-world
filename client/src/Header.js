import {
  Navbar,
  Container,
  Button,
  Offcanvas,
  Nav,
  Badge,
} from "react-bootstrap";
import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Basket from "./Basket";

function Header(props) {
  const { countCartItems, onAdd, onRemove, cartItems } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <div>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand as={Link} to={"/home"}>
              <img
                alt=""
                src="https://img.icons8.com/ios-filled/344/bag-front-view.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {""}
              Bag World
            </Navbar.Brand>

            {
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "60px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/About"}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={"/Contact"}>
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to={"/FAQ"}>
                  FAQ
                </Nav.Link>
              </Nav>
            }
            <Button variant="outline-dark" onClick={handleShow}>
              Shopping cart{" "}
              {countCartItems ? (
                <Badge bg="secondary">{countCartItems}</Badge>
              ) : (
                ""
              )}
            </Button>

            <Offcanvas placement="end" show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart: </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Basket
                  onAdd={onAdd}
                  onRemove={onRemove}
                  cartItems={cartItems}
                ></Basket>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
      </div>
    </React.Fragment>
  );
}

export default Header;
