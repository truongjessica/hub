import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

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
            <Card hoverable>
              <Card.Body>
                <a href="/create-team">
                  <Card.Title style={{ color: "#F2831A" }}>
                    Create A Team
                  </Card.Title>{" "}
                </a>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col-lg-6 mb-4">
            <Card hoverable>
              <Card.Body>
              <a href="/join-team">
                <Card.Title style={{ color: "#F2831A" }}>
                  Join Your Team
                </Card.Title>
                </a>
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
