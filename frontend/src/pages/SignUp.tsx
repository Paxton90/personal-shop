import { useEffect } from "react";
import { SignUpForm } from "../components/SignUpForm";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";


export function SignUp() {
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
            <SignUpForm />
        </div>
    )
}
