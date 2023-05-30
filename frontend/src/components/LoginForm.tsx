import '../styles/login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useUserContext } from '../contexts/UserContext'


export function LoginForm() {
    
    const { login } = useUserContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login({ email, password })
    }

    return (
        <form onSubmit={submitHandler}>
            <h3>登入</h3>
            <div className="mb-3">
                <label>信箱</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="輸入信箱"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>密碼</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="輸入密碼"
                    minLength={8}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {/* <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                        記住我
                    </label>
                </div>
            </div> */}
            <div className="d-grid">
                <button type="submit" className="btn btn-secondary">
                    確認
                </button>
            </div>
            <p className="forgot-password text-right">
                <Link to={`/signup`}>創建帳戶</Link>
            </p>
            {/* <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p> */}
        </form>
    );
}