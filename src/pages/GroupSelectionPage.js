import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function GroupSelectionPage() {
  return (
    <div className="GroupSelectionPage">
      <div
        class="container"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div class="row">
          <div class="col-lg-6 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Create A Team</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col-lg-6 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Join Your Team</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupSelectionPage;