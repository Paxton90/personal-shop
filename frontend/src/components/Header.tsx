import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <Navbar sticky="top" className="bg-dark shadow-sm">
            <Container>
                <Nav className="me-auto">
                    <Navbar.Brand href="/">pastore</Navbar.Brand>
                    <Nav.Link to={"/Store"} as={NavLink}>商城</Nav.Link>          
                </Nav>
                <button className="cartBtn" style={{ border: "none", backgroundColor: "inherit", width: "3rem", height: "3rem" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    <div className="rounded-circle bg-warning d-flex justify-content-center align-items-center" style={{color:"rgba(0,0,0,0.9)", width: "1.2rem", height: "1.2rem", position: "absolute", transform: "translate(130%, -30%)"}}>
                        3
                    </div>
                </button>
            </Container>
        </Navbar>
    )
}