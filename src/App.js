import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import Card from "react-bootstrap/Card";
import "./App.css";
import Forum from "./Forum";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarComponent />

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

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forum />} />
          {/* <Route path="/Flashcards" element={<FlashCards />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
