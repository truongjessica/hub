import React from "react";
import imageSrc from "../assets/404.png";
import styled from "styled-components";
const Error = () => {
  return (
    <Wrapper>
      <div className="container-lg">
        <div className="img-wrapper container">
          <img src={imageSrc} className="img-fluid" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  img {
    width: 100%;
    max-width: 550px;
  }
`;
