import React from "react";
import { Container, Nav } from "react-bootstrap";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../Images/flower-logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebaseinit";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    navigate("/home");
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img width={"40px"} src={logo} alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Brand className="nav-headings" href="#home">
            Rahul's Photography
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="home#services">
                Services
              </Nav.Link>

              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>

              {user ? (
                <button onClick={handleSignOut}>Sign Out</button>
              ) : (
                <Nav.Link href="/login">Log In</Nav.Link>
              )}
              {/* <Nav.Link href="/signup">Sign Up</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
