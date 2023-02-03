import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
return (
<>
  <Navbar bg="danger" variant="danger">
    <Container className="d-flex justify-content-between align-items-center">
      <div>
        <Link to="/" className="text-white m-2 text-decoration-none">
          <span> 🏠 Home</span>
        </Link>
        <Link to="/contacto" className="text-white m-2 text-decoration-none">
          <span> 📒 Contacto</span>
        </Link>
      </div>
      <span className="navbar-text text-white mx-4">
      Happy Cake 🍰
      </span>
    </Container>
  </Navbar>
</>
);
}