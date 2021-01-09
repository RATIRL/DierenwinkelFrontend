import logo from './logo.svg';
import './App.css';
import ProductenComponent from "./ProductenComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from "react-bootstrap/NavDropdown";



function App() {
  return (
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Dierenwinkel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Categories" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.0">Alles</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">Voeding</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Speelgoed</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Habitat</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
}

export default App;
