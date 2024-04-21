import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//import { NavLink } from "react-router-dom";

/* import logo from "../assets/logo.png"; */

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="container-fluid navbar navbarFluid"
    >
      <Container className="navbarContainer container-fluid">
        <Navbar.Brand href="#home">Inst-Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">primera gilada</Nav.Link>
            <Nav.Link href="#pricing">segunda gilada</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Otra cosa</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              no se que sería esto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
