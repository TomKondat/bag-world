import React from "react";
import Header from "./Header";
import Main from "./Main";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <React.Fragment>
      <div className="Background1">
        <Router>
          <Header
            countCartItems={cartItems.length}
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}
          ></Header>

          <Container
            style={{
              width: "auto",
              maxWidth: "1200px",
              padding: "100px 30px",
            }}
          >
            <Routes>
              <Route exact path="/" element={<Main onAdd={onAdd} />} />
              <Route path="/Home" element={<Main onAdd={onAdd} />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/FAQ" element={<FAQ />} />
            </Routes>
          </Container>

          <Footer></Footer>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
