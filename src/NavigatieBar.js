import React, {Component} from 'react'
import Navbar from "react-bootstrap/NavBar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

class NavigatieBar extends Component {
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Dierenwinkel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            <NavDropdown.Item href="producten?category=alle">Alle</NavDropdown.Item>
                            <NavDropdown.Item href="producten?category=voeding">Voeding</NavDropdown.Item>
                            <NavDropdown.Item href="producten?category=speelgoed">Speelgoed</NavDropdown.Item>
                            <NavDropdown.Item href="producten?category=habitat">Habitat</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };
}
export default NavigatieBar;