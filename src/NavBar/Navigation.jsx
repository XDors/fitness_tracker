  import React from 'react';
  import { Navbar, Container, Nav } from 'react-bootstrap';
  
  const Navigation = ({userLogout, user}) => {
      
    return (
    <Navbar /* fixed='top' */ bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="/">Fitness Tracker</Navbar.Brand>
                <Nav className="navBar">
                    { !user && <Nav.Link href="/login">Login</Nav.Link>}
                    { !user && <Nav.Link href="/signup">Sign-up</Nav.Link>}
                    { user && <Nav.Link href="/">Home</Nav.Link>}
                    <Nav.Link href="/routines">Routines</Nav.Link>
                    <Nav.Link href="/activities">Activities</Nav.Link>
                    { user && <Nav.Link href="/login" onClick={userLogout}>Logout</Nav.Link>}
                </Nav>
        </Container>
  </Navbar>

  )}

  export default Navigation;