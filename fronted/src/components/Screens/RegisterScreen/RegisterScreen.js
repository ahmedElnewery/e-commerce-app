import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./../../../store/actions/userRegisterAction";
import Message from "../../UI/Message/Message";
import Spinner from "../../UI/Spinner/Spinner";

const RegisterScreen = ({ history, location }) => {
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.userRegister);
 const {user : userLogin} = useSelector(state=> state.userLogin)

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      
      setErrorMessage("Password doesn't match");

    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userLogin) {
      history.push("/");
    }
  }, [userLogin, history]);

  return (
    <div className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="py-3">Register</h1>
            {loading ? <Spinner /> : ( 
              <Form onSubmit={submitHandler}>
              {errorMessage ? <Message variant="danger">{errorMessage}</Message>: error ? <Message variant="danger">{error}</Message> : null}
              <Form.Group controlId="nameController">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Full Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Form.Group>

              <Form.Group controlId="emailController">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
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

              <Form.Group controlId="confirmPasswordController">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            )}
            <Row className="py-3">
              <Col>
                Already Registered ?{" "}
                <Link
                  to= "/login"
                >
                  Login
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterScreen;
