import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/actions/userLoginAction";
import Message from "../../UI/Message/Message";
import Spinner from "../../UI/Spinner/Spinner";

const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.userLogin);
  // const redirect = location.search ? location.search.split("=")[1] : "/";
  console.log("loaction: ", location);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
              <h1 className="py-3">Sign in</h1>
              {loading ? <Spinner /> : (
            <Form onSubmit={submitHandler}>
              {error && <Message variant="danger">{error}</Message>}
              <Form.Group controlId="emailController">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="passwordController">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
              )}
            <Row className="py-3">
              <Col>
                New to here ?{" "}
                <Link
                  to= "/register"
                >
                  Register
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginScreen;
