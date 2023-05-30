import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Header } from "./components/Header"
import ProtectedRoute from "./components/ProtectedRoute"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Login } from "./pages/Login"
import { SignUp } from "./pages/SignUp"
import { Backend } from "./pages/Backend"
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext"
import { StockProvider } from "./contexts/StockContext"
import { UserProvider } from "./contexts/UserContext"


function App() {
    return (
        <>
            <UserProvider>
                <StockProvider>
                    <ShoppingCartProvider>
                        <Header />
                        <Container className="mb-4">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/store" element={<Store />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<SignUp />} />
                                <Route path="/backend" element={<ProtectedRoute admin={true}><Backend /></ProtectedRoute>} />
                            </Routes>
                        </Container>
                    </ShoppingCartProvider>
                </StockProvider>
            </UserProvider>
        </>
    )
}

export default App
