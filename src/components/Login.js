import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming login logic here
        const storedEmail = localStorage.getItem('signupEmail');
        const storedPassword = localStorage.getItem('signupPassword');

        if (email === storedEmail && password === storedPassword) {
            // Set the user as logged in
            localStorage.setItem('isLoggedIn', 'true');
            console.log('Login successful, navigating to /quiz');
            // Navigate to quiz page on successful login
            navigate('/quiz');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="Login-page">
            <div className="Login-image">
                <img src={`${process.env.PUBLIC_URL}/images/login.jpg`} alt="Login" />
            </div>
            <div className="Login-content">
                <div className="Login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                </div>
                <div className="not-have-account">
                    <p>Don't have an account?</p>
                    <button onClick={() => navigate('/signup')}>SignUp</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
