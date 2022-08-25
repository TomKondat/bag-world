import React from "react";
import { Card, Button, Row, Container } from "react-bootstrap";

function Bag(props) {
  const { bag, onAdd, onSale, title, price, imgUrl, priceArray } = props;

  return (
    <React.Fragment>
      <Card
        className="mx-3 p-2 gap-0 mt-4 cardrBackground1"
        style={{ width: "16rem" }}
      >
        <Card.Img
          variant="top mt-4 "
          src={imgUrl}
          height="232px"
          width="232px"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>

          {onSale ? (
            <React.Fragment>
              <div className="priceCard">
                <Card.Text className="priceOnSale">{bag.price}$</Card.Text>
                <Card.Text className="mx-2">{bag.salePrice}$</Card.Text>
              </div>
              <Row className="mt-auto">
                <Container>
                  <Button onClick={() => onAdd(bag)}>Add to cart</Button>
                  <img
                    className="float-end mt-auto"
                    src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/512/Sale-icon.png"
                    height="48rem"
                    width="48rem"
                  />
                </Container>
              </Row>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Card.Text>{price}$</Card.Text>
              <Row className="mt-auto">
                <Container>
                  <Button onClick={() => onAdd(bag)}>Add to cart</Button>
                </Container>
              </Row>
            </React.Fragment>
          )}
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
export default Bag;
