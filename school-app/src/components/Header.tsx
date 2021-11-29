import React from 'react'
import { Navbar,Nav, Container } from 'react-bootstrap'
import {RiHome4Fill} from 'react-icons/ri'

const Header = () => {
    return (        
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="/home"><RiHome4Fill /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/admission">Admission</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>
          <img src="https://image.freepik.com/free-vector/luxury-university-logo-design_139869-120.jpg" height={80} width={100} />
          </Container>
        </Navbar>
    )
}

export default Header
