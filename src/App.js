import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import {
  FlashCard,
  Group,
  Home,
  VideoCall,
  Forum,
  Error,
  JoinTeam,
  CreateTeam,
  Register,
  ReadMore,
  Login,
  VerifyPage,
} from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import GroupSelectionPage from "./pages/GroupSelectionPage";
import AddCard from "./pages/AddCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<SharedLayout />>
          <Route index element=<Home />></Route>
          <Route path="/flash-cards" element=<FlashCard /> />
          <Route path="/add-card" element=<AddCard /> />
          <Route
            path="/forum"
            element=<ProtectedRoute>
              <Forum />
            </ProtectedRoute>
          />
          <Route
            path="/group"
            element=<ProtectedRoute>
              <GroupSelectionPage />
            </ProtectedRoute>
          />
          <Route
            path="/join-team"
            element=<ProtectedRoute>
              <JoinTeam />
            </ProtectedRoute>
          />
          <Route
            path="/create-team"
            element=<ProtectedRoute>
              <CreateTeam />
            </ProtectedRoute>
          />
          <Route path="/meeting" element=<VideoCall /> />
          <Route path="/register" element=<Register /> />
          <Route path="/user/verify-email" element=<VerifyPage /> />
          <Route path="/login" element=<Login /> />
          <Route
            path="/readmore"
            element=<ProtectedRoute>
              <ReadMore />
            </ProtectedRoute>
          />
          <Route path="*" element=<Error /> />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
