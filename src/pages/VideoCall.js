import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GroupCard from "../components/GroupCard";
import logo from "../assets/logo.svg";
import Card from "react-bootstrap/Card";

var cards = [
  { groupname: "What time are we meeting?" },
  { groupname: "5pm" },
  { groupname: "Thanks!" },
  { groupname: "No prob." },
];

const VideoCall = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container>
        <Row>
          <Col sm={7}>
            <Card style={{ height: "75%" }}>
              <Card.Body>
                <Card.Title></Card.Title> <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5}>
            <div className="m-1 overflow-auto">
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

export default VideoCall;
