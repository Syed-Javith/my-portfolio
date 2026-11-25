import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
function NavBar() {
  return (
     <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-white/90 backdrop-blur shadow-sm">
     <Container>
       <Navbar.Brand href="#home">
       <img src={require("../../assets/images/rsj.png")} alt="RSJ" height={20} width={100} />
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#about">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link eventKey={2} href="#contact">Contact</Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
  );
}

export default NavBar;
