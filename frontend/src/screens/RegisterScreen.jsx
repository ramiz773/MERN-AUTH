import React from "react";
import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
const RegisterScreen = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const submitHandler = async (e) => {
      e.preventDefault();
      console.log("submited");
   };
   return (
      <FormContainer>
         <h1>Sign Up</h1>
         <Form onSubmit={submitHandler}>
            <Form.Group className="my-2" controlId="name">
               <Form.Label>Name</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  required
                  onChange={(e) => {
                     setName(e.target.value);
                  }}
               ></Form.Control>
            </Form.Group>
            <Form.Group className="my-2" controlId="email">
               <Form.Label>Email Address</Form.Label>
               <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  required
                  onChange={(e) => {
                     setEmail(e.target.value);
                  }}
               ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="password">
               <Form.Label>Password</Form.Label>
               <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  required
                  onChange={(e) => {
                     setPassword(e.target.value);
                  }}
               ></Form.Control>
            </Form.Group>
            <Form.Group className="my-2" controlId="confirmPassword">
               <Form.Label>Confirm Password</Form.Label>
               <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  required
                  onChange={(e) => {
                     setConfirmPassword(e.target.value);
                  }}
               ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3">
               Sign Up
            </Button>

            <Row>
               <Col>
                  Already have an account? <Link to={"/login"}>Sing In</Link>
               </Col>
            </Row>
         </Form>
      </FormContainer>
   );
};

export default RegisterScreen;
