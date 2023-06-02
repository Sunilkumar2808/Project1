
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
function BasicExample() {
  return (
    <Navbar bg="black" className="text-white" expand="lg">
      <Container >
        <Navbar.Brand href="#home" className="text-white" >DashBoard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-white">
          <Nav className="me-auto text-white " >
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>About us</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Career</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Blogs</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default BasicExample;  