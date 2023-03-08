import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navi() {
  return (
	<>
    <Navbar key={"md"} bg="light" expand="md" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">zinkki BOOK</Navbar.Brand>
        <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-md"} />
        <Navbar.Offcanvas
          id={"offcanvasNavbar-expand-md"}
          aria-labelledby={"offcanvasNavbarLabel-expand-md"}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={"offcanvasNavbarLabel-expand-md"}>
						zinkki BOOK
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={"offcanvasNavbarDropdown-expand-md"}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  </>
	);
}
