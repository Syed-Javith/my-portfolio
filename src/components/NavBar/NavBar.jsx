import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
function NavBar() {
  return (
    <Navbar collapseOnSelect className="bg-black overflow-y-hidden h-24" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
            <img src={require("../../assets/images/rsj.png")} height={40} width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link eventKey="1" href="#home">Home</Nav.Link>
            <Nav.Link eventKey="2" href="#about">About</Nav.Link>
            <Nav.Link eventKey="3" href="#skills">Skills</Nav.Link>
            <Nav.Link eventKey="4" href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;