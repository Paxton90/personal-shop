import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Header } from "./components/Header"

function App() {
  return (
    <>
    <Header />
    <Container className="mb-4">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Store" element={<Store />}></Route>
        </Routes>
    </Container>
    </>
  )
}

export default App
