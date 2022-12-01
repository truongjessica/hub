import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GroupCard from "../components/GroupCard";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import CardListItem from "../components/CardListItem";

var cards = [
  { number: 0, question: "Big O Notation", answer: "Big O Notation is a tool used to describe the time complexity of algorithms. It calculates the time taken to run an algorithm as the input grows" },
  { number: 1, question: "OOP", answer: "Object-oriented programming (OOP) is a style of programming characterized by the identification of classes of objects closely linked with the methods" },
  { number: 2, question: "Compiler", answer: "A compiler is a special program that translates a programming language's source code into machine code, bytecode or another programming language." },
  { number: 3, question: "JVM", answer: "The Java virtual machine manages application memory and provides a portable execution environment for Java-based applications." },
];

// const baseURL = "";

const FlashCard = () => {
  // const [cards, setCards] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setCards(response.data);
  //   });
  // }, []);

  const func = (i) => {
    setI(i)
    setFlip(i < end-1 && flip ? !flip : flip)
  }

  const question ={
    paddingTop: '170px', 
    fontSize: "40px"
  }
  const answer ={
    paddingTop: '170px', 
    fontSize: "20px"
  }
  const end = cards.length
  const [i, setI] = useState(0)
  const [flip, setFlip] = useState(false)
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

                <Card.Text style={ flip ? answer : question }>{flip ? cards[i].answer: cards[i].question}</Card.Text>
                <div className="sml">
                  <ButtonStyle>
                    <Button onClick={() => setFlip(!flip)}>Flip</Button>
                    <Button onClick={() => {setI(i + (i < end-1 ? 1 : 0)); setFlip(i < end-1 && flip ? !flip : flip)}} primary>Next</Button>
                  </ButtonStyle>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col sm={5}>
            <div class="m-1 overflow-auto">
              {cards.map((group) => (
                <CardListItem 
                  groupname={group.question}
                  number={group.number}
                  func={func}
                />
              ))}
            </div>
            <Button primary>
              <a href="/add-card" style={{ color: "#FFFFFF", textDecoration: 'none'}}>
                      Add Card
              </a>
            </Button>
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


