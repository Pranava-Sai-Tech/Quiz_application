import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Quiz from './components/Quiz';

function App() {
    const isLoggedIn = () => {
        const loggedIn = !!localStorage.getItem('isLoggedIn');
        console.log('isLoggedIn:', loggedIn);
        return loggedIn;
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;
