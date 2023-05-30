import { useEffect } from "react";
import { LoginForm } from "../components/LoginForm";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";


export function Login() {
    const { userData } = useUserContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (userData) {
            alert('您已登入')
            navigate("/store")
        }
    }, [location]);

    return (
        <div className="login-container">
            <LoginForm />
        </div>
    )
}
