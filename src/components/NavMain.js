import { Container, Nav, Navbar, } from "react-bootstrap";

function NavMain() {
  return (
      <Container fluid="800">
        <Navbar bg="dark" expand="lg" >
          <Navbar.Brand href="http://localhost:3000" className="text-info pl-4"> NavBar </Navbar.Brand    > 

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="text-center">
            <Nav.Link href="https://html.spec.whatwg.org/multipage/" className="text-white" target="_blank"> HTML </Nav.Link>
            <Nav.Link href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" className="text-white"> CSS </Nav.Link>
            <Nav.Link href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" className="text-white">JavaScript</Nav.Link>
          </Nav>

          </Navbar.Collapse>

        </Navbar>
      </Container>
  )

}

export default NavMain;