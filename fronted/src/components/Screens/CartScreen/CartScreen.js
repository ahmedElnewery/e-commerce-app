import React from "react";
import { useEffect } from "react";
import {
  Row,
  Container,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart , removeFromCart} from "../../../store/actions/cartActions";
import Dropdown from "../../UI/Dropdown/Dropdown";
import Message from "../../UI/Message/Message";
const CartScreen = (props) => {
  const id = props.match.params.id;
  const qunatity = props.location.search
    ? props.location.search.split("=")[1]
    : 1;

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qunatity));
    }
  }, [dispatch, id, qunatity]);

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId))

  };
  const checkoutHandler = () => {
    props.history.push("/loggin?redirect=shipping")
  }
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md={8}>
            <h2>SHOPPING CART</h2>
            {cartItems.length === 0 ? (
              <Message>
                No! Cart Item yet <Link to="/">Go Back</Link>
              </Message>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((cartItem) => {
                  return (
                    <ListGroup.Item key={cartItem.id}>
                      <Row>
                        <Col md={3}>
                          <Image
                            src={cartItem.image}
                            alt={cartItem.name}
                            fluid
                          />
                        </Col>
                        <Col md={3}>
                          <Link to={`/product/${cartItem.id}`}>
                            {cartItem.name}
                          </Link>
                        </Col>
                        <Col md={2}>
                          $ {(cartItem.price * cartItem.quantity).toFixed(2)}
                        </Col>
                        <Col md={2}>
                          <Dropdown
                            length={cartItem.countInStock}
                            value={cartItem.quantity}
                            valueHandler={(e) =>
                              dispatch(
                                addToCart(cartItem.id, Number(e.target.value))
                              )
                            }
                          />
                        </Col>
                        <Col md={2}>
                          <Button
                            variant="light"
                            onClick={() => removeFromCartHandler(cartItem.id)}
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <h4>
                    subtotal (
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                    items
                  </h4>
                  <p>
                    Total Price: $
                    {cartItems.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0
                    )}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                  type="button"
                    className="btn-block"
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >Proceed To Checkout</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CartScreen;
