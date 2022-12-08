import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";
const initialUser = {
  email: "",
  password: "",
};
const Login = () => {
  const { login, user: userProfile } = useUserContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
    setUser(initialUser);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const [user, setUser] = useState(initialUser);
  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);
  return (
    <Wrapper>
      <form className="container-lg " onSubmit={handleSubmit}>
        <h3 className="text-center">Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <Button>Submit</Button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
    </Wrapper>
  );
};
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
export default Login;
