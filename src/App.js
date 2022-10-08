// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComponent from './components/NavbarComponent';
import './App.css';
import Forum from './Forum'

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div><h1>Navbar</h1></div>
      {/* <Navbar /> */}
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
