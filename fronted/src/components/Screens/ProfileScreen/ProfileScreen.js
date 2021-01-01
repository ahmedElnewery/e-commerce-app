import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "./../../../store/actions/userDetailsAction";
import { updateUserProfile } from "./../../../store/actions/userUpdateAction";

import Message from "../../UI/Message/Message";
import Spinner from "../../UI/Spinner/Spinner";

const ProfileScreen = ({ history, location }) => {
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetailsState = useSelector((state) => state.userDetails);
  const { loading, error, userDetails } = userDetailsState;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const userUpdatedState = useSelector((state) => state.userUpdated);
  const { success } = userUpdatedState;

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Password doesn't match");
    } else {
      dispatch(
        updateUserProfile({ _id: userDetails._id, name, email, password })
      );
    }
  };

  useEffect(() => {
    if (!user) {
      history.push("/login");
    } else {
      if (!userDetails.name) {
        dispatch(getUserDetails("/profile"));
      }
      setName(userDetails.name);
      setEmail(userDetails.email);
    }
  }, [dispatch, user, history, userDetails]);

  return (
    <div className="py-5">
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          <Row>
            <Col md={4}>
              <h2 className="py-3">Profile</h2>
              <Form onSubmit={submitHandler}>
                {errorMessage ? (
                  <Message variant="danger">{errorMessage}</Message>
                ) : error ? (
                  <Message variant="danger">{error}</Message>
                ) : success ? <Message variant="success">Profile Updated Successfully</Message>: null}
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
                  Update
                </Button>
                
              </Form>
            </Col>
            <Col md={8}>
              <h2 className="py-3">My Orders</h2>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProfileScreen;
