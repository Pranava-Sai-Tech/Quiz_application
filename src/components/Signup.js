import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Signup.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save user details in local storage
        localStorage.setItem('signupEmail', email);
        localStorage.setItem('signupPassword', password);
        console.log('Navigating to /login');  // Debugging line
        navigate('/login');
    };

    return (
        <div className="signup-page">
            <div className="signup-image">
                <img src={`${process.env.PUBLIC_URL}/images/quiz open.png`} alt="Signup" />
            </div>
            <div className="signup-content">
                <div className="signup-form">
                    <h2>Sign Up</h2>
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
                        <button type="submit">Sign Up</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                </div>
                <div className="already-have-account">
                    <p>Already have an account?</p>
                    <button onClick={() => navigate('/login')}>Go to Login</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
