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
          <Route path="/group" element=<Group /> />
          <Route path="/meeting" element=<VideoCall /> />
          <Route path="*" element=<Error /> />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
