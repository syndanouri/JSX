import React from 'react'
import { Navbar , Container , Nav} from 'react-bootstrap'
const Navvv = () => {
  return (
    <div>
    
    <Navbar bg="white" variant="white">
    <Container className='navelm'>
      <Navbar.Brand href="#home" style={{color:"#00cba9", fontSize:30 , marginRight:700 }}>portfolio</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">About me</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navvv