import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  var logo = require("../assets/logo.png");
  return (
    <Wrapper>
      <nav class="navbar navbar-expand-lg bg-light">
        <div className="container-lg text-center">
          <div className="col-4">
            <Link className="nav-link active" to="/">
              <a
                className="navbar-brand"
                href="#"
                style={{ color: "green", fontWeight: "bold" }}
              >
                <img src={logo} style={{ width: "20%" }} />
                Helper Hacker
              </a>{" "}
            </Link>
          </div>
          <div className="col-6">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <h5>Home</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="group">
                  <h5>Group</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="forum">
                  <h5>Forum</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="flash-cards">
                  <h5>Flash Card</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="meeting">
                  <h5>Meeting</h5>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="login">
                  <h5>Login</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="register">
                  <h5>Register</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  ul {
    gap: 1.5rem;
  }
`;
