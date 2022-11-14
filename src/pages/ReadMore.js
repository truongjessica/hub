import React from "react";
import styled from "styled-components";
import imageSrc from "../assets/meeting.png";
import { Outlet, Link } from "react-router-dom";



const ReadMore = () => {
  return (
    <Wrapper>
         <div className="container-lg">
        <div className="img-wrapper container">
          <img src={imageSrc} className="img-fluid" alt="" />
        </div>
      </div>
      <div>
        <Text>
        What is this product for?
        </Text>
      </div>
      <div>
        <Text2>
        Manage your team with multiple tools along with the wide-range of support from the website to improve the production of your team. 
        This website provide multiple services for student to make the process of building group project easier such as group meeting with chat and video call feature.
        </Text2>
        <div className="sml">
          <ButtonStyle>
                <Link to="/meeting" > 
                <Button primary >Make Call</Button>
                 </Link>
          </ButtonStyle>
        </div>
      </div>
    </Wrapper>
  );
};

export default ReadMore;


const Wrapper = styled.div`
img {
    width: 100%;
    max-width: 450px;
    float: right;
    margin: 0 0 0 15px;
  }
`;
const Text = styled.div`
  position: absolute;
  left: 100px;
  top: 140px;
  font-size: 35px;
  font-weight: bold;
  float: left;
  width:30%;
  color: #F2831A;
`;

const Text2 = styled.div`
  width: 40%;
  font-size: 15px;
  position: absolute;
  left: 100px;
  top: 250px;
  color: #757575;
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
  left: 120px;
  top: 340px;
`;
