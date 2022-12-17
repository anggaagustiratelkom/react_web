import React from "react"
import { Navbar,Contaioner,Nav, Container } from "react-bootstrap"
const NavigationBar = ()=>{
    return(
        <Navbar bg='dark' variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navigation Bar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#barang'>Barang</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
    )
}
export default NavigationBar