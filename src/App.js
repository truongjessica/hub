import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import { FlashCard, Group, Home, VideoCall, Forum, Error } from "./pages";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<SharedLayout />>
          <Route index element=<Home />></Route>
          <Route path="/flash-cards" element=<FlashCard /> />
          <Route path="/forum" element=<Forum /> />
          <Route path="/groups" element=<Group /> />
          <Route path="/video-call" element=<VideoCall /> />
          <Route path="*" element=<Error /> />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div className="App">
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
</div>; */
}
