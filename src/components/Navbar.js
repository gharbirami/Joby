import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/joby.png';
function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Link className="navbar-brand" to="/" >
            <img src={Logo} alt="logo" className="mezu_logo" />
          </Link>{" "}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/signin">Signin</Nav.Link>
            <Nav.Link href="/reclation_list">Reclamations</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;