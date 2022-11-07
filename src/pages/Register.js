import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const initialUser = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const [user, setUser] = useState(initialUser);
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">Register</h2>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            value={user.firstName}
            name="firstName"
            className="form-control"
            placeholder="First name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            value={user.lastName}
            name="lastName"
            className="form-control"
            placeholder="Last name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            value={user.email}
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            value={user.password}
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
          <Button>
            Sign Up
          </Button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/login">Sign in</a>
        </p>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  margin-top: 1.5rem;
  max-width: 750px;
  margin: 1.5rem auto;

`;

const Button = styled.button`
  background:#F2831A ;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #F2831A;
  border-radius: 10px;
  position: right:200px; top:400px;
`;


export default Register;
