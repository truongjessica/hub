import React from "react";
import imageSrc from "../assets/home1.png";
import imageSrc1 from "../assets/Home2.png";
import styled from "styled-components";
const Home = () => {
  return (
    <Wrapper>
      <div className="container-lg">
        <div className="img-wrapper container">
          <img src={imageSrc} className="img-fluid" alt="" />
          <Image2>
            <img src={imageSrc1} className="circle" />
          </Image2>
        </div>
      </div>
      <div className="container-sml">
        <Text>The Ultimate communication platform</Text>
      </div>
      <div>
        <Text2>
          Provide multiple tools to help students and instructors to commucate
          easier. Help creating a friendly environment for team building and
          group meeting for students.
        </Text2>
        <div className="sml">
          <ButtonStyle>
            <Button>Register Now</Button>
            <Button primary>Read More</Button>
          </ButtonStyle>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  img {
    width: 100%;
    max-width: 350px;
    float: right;
    margin: 0 0 0 15px;
  }
`;

const Text = styled.div`
  position: absolute;
  left: 130px;
  top: 150px;
  font-size: 55px;
  font-weight: bold;
  float: left;
  width: 30%;
`;

const Image2 = styled.div`
  width: 55%;
  position: absolute;
  right: 700px;
  top: 150px;
`;

const Text2 = styled.div`
  width: 40%;
  font-size: 15px;
  position: absolute;
  left: 100px;
  top: 450px;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#F2831A" : "white")};
  color: ${(props) => (props.primary ? "white" : "#F2831A")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #F2831A;
  border-radius: 10px;
  position: right:200px; top:400px;
`;

const ButtonStyle = styled.div`
  position: absolute;
  left: 100px;
  top: 530px;
`;
