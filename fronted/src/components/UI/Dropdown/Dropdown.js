import React from "react";
import { Form } from "react-bootstrap";

const Dropdown = (props) => {
   //two ways to create arr of numbers
  // const InStockArr =[...Array(product.countInStock).keys()]
 
  const InStockArr = Array.from({ length: props.length }, (_, i) => i + 1);

  return (
    <Form.Control
      as="select"
      value={props.value}
      onChange={props.valueHandler}
    >
      {InStockArr.map((x) => (
        <option key={x} value={x}>{x}</option>
      ))}
    </Form.Control>
  );
};

export default Dropdown;
