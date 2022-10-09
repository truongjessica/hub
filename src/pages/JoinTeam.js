import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const JoinTeam = () => {
  return (
    <div>
      <Card
        style={{
          width: "90%",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card.Header>Join Team</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Group Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Label><b>OR</b></Form.Label>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Group ID</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Request
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JoinTeam;
