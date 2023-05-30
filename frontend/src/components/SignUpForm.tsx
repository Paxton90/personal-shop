import '../styles/login.css'
import { useState } from 'react'
import { useUserContext } from '../contexts/UserContext'
import { Link } from 'react-router-dom'


export function SignUpForm() {

    const { signUp } = useUserContext()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [comfirmPassword, setComfirmPassword] = useState('')

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(comfirmPassword != password){
            alert("密碼驗證失敗")
            return
        }
        signUp({ name, email, password })
    }

    return (
        <form onSubmit={submitHandler}>
            <h3>註冊</h3>
            <div className="mb-3">
                <label>使用者名稱</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="輸入名字"
                    minLength={2}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
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
            <div className="mb-3">
                <label>確認密碼</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="再次輸入密碼"
                    minLength={8}
                    onChange={(e) => setComfirmPassword(e.target.value)}
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-secondary">
                    確認
                </button>
            </div>
            <p className="forgot-password text-right">
                <Link to={`/login`}>登入現有帳戶</Link>
            </p>
        </form>
    );
}