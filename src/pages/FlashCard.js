import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GroupCard from "../components/GroupCard";
import userIcon from "../images/user.png";
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
            <Card style={{ color: "#F2831A" }}>
              <Card.Body>
                <Card.Title style={{ color: "#F2831A" }}>
                  MAIN FlashCard
                </Card.Title>{" "}
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5}>
            <div class="m-4 h-75 overflow-auto">
              {cards.map((group) => (
                <GroupCard groupname={group.groupname} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FlashCard;
