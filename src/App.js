import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import GameList from "./components/games/GameList";

import "./App.css";
import GameDetail from "./components/games/GameDetail";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/">
          <Navbar.Brand>Lesson Task 3</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" exact element={GameList} />
          <Route path="/game/:slug" exact element={GameDetail} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
