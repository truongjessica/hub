import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GroupCard from "../components/GroupCard";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

var cards = [
  { groupname: "Big O Notation" },
  { groupname: "OOP" },
  { groupname: "Compiler" },
  { groupname: "JVM" },
];

const FlashCard = () => {
  return (
    <div class="d-flex justify-content-center">
      <Container>
        <Row>
          <Col sm={7}>
            <Card style={{ height: '75%' }}>
              <Card.Body>
                <Card.Title>
                  MAIN FLASHCARD
                </Card.Title>{" "}
                <Card.Text></Card.Text>
                <div className="sml">
          <ButtonStyle>
            <Button>Flip</Button>
            <Button primary>Next</Button>
          </ButtonStyle>
        </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col sm={5}>
            <div class="m-1 overflow-auto">
              {cards.map((group) => (
                <GroupCard groupname={group.groupname} />
              ))}
            </div>
            <Button primary>Add Card</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FlashCard;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#F2831A" : "white")};
  color: ${(props) => (props.primary ? "white" : "#F2831A")};

  font-size: 1.5em;
  margin: 2em;
  padding: 0.25em 2em;
  border: 2px solid #F2831A;
  border-radius: 10px;
  position: right:200px; top:400px;
`;

const ButtonStyle = styled.div`
  position: absolute;
  left: 140px;
  top: 400px;
`;


