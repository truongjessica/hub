import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateTeam = () => {
  return (
    <div>
      <Card
        style={{
          width: "90%",
          position: "absolute",
          left: "50%",
          top: "60%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card.Header>Create Team</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Group Name</Form.Label>
              <Form.Control type="email" placeholder="Hub Team 12" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number of Members</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Class Section</Form.Label>
              <Form.Control type="password" placeholder="001" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Professor Name (optional)</Form.Label>
              <Form.Control type="password" placeholder="Anjum Chida" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Supervisor Name (optional)</Form.Label>
              <Form.Control type="password" placeholder="John Doe" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit{" "}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CreateTeam;
