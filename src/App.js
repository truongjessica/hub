import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import './App.css';
import Forum from './Forum'
import FlashCards from './Flashcards';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/Flashcards" element={<FlashCards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

