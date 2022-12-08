import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";
const Navbar = () => {
  const logo = require("../assets/logo.png");
  const { user } = useUserContext();
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-lg text-center">
          <div className="col-5">
            {/* <Link className="nav-link active" to="/"> */}
            <a
              className="navbar-brand"
              href="/"
              style={{ color: "green", fontWeight: "bold" }}
            >
              <img src={logo} style={{ width: "20%" }} />
              Helper Hacker
            </a>{" "}
            {/* </Link> */}
          </div>
          <div className="col-5">
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
            </ul>
          </div>
          <div className="col">
            {user ? (
              <ul className="navbar-nav">
                <li className="nav-item">Name: {user.name}</li>
              </ul>
            ) : (
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
            )}
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
