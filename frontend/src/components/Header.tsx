import { Container, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Cart4 } from "react-bootstrap-icons";
import { useShoppingCartContext } from "../contexts/ShoppingCartContext";
import { useUserContext } from "../contexts/UserContext";


export function Header() {
    const { openCart, cartItems } = useShoppingCartContext()
    const { userData, logout } = useUserContext()

    const renderUser = () => {
        if(!userData){
            return(<Nav.Link to={"/login"} as={NavLink}>登入</Nav.Link>)
        }
        return (
            <NavDropdown title={userData.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">個人檔案</NavDropdown.Item>
                <NavDropdown.Item href="/orderhistory">歷史訂單</NavDropdown.Item>
                <NavDropdown.Divider />
                {userData.isAdmin && (
                    <NavDropdown.Item href="/backend">網站後台</NavDropdown.Item>
                )}
                <NavDropdown.Item onClick={logout}>登出</NavDropdown.Item>
            </NavDropdown>
        )
    }

    return (
        <Navbar sticky="top" className="bg-dark shadow-sm">
            <Container>
                <Nav className="me-auto text-white">
                    <Navbar.Brand>pastore</Navbar.Brand>
                    <Nav.Link to={"/"} as={NavLink}>主頁</Nav.Link>
                    <Nav.Link to={"/store"} as={NavLink}>商城</Nav.Link>
                </Nav>
                <Nav>
                    {renderUser()}
                </Nav>
                <button onClick={openCart} className="cartBtn" style={{ border: "none", backgroundColor: "inherit", width: "3rem", height: "3rem" }}>
                    <Cart4 className='bi bi-cart' color='secondary' width="24" height="24" fill="currentColor" viewBox="0 0 16 16" />
                    <div className="rounded-circle bg-warning d-flex justify-content-center align-items-center" style={{ color: "rgba(0,0,0,0.9)", width: "1.4rem", height: "1.4rem", position: "absolute", transform: "translate(100%, -40%)" }}>
                        {cartItems.length}
                    </div>
                </button>
            </Container>
        </Navbar>
    )
}