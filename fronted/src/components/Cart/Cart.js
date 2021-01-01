import React from "react";
import { Button } from "react-bootstrap";
imn
const ProductInCart = (props) => {
  return (
    <div className="shopping-card">
      <Row>
        <Col>
        <Image src={props.product.Image} rounded />
        </Col>
        <Col>{props.product.name}</Col>
        <Col>{props.product.price}</Col>
        <Col>{props.quntity}</Col>
        <Col>
        <Button variant="danger">delete</Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductInCart;
