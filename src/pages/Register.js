import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { MAIN_ROOT } from "../url";
import { useUserContext } from "../context/user_context";
import useLocalState from "../utils/localState";
import axios from "axios";
const Register = () => {
  const USER_URL = `${MAIN_ROOT}/auth/`;
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { saveUser } = useUserContext();
  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);
    const { email, password, name } = values;
    const registerUser = { email, password, name };
    try {
      const { data } = await axios.post(`${USER_URL}/register`, registerUser);
      setValues({ name: "", email: "", password: "" });
      showAlert({
        text: `Please check your email to verify your account`,
        type: "success",
      });
      setLoading(false);
      saveUser(data.user);
      //redirect here when register to page that check
    } catch (error) {
      showAlert({ text: error.response.data.msg });
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">Register</h2>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            value={values.name}
            name="name"
            className="form-control"
            placeholder="First name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            value={values.email}
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
            value={values.password}
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
          <Button>Sign Up</Button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/login">Sign in</a>
        </p>
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
  background: #f2831a;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #f2831a;
  border-radius: 10px;
`;

export default Register;
