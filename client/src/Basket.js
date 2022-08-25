import React, { useState } from "react";
import { Button, Container, Offcanvas } from "react-bootstrap";
import Checkout from "./Checkout";
import { BsCart } from "react-icons/bs";
import { BsCartX } from "react-icons/bs";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.17;
  const shippingPrice = itemsPrice >= 200 ? 0 : 30;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <Container>
      <div>
        <h1>
          Cart Items <BsCart />
        </h1>
        <div>
          {cartItems.length === 0 && (
            <div>
              <hr></hr>

              <h5>
                Cart is Empty <BsCartX />
              </h5>
            </div>
          )}
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <hr></hr>
            <div className="col-4">{item.title}</div>
            <div className="col-4">
              {item.onSale ? (
                <>
                  {item.qty} x {item.salePrice.toFixed(2)}$
                </>
              ) : (
                <>
                  {" "}
                  {item.qty} x {item.price.toFixed(2)}${" "}
                </>
              )}
            </div>
            <div className="col-4">
              <Button
                variant="outline-info"
                onClick={() => onAdd(item)}
                className="add"
              >
                +
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => onRemove(item)}
                className="remove"
              >
                -
              </Button>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr className="blueLine"></hr>
            <div className="row">
              <div className="col-5">Items Price</div>
              <div className="col-1 text-right">{itemsPrice.toFixed(2)}$</div>
            </div>
            <div className="row">
              <div className="col-5">Tax Price</div>
              <div className="col-1 text-right">{taxPrice.toFixed(2)}$</div>
            </div>
            <div className="row">
              <div className="col-5">Shipping Price</div>
              <div className="col-1 text-right">
                {shippingPrice.toFixed(2)}$
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)}$</strong>
              </div>
            </div>
            <hr className="greenLine"></hr>
            <div className="row">
              <Checkout></Checkout>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
export default Basket;
